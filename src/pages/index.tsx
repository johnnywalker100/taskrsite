import { CheckCircle2, Sparkles, Clock, Shield, ArrowRight, Apple, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import { TaskrLogo } from "@/components/TaskrLogo";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const howItWorks = [
    {
      step: "1",
      title: "Create your parent account",
      description: "Download Taskr on your iPhone, sign up as the parent, and create profiles for each child."
    },
    {
      step: "2",
      title: "Connect your kids' devices",
      description: "Use Apple's Family Controls to link each child's iOS device and grant Screen Time access."
    },
    {
      step: "3",
      title: "Create tasks with due times and rules",
      description: "Add chores or homework, set due times, and choose which apps or categories to block if a task is late."
    },
    {
      step: "4",
      title: "Overdue tasks turn on Screen Time",
      description: "When something is overdue, Taskr blocks the chosen apps until your child submits a photo you approve."
    }
  ];

  const comparisonRows = [
    {
      feature: "Parent-approved, task-based unlocking",
      taskr: "Approvals instantly lift Screen Time limits after you review photo proof.",
      screenTime: "Parents must manually change limits with no connection to chores.",
      taskrHas: true,
      screenTimeHas: false
    },
    {
      feature: "Automatic app blocking when chores go overdue",
      taskr: "Late tasks trigger the Screen Time rules you picked without extra steps.",
      screenTime: "No automatic link between chores and app blocking.",
      taskrHas: true,
      screenTimeHas: false
    },
    {
      feature: "Parent dashboard and task tracking",
      taskr: "See what is due, overdue, blocked, and waiting for approval.",
      screenTime: "Only shows daily device limits with no task context.",
      taskrHas: true,
      screenTimeHas: false
    },
    {
      feature: "Runs on Apple-approved Family Controls",
      taskr: "Built entirely on Apple's Screen Time APIs for iOS families.",
      screenTime: "Apple's own Screen Time settings.",
      taskrHas: true,
      screenTimeHas: true
    }
  ];

  const faqs = [
    {
      question: "Does Taskr replace Apple Screen Time?",
      answer: "Taskr works with Apple's Family Controls. We tie chores directly to Screen Time so you stay in Apple's approved system."
    },
    {
      question: "When do apps actually get blocked?",
      answer: "Apps only lock when a task goes overdue. Before the deadline, your child keeps normal access."
    },
    {
      question: "How do kids show they finished a task?",
      answer: "They open Taskr, tap the task, and submit a quick photo as proof so you can see the work."
    },
    {
      question: "What can parents do after a submission?",
      answer: "Approve to lift Screen Time instantly, reject with feedback so the task stays blocked, or extend the deadline."
    },
    {
      question: "Which devices does Taskr support?",
      answer: "Taskr is built for iOS families and manages Screen Time on kids' Apple devices through Family Controls."
    },
    {
      question: "How do you handle our family's data?",
      answer: "Taskr keeps your information private, uses encryption, and never sells or shares your family's data."
    }
  ];

  return (
    <div className="min-h-screen gradient-page">
      <nav className="sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <TaskrLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">Taskr</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Support
              </Link>
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">
                Join the iOS beta
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
              <Link href="/support" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full">
                Join the iOS beta
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
              Built for iOS families
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Turn chores into Screen Time-backed tasks.
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
              Assign tasks with due times. If they go overdue, Taskr turns on Screen Time and blocks selected apps until you approve your child's work from a photo submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-lg px-8 py-6">
                <Apple className="w-5 h-5 mr-2" />
                Join the iOS beta
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Built for iOS families using Apple's Screen Time APIs.
            </p>
            <p className="text-base text-muted-foreground mt-3">
              Get early access and help shape Taskr.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Everything You Need to Run a Smooth Household
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful features designed for busy parents and simple enough for kids to understand at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Tasks that actually get done</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create clear tasks with due times for each child. If something goes overdue, Taskr blocks the apps you chose until the child completes the task.
              </p>
            </div>

            <div className="lg:row-span-2 rounded-3xl p-12 overflow-hidden relative gradient-mint flex flex-col justify-center items-center text-center min-h-[500px]">
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-8 relative">
                  <img 
                    src="/IMG_1561-portrait.png" 
                    alt="Taskr app showing a kid-friendly task list"
                    className="w-auto h-[570px] object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white">Kid-friendly task list</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto">
                  Kids see color-coded tasks, due times, and exactly which apps will lock if they miss a deadline. Submitting photo proof is just a tap.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent pointer-events-none"></div>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Photo proof and parent approvals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kids snap a photo when they finish a chore. You approve, reject, or add feedback from your phone and Taskr updates Screen Time instantly.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Smart Screen Time rules</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set Screen Time rules that only activate when a task misses its deadline. Choose apps or categories to block and keep essentials available.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-mint-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Built on Apple Family Controls</h3>
              <p className="text-muted-foreground leading-relaxed">
                Taskr uses Apple's approved Family Controls so Screen Time changes are safe, secure, and fully under your supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="create-tasks" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-mint-light/50 text-mint-dark border-0 px-4 py-1 rounded-full">
                Create tasks with Screen Time
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Create tasks with due times and clear consequences.
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Add chores or homework, set when they are due, choose which apps will lock if they run late, and require photo proof so approvals are simple.
              </p>
              <ul className="space-y-4 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Task name, instructions, and due time all in one clean flow per child.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Pick which apps or categories to block if the deadline is missed, and set exceptions you want to allow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-mint-dark mt-1" />
                  <span>Require a quick photo upload so approvals are fast and kids know exactly what to submit.</span>
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent blur-3xl -z-10"></div>
              <img
                src="/IMG_1565-portrait.png"
                alt="Taskr create task flow on iPhone"
                className="relative z-10 w-full max-w-sm h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="screen-time" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center order-1 lg:order-none">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent blur-3xl -z-10"></div>
              <img
                src="/IMG_1566-portrait.png"
                alt="Taskr Screen Time controls view"
                className="relative z-10 w-full max-w-sm h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="order-2 lg:order-none">
              <Badge className="mb-4 bg-mint-light/50 text-mint-dark border-0 px-4 py-1 rounded-full">
                Screen Time that adapts to chores
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Built-in Screen Time Controls
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Taskr is a task app that actually enforces chores by tying them directly to Screen Time.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Link tasks to Screen Time rules so that when a task goes overdue, the apps you chose are blocked on your child's device. Once they submit photo proof and you approve it, Taskr lifts those restrictions.
              </p>
              <ul className="space-y-4 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">Automatic app blocking</p>
                    <p className="text-muted-foreground">When a task is overdue, Taskr turns on Screen Time and blocks the apps or categories you selected.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">Photo proof plus parent decision</p>
                    <p className="text-muted-foreground">Kids submit a photo when they finish. Approve, reject, or extend the deadline—apps unlock only after approval.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">Only locks when overdue</p>
                    <p className="text-muted-foreground">Before the deadline, apps stay available. Taskr only turns on Screen Time when a task is late.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">Custom rules and exceptions</p>
                    <p className="text-muted-foreground">Block social media and games while keeping school apps, calls, or messages available.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">Granular control</p>
                    <p className="text-muted-foreground">Choose specific apps, full categories, or device-level limits for each child and task type.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint-dark mt-1" />
                  <div>
                    <p className="font-semibold">No extra hardware</p>
                    <p className="text-muted-foreground">Everything runs through Apple's Family Controls on iOS, so you use the same trusted Screen Time system.</p>
                  </div>
                </li>
              </ul>
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

      <section id="why-taskr" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Taskr</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Taskr takes the power of Apple Screen Time and connects it directly to tasks and chores, so device access is earned, not argued about.
            </p>
          </div>

          <div className="glass rounded-3xl border border-white/40 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider text-left">Feature</th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider text-left">Taskr</th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider text-left">Standard Screen Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.feature} className={index !== 0 ? "border-t border-white/20" : ""}>
                    <td className="py-6 px-6 align-top">
                      <p className="font-semibold text-foreground">{row.feature}</p>
                    </td>
                    <td className="py-6 px-6 align-top">
                      <div className="flex items-start gap-3">
                        {row.taskrHas ? (
                          <CheckCircle2 className="w-5 h-5 text-mint-dark mt-1" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mt-1" />
                        )}
                        <p className="text-muted-foreground">{row.taskr}</p>
                      </div>
                    </td>
                    <td className="py-6 px-6 align-top">
                      <div className="flex items-start gap-3">
                        {row.screenTimeHas ? (
                          <CheckCircle2 className="w-5 h-5 text-mint-dark mt-1" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mt-1" />
                        )}
                        <p className="text-muted-foreground">{row.screenTime}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Join early families testing Taskr</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Help us shape how Screen Time and chores work together so kids know exactly what is due and what happens when they miss a deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-lg px-8 py-6">
              <Apple className="w-5 h-5 mr-2" />
              Join the iOS beta
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-2 hover:bg-white/50">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

