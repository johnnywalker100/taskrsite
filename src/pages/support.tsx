import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MessageSquare, Shield } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SUPPORT_EMAIL = "sebas@thetaskr.app";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-mint-light/20 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <TaskrLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">Taskr</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section className="text-center space-y-6">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-mint-light/60 text-mint-dark text-sm font-semibold">
            We are here to help
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Taskr Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need help getting started, have feedback, or spotted an issue,
            our support team responds personally to every message.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <Mail className="w-4 h-4 mr-2" />
                Email {SUPPORT_EMAIL}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-mint-dark/40"
              asChild
            >
              <a href="https://www.thetaskr.app" target="_blank" rel="noreferrer">
                Visit Help Center
              </a>
            </Button>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="glass border-white/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Mail className="w-5 h-5 text-mint-dark" />
                Direct Email
              </CardTitle>
              <CardDescription>Reach us any time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>Send a message to <span className="font-semibold text-foreground">{SUPPORT_EMAIL}</span>.</p>
              <p>Include screenshots or screen recordings if it helps us understand the issue faster.</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <MessageSquare className="w-5 h-5 text-mint-dark" />
                Response Expectations
              </CardTitle>
              <CardDescription>Typical turnaround time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We respond within 1 business day and often much sooner.</p>
              <p>Urgent production issues are prioritized immediately.</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Shield className="w-5 h-5 text-mint-dark" />
                Helpful Details
              </CardTitle>
              <CardDescription>What to include</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Device & OS version</li>
                <li>App version or web browser</li>
                <li>Steps to reproduce the issue</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="glass rounded-3xl p-8 border border-white/40 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Billing or subscription issues?</h3>
              <p>Include the email tied to your Taskr account and the platform you subscribed through so we can find your plan fast.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Feature requests or feedback?</h3>
              <p>We love hearing how Taskr can get better. Share as much context as possible and we will route it to the product team.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Need to report a bug?</h3>
              <p>Send reproduction steps, what you expected to happen, and what happened instead. Logs or screenshots are extra helpful.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Concerned about privacy?</h3>
              <p>Review our <Link href="/privacy" className="text-foreground underline">Privacy Policy</Link> and reach out if you need data export or deletion assistance.</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-foreground">Still need help?</h2>
          <p className="text-muted-foreground">
            Send a quick email to <a className="underline text-foreground" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will jump in.
          </p>
        </section>
      </main>
    </div>
  );
}

