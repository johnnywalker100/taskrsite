import { CheckCircle2, Calendar, Bell, Users, Sparkles, TrendingUp, Clock, Shield, Smile, ArrowRight, Apple, Menu, X } from "lucide-react";
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
    <div className="min-h-screen gradient-page">
      <nav className="sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img 
                src="/AppIcon-512@2x.png" 
                alt="Taskr App Icon" 
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-2xl font-bold text-foreground">Taskr</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">
                Download App
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/30">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full">
                Download App
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-mint-light/50 text-mint-dark border-0 px-4 py-1 rounded-full">
              Best Family Management App
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Manage Your Family Chores, <span className="text-mint-dark">Anytime, Anywhere.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
              Taskr helps you assign chores, track progress, set due times, and get real-time updates as kids complete tasks—all in one simple app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-lg px-8 py-6">
                <Apple className="w-5 h-5 mr-2" />
                Download on the App Store
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-lg px-8 py-6">
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="create-tasks" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-mint-light/50 text-mint-dark border-0 px-4 py-1 rounded-full">
                Create Tasks Easily
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Capture every detail in seconds.
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Add chores, give extra context, pick who is responsible, and set the perfect due date without leaving this simple screen. Parents see everything, kids know exactly what to do.
              </p>
              <ul className="space-y-4 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Task name, details, and due date all in one clean flow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Assign tasks to the right kid with one tap.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Automatic reminders keep everything moving.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent blur-3xl -z-10"></div>
              <div className="glass rounded-[40px] p-6 border border-white/40 shadow-2xl">
                <img
                  src="/IMG_1565-portrait.png"
                  alt="Taskr create task flow on iPhone"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Everything You Need.<br />Nothing You Don't.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive family task management designed with simplicity and security in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Easy Task Assignment</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Create and assign chores to your kids in seconds. Set due dates, priority levels, and track everything.
              </p>
              <a href="#" className="inline-flex items-center text-foreground font-medium hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="lg:row-span-2 rounded-3xl p-12 overflow-hidden relative gradient-mint flex flex-col justify-center items-center text-center min-h-[500px]">
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-8 relative">
                  <img 
                    src="/IMG_1561-portrait.png" 
                    alt="Taskr app showing real-time task progress"
                    className="w-auto h-[570px] object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white">Real-Time Progress</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto mb-6">
                  Watch as tasks get completed in real-time. Get instant notifications and celebrate wins together.
                </p>
                <a href="#" className="inline-flex items-center text-white font-medium hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent pointer-events-none"></div>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Family Dashboard</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                See your whole family's progress at a glance. Smart insights help you stay organized.
              </p>
              <a href="#" className="inline-flex items-center text-foreground font-medium hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Smart Reminders</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automatic reminders keep everyone on track without the nagging. Set it and forget it.
              </p>
              <a href="#" className="inline-flex items-center text-foreground font-medium hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Secure & Private</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your family data is encrypted and private. We never share your information with anyone.
              </p>
              <a href="#" className="inline-flex items-center text-foreground font-medium hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From setup to success in minutes. No complicated learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full gradient-mint flex items-center justify-center text-white text-2xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Taskr.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass border-white/40">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription className="text-base text-foreground mt-2 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Ready to Transform Your Family's Routine?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join thousands of families who have simplified their household management with Taskr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-lg px-8 py-6">
              <Apple className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-2 hover:bg-white/50">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <footer className="glass border-t border-white/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/AppIcon-512@2x.png" 
                  alt="Taskr App Icon" 
                  className="w-8 h-8 rounded-lg"
                />
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

          <div className="border-t border-white/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Taskr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
