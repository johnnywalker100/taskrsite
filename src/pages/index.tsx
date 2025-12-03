
import { CheckCircle2, Calendar, Bell, Sparkles, Shield, Smile, ArrowRight, Menu, X, Lock, Smartphone, ListChecks, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Lock,
      title: "Tasks that actually get done",
      description: "Apps pause until chores are finished, so kids stay focused and motivated."
    },
    {
      icon: Calendar,
      title: "Smart Screen Time rules",
      description: "Create limits that turn on automatically during homework, chores, or bedtime."
    },
    {
      icon: Bell,
      title: "Real-time updates",
      description: "See pending tasks and remaining Screen Time from one parent dashboard."
    },
    {
      icon: Smile,
      title: "Kid-friendly interface",
      description: "Simple checklists that tie directly to Screen Time permissions."
    },
    {
      icon: Shield,
      title: "Built on Apple Family Controls",
      description: "Uses Apple's Screen Time APIs so you stay in control without extra hardware."
    },
    {
      icon: Users,
      title: "Private to your family",
      description: "Your tasks and data stay in your family. We do not sell or share your information."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Add your kids",
      description: "Connect each child’s device using Apple’s Family Controls in minutes."
    },
    {
      step: "2",
      title: "Assign tasks",
      description: "Add chores, homework, and reminders with due times that matter."
    },
    {
      step: "3",
      title: "Choose Screen Time rules",
      description: "Pick which apps pause when tasks are due—social, games, or the whole device."
    },
    {
      step: "4",
      title: "Kids complete tasks to unlock",
      description: "Once tasks are approved, Screen Time restrictions lift instantly."
    }
  ];

  const screenTimeHighlights = [
    {
      title: "Automatic app blocking",
      description: "When tasks are due, selected apps lock automatically on your child’s device."
    },
    {
      title: "Unlocks when tasks are done",
      description: "Kids check off tasks, you approve them, and Screen Time restrictions lift instantly."
    },
    {
      title: "Custom rules",
      description: "Block social apps during homework hours or only unlock games after key tasks."
    },
    {
      title: "Granular control",
      description: "Choose specific apps, categories, or full device pauses."
    },
    {
      title: "No extra hardware",
      description: "Everything runs through Apple’s Family Controls—safe, private, and approved."
    }
  ];

  const comparisonRows = [
    {
      feature: "Task-based unlocking",
      apple: false,
      taskr: true
    },
    {
      feature: "Automatic app blocking when chores are due",
      apple: false,
      taskr: true
    },
    {
      feature: "Parent dashboard + task tracking",
      apple: false,
      taskr: true
    },
    {
      feature: "Kid-friendly task list",
      apple: false,
      taskr: true
    },
    {
      feature: "Runs on Apple-approved Family Controls",
      apple: true,
      taskr: true
    }
  ];

  const faqs = [
    {
      question: "Is Taskr really free?",
      answer: "During our beta, Taskr is completely free. We plan to offer a free plan and a simple paid plan once we launch publicly."
    },
    {
      question: "Does Taskr control Screen Time?",
      answer: "Yes. Taskr uses Apple's Screen Time APIs (Family Controls) to apply app limits when tasks are due and unlock them when tasks are completed."
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
      question: "Is my family's data secure?",
      answer: "Absolutely. We use industry-standard encryption and never share your family's information with third parties. Everything runs through Apple's approved Family Controls."
    }
  ];

  return (
    <>
      <Head>
        <title>Taskr — Tasks and Screen Time Controls for Parents</title>
        <meta
          name="description"
          content="Taskr lets parents assign tasks and automatically block apps with Apple’s Screen Time API. Kids complete tasks to unlock screen time. iOS only."
        />
      </Head>
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
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <a href="#early-access">
                <Button className="gradient-mint border-0 hover:opacity-90 transition-opacity">Join beta</Button>
              </a>
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
              <Link href="/contact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <a href="#early-access" className="block">
                <Button className="w-full gradient-mint border-0 hover:opacity-90 transition-opacity">Join beta</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden gradient-mint-soft py-20 lg:py-32 fade-to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mint-medium rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-mint border-0 text-white px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              iOS beta coming soon
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Turn chores into <span className="text-mint-dark">clear, simple tasks</span> for your kids
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance">
              Assign chores, set limits, and automatically block apps when it's time to get things done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#early-access">
                <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Join the iOS beta
                </Button>
              </a>
              <a href="#early-access">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-mint-medium hover:bg-mint-light/20">
                  Get early access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Built with Apple's Screen Time APIs for iOS families.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-xl sm:text-2xl text-center max-w-4xl mx-auto text-balance">
          No more nagging. Kids know exactly what to do, and their apps stay locked until they do it.
        </p>
      </section>

      <section id="features" className="py-20 lg:py-32 bg-white fade-to-mint">
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

      <section id="screen-time" className="py-20 lg:py-32 bg-mint-solid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 gradient-mint border-0 text-white">Screen Time</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Built-in Screen Time Controls</h2>
              <p className="text-xl text-muted-foreground mb-10">
                A task app that can actually enforce tasks. Link chores to Screen Time rules and let Taskr lock or unlock apps for you.
              </p>
              <div className="space-y-6">
                {screenTimeHighlights.map((item, index) => (
                  <Card key={index} className="border-mint-light/60 bg-white/80">
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-sm rounded-[40px] border border-mint-light bg-white shadow-2xl p-6 relative overflow-hidden">
                <div className="text-center mb-6">
                  <div className="mx-auto h-2 w-20 rounded-full bg-muted"></div>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-mint-light/40 to-white p-8 text-center border border-mint-light/50">
                  <Smartphone className="w-10 h-10 text-mint-dark mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-foreground mb-2">Blocked by your parent</p>
                  <p className="text-muted-foreground mb-6">until chores are finished.</p>
                  <div className="rounded-xl border border-mint-light/60 bg-white px-4 py-3 text-left space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium">
                      <span>Homework</span>
                      <span className="text-mint-dark">Due 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <ListChecks className="w-4 h-4" />
                      <span>Apps unlock once this task is approved.</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-10 bottom-6 h-2 rounded-full bg-muted/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-32 bg-mint-solid fade-to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-mint border-0 text-white">How It Works</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From setup to success in minutes. No complicated learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                  <ArrowRight className="hidden lg:block absolute top-1/2 left-full -translate-x-1/2 ml-[-1.5rem] -translate-y-1/2 w-6 h-6 text-mint-medium" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#early-access">
              <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity">
                Join the iOS beta
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-mint-light text-mint-dark">Why Taskr</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why Taskr Works Better Than Standard Screen Time
            </h2>
            <p className="text-xl text-muted-foreground">
              Parents see the difference immediately—Taskr ties chores directly to device access.
            </p>
          </div>
          <div className="border border-mint-light/70 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-mint-light/40 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <div className="py-4 px-4 text-left text-foreground">Feature</div>
              <div className="py-4 px-4 text-center">Apple Screen Time</div>
              <div className="py-4 px-4 text-center text-foreground">Taskr</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-t border-mint-light/50 bg-white text-base"
              >
                <div className="py-4 px-4 font-medium text-foreground">{row.feature}</div>
                <div className="py-4 px-4 flex items-center justify-center">
                  {row.apple ? (
                    <CheckCircle2 className="w-6 h-6 text-mint-medium" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="py-4 px-4 flex items-center justify-center">
                  {row.taskr ? (
                    <CheckCircle2 className="w-6 h-6 text-mint-medium" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-32 bg-white fade-to-mint">
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

      <section id="early-access" className="py-20 lg:py-32 bg-mint-solid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Join Early Families Testing Taskr</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join early families testing Taskr and help shape how Screen Time and chores work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-mint border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Join the iOS beta
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-mint-medium hover:bg-mint-light/20">
                Contact support
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
