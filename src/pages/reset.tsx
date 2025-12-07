import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Loader2, ArrowRight, CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug: Log if env vars are missing (only in development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Supabase URL exists:', !!supabaseUrl);
  console.log('Supabase Key exists:', !!supabaseAnonKey);
}

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

type ResetStatus = "loading" | "ready" | "updating" | "success" | "error" | "no-token";

interface ResetState {
  status: ResetStatus;
  message: string;
  description?: string;
}

export default function ResetPasswordPage() {
  const [state, setState] = useState<ResetState>({
    status: "loading",
    message: "Processing...",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const initializeSession = async () => {
      // Check if Supabase is configured
      if (!supabase) {
        setState({
          status: "error",
          message: "Configuration Error",
          description: "Supabase is not configured. Please contact support.",
        });
        return;
      }

      // Get tokens from URL hash (Supabase uses hash fragments for password reset)
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);
      
      let accessToken: string | null = null;
      let refreshToken: string | null = null;
      let type: string | null = null;

      // Try to get tokens from hash
      if (hash) {
        const hashParams = new URLSearchParams(hash.substring(1));
        accessToken = hashParams.get("access_token");
        refreshToken = hashParams.get("refresh_token");
        type = hashParams.get("type");
      }

      // Fallback to query params
      if (!accessToken) {
        accessToken = searchParams.get("access_token");
        refreshToken = searchParams.get("refresh_token");
        type = searchParams.get("type");
      }

      // Check for token_hash (PKCE flow)
      const tokenHash = searchParams.get("token_hash") || (hash ? new URLSearchParams(hash.substring(1)).get("token_hash") : null);
      const tokenType = searchParams.get("type") || type;

      // If we have token_hash, verify it first
      if (tokenHash && tokenType === "recovery") {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: "recovery",
          });

          if (error) {
            setState({
              status: "error",
              message: "Invalid Reset Link",
              description: error.message,
            });
            return;
          }

          // Session is now set, show the password form
          setState({
            status: "ready",
            message: "Create New Password",
            description: "Enter your new password below.",
          });
          return;
        } catch (err) {
          setState({
            status: "error",
            message: "Reset Failed",
            description: err instanceof Error ? err.message : "An unexpected error occurred",
          });
          return;
        }
      }

      // If we have access_token and refresh_token, set the session
      if (accessToken && refreshToken) {
        try {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            setState({
              status: "error",
              message: "Invalid Reset Link",
              description: error.message,
            });
            return;
          }

          // Session is now set, show the password form
          setState({
            status: "ready",
            message: "Create New Password",
            description: "Enter your new password below.",
          });
          return;
        } catch (err) {
          setState({
            status: "error",
            message: "Reset Failed",
            description: err instanceof Error ? err.message : "An unexpected error occurred",
          });
          return;
        }
      }

      // No tokens found
      setState({
        status: "no-token",
        message: "Invalid Reset Link",
        description: "This password reset link may have expired or already been used. Please request a new password reset from the app.",
      });
    };

    initializeSession();
  }, []);

  const validatePassword = (): boolean => {
    if (password.length < 8) {
      setValidationError("Password must be at least 8 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword()) return;
    if (!supabase) return;

    setState({
      status: "updating",
      message: "Updating Password...",
    });

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setState({
          status: "error",
          message: "Update Failed",
          description: error.message,
        });
        return;
      }

      // Sign out after password reset
      await supabase.auth.signOut();

      setState({
        status: "success",
        message: "Password Updated!",
        description: "Your password has been successfully updated. You can now sign in with your new password.",
      });
    } catch (err) {
      setState({
        status: "error",
        message: "Update Failed",
        description: err instanceof Error ? err.message : "An unexpected error occurred",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password - taskr</title>
        <meta name="description" content="Reset your taskr account password" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen gradient-page flex flex-col">
        <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <TaskrLogo className="w-10 h-10" />
                <span className="text-2xl font-bold text-foreground">taskr</span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20">
          <Card className="w-full max-w-md glass border-white/40">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4">
                {(state.status === "loading" || state.status === "updating") && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-mint-dark animate-spin" />
                  </div>
                )}
                {state.status === "ready" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-mint-dark" />
                  </div>
                )}
                {state.status === "success" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-mint-dark" />
                  </div>
                )}
                {(state.status === "error" || state.status === "no-token") && (
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                )}
              </div>
              <CardTitle className="text-2xl font-bold">{state.message}</CardTitle>
              {state.description && (
                <CardDescription className="text-muted-foreground mt-2">
                  {state.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {state.status === "ready" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">New Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="pr-10"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="pr-10"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  {validationError && (
                    <p className="text-sm text-red-500">{validationError}</p>
                  )}
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-black/90 rounded-full"
                  >
                    Update Password
                  </Button>
                  <p className="text-center text-muted-foreground text-xs">
                    Password must be at least 8 characters long
                  </p>
                </form>
              )}
              {state.status === "success" && (
                <div className="flex flex-col gap-3">
                  <p className="text-center text-muted-foreground text-sm">
                    Open the taskr app and sign in with your new password.
                  </p>
                  <Link href="/" className="w-full">
                    <Button variant="outline" className="w-full rounded-full">
                      Go to Homepage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
              {(state.status === "loading" || state.status === "updating") && (
                <p className="text-center text-muted-foreground">
                  Please wait...
                </p>
              )}
              {(state.status === "error" || state.status === "no-token") && (
                <div className="flex flex-col gap-3">
                  <p className="text-center text-muted-foreground text-sm">
                    If you need to reset your password, open the taskr app and tap &ldquo;Forgot Password&rdquo; on the login screen.
                  </p>
                  <Link href="/support" className="w-full">
                    <Button variant="outline" className="w-full rounded-full">
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="/" className="w-full">
                    <Button variant="ghost" className="w-full rounded-full">
                      Go to Homepage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
