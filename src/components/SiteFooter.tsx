import Link from "next/link";
import { TaskrLogo } from "@/components/TaskrLogo";

export function SiteFooter() {
  return (
    <footer className="glass border-t border-white/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TaskrLogo className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Taskr</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making family task management simple and fun.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.thetaskr.app"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Taskr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

