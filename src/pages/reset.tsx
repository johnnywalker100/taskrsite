import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, Loader2, ArrowRight, Smartphone } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";

type ResetStatus = "loading" | "ready" | "no-token";

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

  useEffect(() => {
    // Check for tokens in URL
    const hash = window.location.hash;
    const searchParams = new URLSearchParams(window.location.search);
    
    let accessToken: string | null = null;
    let type: string | null = null;

    // Try to get tokens from hash
    if (hash) {
      const hashParams = new URLSearchParams(hash.substring(1));
      accessToken = hashParams.get("access_token");
      type = hashParams.get("type");
    }

    // Fallback to query params
    if (!accessToken) {
      accessToken = searchParams.get("access_token");
      type = searchParams.get("type");
    }

    // Check for token_hash
    const tokenHash = searchParams.get("token_hash") || (hash ? new URLSearchParams(hash.substring(1)).get("token_hash") : null);

    if (accessToken || tokenHash) {
      // We have a valid reset token, redirect to the app
      setState({
        status: "ready",
        message: "Reset Your Password",
        description: "Open the taskr app to set a new password for your account.",
      });
    } else {
      setState({
        status: "no-token",
        message: "Invalid Reset Link",
        description: "This password reset link may have expired or already been used. Please request a new password reset from the app.",
      });
    }
  }, []);

  const handleOpenApp = () => {
    // Build deep link with the same tokens
    const hash = window.location.hash;
    const search = window.location.search;
    
    // Try to open the app with the full URL params
    let deepLink = "taskr://reset";
    if (hash) {
      deepLink += hash;
    } else if (search) {
      deepLink += search;
    }
    
    window.location.href = deepLink;
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
                {state.status === "loading" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-mint-dark animate-spin" />
                  </div>
                )}
                {state.status === "ready" && (
                  <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-mint-dark" />
                  </div>
                )}
                {state.status === "no-token" && (
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-amber-600" />
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
                <div className="flex flex-col gap-3">
                  <Button 
                    className="w-full bg-black text-white hover:bg-black/90 rounded-full"
                    onClick={handleOpenApp}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Open taskr App
                  </Button>
                  <p className="text-center text-muted-foreground text-sm">
                    The app will open and guide you through setting a new password.
                  </p>
                </div>
              )}
              {state.status === "loading" && (
                <p className="text-center text-muted-foreground">
                  Please wait...
                </p>
              )}
              {state.status === "no-token" && (
                <div className="flex flex-col gap-3">
                  <p className="text-center text-muted-foreground text-sm">
                    If you need to reset your password, open the taskr app and tap "Forgot Password" on the login screen.
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

