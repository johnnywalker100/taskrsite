import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <TaskrLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">taskr</span>
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
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 11, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to taskr. We take your privacy seriously and want you to understand how we collect, use, and protect your information. This policy explains what data we collect, why we collect it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and email address</li>
              <li>Optional profile details you choose to enter</li>
              <li>Payment information (processed securely by Apple through in-app purchases—we never see or store your full payment details)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Family & Child Information</h3>
            <p className="text-muted-foreground mb-3">
              Collected only with verified parental consent:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Child name and age</li>
              <li>Task lists, progress, and completion history</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Device type, operating system, and app version</li>
              <li>Interaction data (buttons tapped, screens viewed)</li>
              <li>Log information such as IP address, time of access, and general diagnostic data</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We do not collect precise location data, advertising identifiers, or any data unrelated to app functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and maintain the taskr service</li>
              <li>Manage your subscription and verify purchase status</li>
              <li>Support Screen Time and task-related features</li>
              <li>Send notifications about tasks and updates</li>
              <li>Improve app performance and reliability</li>
              <li>Prevent fraud and maintain security</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Children's Privacy</h2>
            <p className="text-muted-foreground mb-3">
              taskr can be used by families, including children, but child accounts require verified parental consent. We comply with the Children's Online Privacy Protection Act (COPPA).
            </p>
            <p className="text-muted-foreground mb-3">
              Parents can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>View their child's information</li>
              <li>Update or delete their child's data</li>
              <li>Stop further collection of their child's information at any time</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We collect only the information needed to run the app's family and task features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We do not sell or rent your personal information.
            </p>
            <p className="text-muted-foreground mb-3">
              We may share information only with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Service providers who help us deliver the app (e.g., analytics, cloud storage, email delivery)</li>
              <li>Apple, for processing subscriptions and verifying entitlements</li>
              <li>Legal authorities if required by law</li>
              <li>Successor entities only if taskr is ever acquired or merged, and only under the same privacy protections</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              All partners are required to protect your data and use it only for the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground mb-3">
              We use industry-standard safeguards to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              No system is completely secure, but we work hard to protect your information from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We keep your data only as long as needed to provide the service. If you delete your account, we delete or anonymize your personal information unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights</h2>
            <p className="text-muted-foreground mb-3">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your data</li>
              <li>Request corrections or deletion</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent</li>
              <li>Opt out of certain processing where applicable</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise any rights, email <a href="mailto:privacy@taskr.app" className="text-mint hover:underline">privacy@taskr.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cookies & Tracking</h2>
            <p className="text-muted-foreground mb-3">
              If you visit our website, we may use cookies to improve performance and remember your settings. You can disable cookies in your browser, but some features may not work as intended.
            </p>
            <p className="text-muted-foreground">
              The mobile app does not use third-party advertising trackers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
            <p className="text-muted-foreground">
              The app may include links to other websites. We are not responsible for the privacy practices of those sites. Review their policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. International Transfers</h2>
            <p className="text-muted-foreground">
              Your data may be stored or processed in locations outside your region. When this happens, we use appropriate safeguards to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy. If we make material changes, we will update the date at the top and may notify you in the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground mb-3">
              If you have questions or concerns, contact us:
            </p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:sebas@taskr.app" className="text-mint hover:underline">sebas@taskr.app</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. California Privacy Rights</h2>
            <p className="text-muted-foreground">
              If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt out of the sale of personal information. taskr does not sell personal information.
            </p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
