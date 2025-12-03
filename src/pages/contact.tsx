import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Taskr</title>
        <meta
          name="description"
          content="Get in touch with the Taskr team for support, feedback, or questions."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-mint flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">Taskr</span>
              </Link>
              <Link href="/">
                <Button variant="ghost">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or need help? We'd love to hear from you.
            </p>
          </div>

          <Card className="border-mint-light/50 max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-2xl gradient-mint flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Email Support</CardTitle>
              <CardDescription className="text-base mt-2">
                For any questions or support inquiries, reach out to us at:
              </CardDescription>
              <a 
                href="mailto:support@thetaskr.app" 
                className="text-xl font-semibold text-mint-dark hover:underline mt-4 block"
              >
                support@thetaskr.app
              </a>
            </CardHeader>
          </Card>

          <p className="text-center text-muted-foreground mt-12">
            We typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </>
  );
}

