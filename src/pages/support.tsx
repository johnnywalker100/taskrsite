import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";

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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <p className="inline-flex items-center px-4 py-1 rounded-full bg-mint-light/60 text-mint-dark text-sm font-semibold">
              Need help?
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Contact Taskr Support</h1>
            <p className="text-lg text-muted-foreground">
              The fastest way to reach us is by email. We read every message from families using Taskr.
            </p>
          </div>

          <Button size="lg" className="rounded-full px-10" asChild>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              {SUPPORT_EMAIL}
            </a>
          </Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

