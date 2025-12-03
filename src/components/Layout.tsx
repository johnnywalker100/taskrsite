import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <footer className="bg-white border-t border-mint-light/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-mint flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Taskr</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Making family tasks and Screen Time management simple.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/#early-access" className="hover:text-foreground transition-colors">Join Beta</Link></li>
                <li><Link href="/#early-access" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mint-light/30 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Taskr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

