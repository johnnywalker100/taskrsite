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
        <p className="text-muted-foreground mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to taskr. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our app and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-3">
              We collect several types of information from and about users of our Service:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and email address</li>
              <li>Phone number (optional)</li>
              <li>Payment information (processed securely through Apple Pay)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Family and Child Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Family member names and ages</li>
              <li>Child account information (with parental consent)</li>
              <li>Task assignments and completion history</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>App usage data and interaction patterns</li>
              <li>Device information (type, operating system, unique device identifiers)</li>
              <li>Log data (IP address, browser type, pages visited, time spent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process your transactions and manage your subscriptions</li>
              <li>Send you notifications about tasks and updates</li>
              <li>Respond to your comments, questions, and provide customer support</li>
              <li>Monitor and analyze usage and trends to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security concerns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Children's Privacy</h2>
            <p className="text-muted-foreground mb-3">
              taskr is designed for family use, including children. We take children's privacy seriously and comply with the Children's Online Privacy Protection Act (COPPA).
            </p>
            <p className="text-muted-foreground mb-3">
              We require verifiable parental consent before collecting, using, or disclosing personal information from children under 13. Parents can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Review their child's personal information</li>
              <li>Request deletion of their child's personal information</li>
              <li>Refuse to allow further collection or use of their child's information</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We collect only the minimum information necessary to provide the Service for child accounts, including name, age, and task-related data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>With your consent:</strong> We may share information with your explicit consent</li>
              <li><strong>Service providers:</strong> We may share information with third-party service providers who perform services on our behalf (e.g., payment processing, data analysis, email delivery)</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
              <li><strong>Business transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground mb-3">
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal data by employees</li>
              <li>Secure payment processing through Apple Pay</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When you delete your account, we will delete or anonymize your personal data, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights</h2>
            <p className="text-muted-foreground mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              <li><strong>Withdraw consent:</strong> Withdraw your consent at any time where we rely on consent</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise these rights, please contact us at privacy@taskr.app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-3">
              We use cookies and similar tracking technologies to track activity on our Service. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
            </p>
            <p className="text-muted-foreground">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
            <p className="text-muted-foreground mb-3">
              Our Service may contain links to third-party websites or services that are not owned or controlled by taskr. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <p className="text-muted-foreground">
              We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-3">
              We may update our Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last updated" date at the top of this Privacy Policy</li>
              <li>Sending you an email notification (for material changes)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground mb-3">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@taskr.app<br />
              Phone: 1-800-TASKR-APP<br />
              Address: 123 Family Street, Suite 100, San Francisco, CA 94102
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. California Privacy Rights</h2>
            <p className="text-muted-foreground">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your personal information, and the right to opt-out of the sale of your personal information. We do not sell personal information.
            </p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
