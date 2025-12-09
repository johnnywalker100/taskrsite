import Head from "next/head";
import Link from "next/link";
import { TaskrLogo } from "@/components/TaskrLogo";
import { CheckCircle2 } from "lucide-react";

export default function TestFlightThankYou() {
  return (
    <>
      <Head>
        <title>You're In – Taskr Beta</title>
        <meta name="description" content="Install the Taskr iOS beta via TestFlight." />
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
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-mint-dark" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              You're In
            </h1>
            <p className="text-xl text-muted-foreground">
              Install the iOS Beta
            </p>
          </div>

          {/* Step 1 */}
          <div className="glass rounded-2xl border border-white/40 p-6 sm:p-8 shadow-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-mint-dark text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="text-lg font-semibold text-foreground">Step 1: Install TestFlight</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Apple's beta app tool:
            </p>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-mint-dark hover:underline break-all"
            >
              https://apps.apple.com/app/testflight/id899247664
            </a>
          </div>

          {/* Step 2 */}
          <div className="glass rounded-2xl border border-white/40 p-6 sm:p-8 shadow-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-mint-dark text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="text-lg font-semibold text-foreground">Step 2: Open the Taskr beta link</h2>
            </div>
            <a
              href="https://testflight.apple.com/join/fhCu3yBy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-mint-dark hover:underline break-all mb-4"
            >
              https://testflight.apple.com/join/fhCu3yBy
            </a>
            <p className="text-muted-foreground">
              Tap <span className="font-medium text-foreground">View in TestFlight</span>, then <span className="font-medium text-foreground">Accept</span> and install Taskr.
            </p>
          </div>

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

