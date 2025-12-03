
import { CheckCircle2, Calendar, Bell, Sparkles, TrendingUp, Shield, Smile, ArrowRight, Apple, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: CheckCircle2,
      title: "Assign Tasks Easily",
      description: "Create and assign chores to your kids in seconds. Set due dates and priority levels."
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Get instant notifications when tasks are completed. Stay in the loop without asking."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Set recurring tasks and due times. Never forget weekly chores again."
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Visual dashboards show completion rates and help motivate your kids."
    },
    {
      icon: Smile,
      title: "Kid-Friendly Interface",
      description: "Simple, colorful design that kids love. They can see exactly what needs to be done."
    },
    {
      icon: Shield,
      title: "Family Privacy",
      description: "Your family data stays private and secure. We never share your information."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Family",
      description: "Sign up and add family members in under a minute."
    },
    {
      step: "2",
      title: "Add Tasks",
      description: "Create chores and assign them to your kids with due dates."
    },
    {
      step: "3",
      title: "Kids Complete Tasks",
      description: "Kids see their simple task list and check off completed items."
    },
    {
      step: "4",
      title: "Stay Updated",
      description: "Get real-time notifications and track household progress."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mom of 3",
      content: "Taskr has completely changed how our household runs. No more nagging about chores!",
      rating: 5
    },
    {
      name: "Michael T.",
      role: "Dad of 2",
      content: "My kids actually enjoy checking off their tasks. The interface is so simple and fun.",
      rating: 5
    },
    {
      name: "Jennifer K.",
      role: "Parent",
      content: "Finally, a task app that works for the whole family. Worth every penny.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is Taskr really free?",
      answer: "Yes! Our free plan includes up to 3 family members and 10 active tasks, perfect for small families getting started."
    },
    {
      question: "How do kids access their tasks?",
      answer: "Kids can download the Taskr app on their iOS device and log in with their profile. They'll see a simple, color-coded list of their tasks."
    },
    {
      question: "Can I set recurring tasks?",
      answer: "Absolutely! You can set tasks to repeat daily, weekly, or on custom schedules. Perfect for regular chores like taking out the trash."
    },
    {
      question: "What ages is Taskr suitable for?",
      answer: "Taskr works great for kids ages 5 and up. Younger kids may need parent help reading tasks, while older kids can use it independently."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime. Your data remains accessible until the end of your billing period."
    },
    {
      question: "Is my family's data secure?",
      answer: "Absolutely. We use industry-standard encryption and never share your family's information with third parties."
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-mint flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Taskr</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Button className="gradient-mint border-0 hover:opacity-90 transition-opacity">Get Started</Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-mint-light/30 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Button className="w-full gradient-mint border-0 hover:opacity-90 transition-opacity">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden gradient-mint-soft py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mint-medium rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-mint border-0 text-white px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Now Available on iOS
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Keep Your Family Organized, <span className="text-mint-dark">Effortlessly</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
              Assign chores, track progress, and get real-time updates as your kids complete tasks. Stay on schedule without the nagging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Apple className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-mint-medium hover:bg-mint-light/20">
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Free forever plan available. No credit card required.</p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-mint-light text-mint-dark">Features</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Everything You Need to Run a Smooth Household</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for busy parents and easy enough for kids to love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-mint-light/50 hover:border-mint-medium transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl gradient-mint flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-32 gradient-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-mint border-0 text-white">How It Works</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From setup to success in minutes. No complicated learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-mint-light/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full gradient-mint flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-mint-medium" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-mint-light text-mint-dark">Testimonials</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Loved by Families Everywhere</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what parents are saying about Taskr.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-mint-light/50">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-mint-medium text-mint-medium" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-mint-light text-mint-dark">FAQ</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Taskr.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-mint-light/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription className="text-base text-foreground mt-2">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32 gradient-mint-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Ready to Transform Your Family's Routine?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of families who have simplified their household management with Taskr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6">
              <Apple className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-mint-medium hover:bg-mint-light/20">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-mint-light/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-mint flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Taskr</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making family task management simple and fun.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
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
    </div>
  );
}
