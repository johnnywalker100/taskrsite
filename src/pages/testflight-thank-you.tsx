import Head from "next/head";
import Link from "next/link";
import { TaskrLogo } from "@/components/TaskrLogo";
import { CheckCircle2 } from "lucide-react";

export default function TestFlightThankYou() {
  return (
    <>
      <Head>
        <title>Thank You – Taskr Beta</title>
        <meta name="description" content="Your TestFlight link for the Taskr beta." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen gradient-page">
        {/* Simple header */}
        <nav className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <TaskrLogo className="w-10 h-10" />
                <span className="text-2xl font-bold text-foreground">taskr</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="max-w-xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-mint-dark" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Thank you!
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's your TestFlight link. Share it with your family members so they can join the beta:
            </p>
          </div>

          {/* Card with TestFlight link */}
          <div className="glass rounded-2xl border border-white/40 p-6 sm:p-8 shadow-lg">
            <a
              href="https://testflight.apple.com/join/fhCu3yBy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-lg sm:text-xl font-medium text-mint-dark hover:underline break-all"
            >
              https://testflight.apple.com/join/fhCu3yBy
            </a>
          </div>

          {/* Footer text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Anyone with this link can install the Taskr beta on their iPhone.
          </p>

          {/* Back to home */}
          <div className="text-center mt-10">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

