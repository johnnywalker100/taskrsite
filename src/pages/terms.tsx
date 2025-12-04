import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";

export default function TermsOfService() {
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
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using taskr, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-3">
              Permission is granted to temporarily download one copy of taskr for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained in taskr</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-3">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-muted-foreground">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Family Accounts and Child Safety</h2>
            <p className="text-muted-foreground mb-3">
              taskr allows parents to create accounts for their children. By creating child accounts, you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Confirm you are the parent or legal guardian of the child</li>
              <li>Consent to the collection and use of the child's information as described in our Privacy Policy</li>
              <li>Agree to monitor your child's use of the Service</li>
              <li>Understand that you are responsible for all activities under child accounts linked to your family</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Subscription and Payment</h2>
            <p className="text-muted-foreground mb-3">
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly basis.
            </p>
            <p className="text-muted-foreground mb-3">
              At the end of each billing cycle, your subscription will automatically renew unless you cancel it or we cancel it. You may cancel your subscription renewal through your account settings or by contacting our support team.
            </p>
            <p className="text-muted-foreground">
              A valid payment method, including credit card or Apple Pay, is required to process the payment for your subscription. You agree to provide current, complete, and accurate purchase and account information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Free Trial</h2>
            <p className="text-muted-foreground mb-3">
              taskr may offer a free trial subscription for a limited period. You may be required to enter your billing information in order to sign up for the free trial.
            </p>
            <p className="text-muted-foreground">
              If you do enter your billing information when signing up for the free trial, you will not be charged until the free trial has expired. On the last day of the free trial period, unless you cancelled your subscription, you will be automatically charged the applicable subscription fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Content Ownership</h2>
            <p className="text-muted-foreground mb-3">
              You retain all rights to any content you submit, post, or display on or through the Service. By submitting, posting, or displaying content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process such content solely for the purpose of providing the Service.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to remove any content that violates these Terms or that we find objectionable in our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-3">
              You may not use taskr:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To exploit, harm, or attempt to exploit or harm minors in any way</li>
              <li>To transmit any advertising or promotional material, including spam</li>
              <li>To impersonate or attempt to impersonate taskr, a taskr employee, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall taskr or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use taskr, even if taskr or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-3">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-muted-foreground">
              If you wish to terminate your account, you may simply discontinue using the Service or contact our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-muted-foreground mt-3">
              Email: legal@taskr.app<br />
              Address: 123 Family Street, Suite 100, San Francisco, CA 94102
            </p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
