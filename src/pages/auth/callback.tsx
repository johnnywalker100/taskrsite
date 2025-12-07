import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Loader2, ArrowRight, Smartphone } from "lucide-react";
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

type CallbackStatus = "loading" | "success" | "error";

interface CallbackState {
  status: CallbackStatus;
  message: string;
  description?: string;
}

export default function AuthCallbackPage() {
  const [state, setState] = useState<CallbackState>({
    status: "loading",
    message: "Completing sign in...",
  });

  useEffect(() => {
    const handleCallback = async () => {
      // Check if Supabase is configured
      if (!supabase) {
        setState({
          status: "error",
          message: "Configuration Error",
          description: "Supabase is not configured. Please contact support.",
        });
        return;
      }

      // Get tokens from URL hash (OAuth returns tokens in hash)
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);
      
      let accessToken: string | null = null;
      let refreshToken: string | null = null;

      // Try to get tokens from hash
      if (hash) {
        const hashParams = new URLSearchParams(hash.substring(1));
        accessToken = hashParams.get("access_token");
        refreshToken = hashParams.get("refresh_token");
      }

      // Check for error in URL
      const error = searchParams.get("error");
      const errorDescription = searchParams.get("error_description");

      if (error) {
        setState({
          status: "error",
          message: "Sign In Failed",
          description: errorDescription || error,
        });
        return;
      }

      // Check for code (PKCE flow)
      const code = searchParams.get("code");

      if (code) {
        try {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

          if (exchangeError) {
            setState({
              status: "error",
              message: "Sign In Failed",
              description: exchangeError.message,
            });
            return;
          }

          setState({
            status: "success",
            message: "Sign In Successful!",
            description: "You have been successfully signed in.",
          });
          return;
        } catch (err) {
          setState({
            status: "error",
            message: "Sign In Failed",
            description: err instanceof Error ? err.message : "An unexpected error occurred",
          });
          return;
        }
      }

      // If we have access_token and refresh_token, set the session
      if (accessToken && refreshToken) {
        try {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            setState({
              status: "error",
              message: "Sign In Failed",
              description: sessionError.message,
            });
            return;
          }

          setState({
            status: "success",
            message: "Sign In Successful!",
            description: "You have been successfully signed in.",
          });
          return;
        } catch (err) {
          setState({
            status: "error",
            message: "Sign In Failed",
            description: err instanceof Error ? err.message : "An unexpected error occurred",
          });
          return;
        }
      }

      // No tokens or code found
      setState({
        status: "error",
        message: "Invalid Callback",
        description: "No authentication data found. Please try signing in again.",
      });
    };

    handleCallback();
  }, []);

  return (
    <>
      <Head>
        <title>Sign In - taskr</title>
        <meta name="description" content="Completing sign in to taskr" />
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
                {state.status === "loading" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-mint-dark animate-spin" />
                  </div>
                )}
                {state.status === "success" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-mint-dark" />
                  </div>
                )}
                {state.status === "error" && (
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
              {state.status === "success" && (
                <>
                  <p className="text-center text-muted-foreground">
                    You can now open the taskr app to continue.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button 
                      className="w-full bg-black text-white hover:bg-black/90 rounded-full"
                      onClick={() => {
                        // Try to open the app via deep link
                        window.location.href = "taskr://authenticated";
                      }}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Open taskr App
                    </Button>
                    <Link href="/" className="w-full">
                      <Button variant="outline" className="w-full rounded-full">
                        Go to Homepage
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </>
              )}
              {state.status === "loading" && (
                <p className="text-center text-muted-foreground">
                  Please wait while we complete your sign in...
                </p>
              )}
              {state.status === "error" && (
                <div className="flex flex-col gap-3">
                  <p className="text-center text-muted-foreground text-sm">
                    Please try signing in again from the taskr app. If you continue to have issues, contact our support team.
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

