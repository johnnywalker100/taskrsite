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
      taskr: "Built entirely on Apple Screen Time for iOS families.",
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
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <TaskrLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">Taskr</span>
            </Link>
            
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

      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 sm:mb-6 bg-mint-light/50 text-mint-dark border-0 px-3 sm:px-4 py-1 rounded-full text-sm">
              Built for iOS families
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Turn chores into Screen Time-backed tasks.
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
              Assign tasks with due times. If they go overdue, Taskr turns on Screen Time and blocks selected apps until you approve your child's work from a photo submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Apple className="w-5 h-5 mr-2" />
                Join the iOS beta
              </Button>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-3">
              Get early access and help shape Taskr.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Everything You Need to Run a Smooth Household
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful features designed for busy parents and simple enough for kids to understand at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-mint-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">Tasks that actually get done</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Create clear tasks with due times for each child. If something goes overdue, Taskr blocks the apps you chose until you approve their photo submission.
              </p>
            </div>

            <div className="lg:row-span-2 rounded-2xl sm:rounded-3xl p-6 sm:p-12 overflow-hidden relative gradient-mint flex flex-col justify-center items-center text-center min-h-[400px] sm:min-h-[500px]">
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-4 sm:mb-8 relative">
                  <img 
                    src="/IMG_1561-portrait.png" 
                    alt="Taskr app showing the real-time parent dashboard"
                    className="w-auto h-[320px] sm:h-[450px] lg:h-[570px] object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Real-time parent dashboard</h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  See what is due, overdue, which apps are blocked, and which photo submissions are waiting for review—all in one view.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent pointer-events-none"></div>
            </div>

            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-mint-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">Photo proof and parent approvals</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Kids snap a photo when they finish a chore. You approve, reject, or add feedback from your phone and Taskr updates Screen Time instantly.
              </p>
            </div>

            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-mint-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">Smart Screen Time rules</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Set Screen Time rules that only activate when a task misses its deadline. Choose apps or categories to block and keep essentials available.
              </p>
            </div>

            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-mint-light/50 flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-mint-dark" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">Built on Apple Family Controls</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Taskr uses Apple's approved Family Controls so Screen Time changes are safe, secure, and fully under your supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="create-tasks" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-3 sm:mb-4 bg-mint-light/50 text-mint-dark border-0 px-3 sm:px-4 py-1 rounded-full text-sm">
                Create tasks with Screen Time
              </Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Create tasks with due times and clear consequences.
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Add chores or homework, set when they are due, choose which apps will lock if they run late, and require photo proof so approvals are simple.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-foreground">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Task name, instructions, and due time all in one clean flow per child.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Pick which apps or categories to block if the deadline is missed, and set exceptions you want to allow.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Require a quick photo upload so approvals are fast and kids know exactly what to submit.</span>
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent blur-3xl -z-10"></div>
              <img
                src="/IMG_1565-portrait.png"
                alt="Taskr create task flow on iPhone"
                className="relative z-10 w-full max-w-[240px] sm:max-w-sm h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="screen-time" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center order-first lg:order-none">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-light/30 to-transparent blur-3xl -z-10"></div>
              <img
                src="/IMG_1566-portrait.png"
                alt="Taskr Screen Time controls view"
                className="relative z-10 w-full max-w-[240px] sm:max-w-sm h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="order-last lg:order-none">
              <Badge className="mb-3 sm:mb-4 bg-mint-light/50 text-mint-dark border-0 px-3 sm:px-4 py-1 rounded-full text-sm">
                Screen Time that adapts to chores
              </Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Built-in Screen Time Controls
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                This is the parent dashboard. Taskr links chores to Screen Time and shows what needs approval and what's currently overdue.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                When a task goes overdue, the apps you selected are blocked. Kids submit a photo, it lands here, and you decide what happens next.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-foreground">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Automatic app blocking</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Overdue tasks turn on Screen Time and block the apps or categories you picked.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Photo proof</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Kids send a quick photo when they finish. Approve, reject, or extend the deadline.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Only locks when overdue</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Before the deadline, everything stays open. Taskr only locks apps when a task is late.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Custom exceptions</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Block distractions while keeping essentials like school apps, calls, or messages available.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Per-task control</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Pick specific apps, categories, or device-level limits for each task.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-mint-dark mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">No extra hardware</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Everything works through Apple's built-in Family Controls.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From setup to success in minutes. No complicated learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/40 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full gradient-mint flex items-center justify-center text-white text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-taskr" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Why Taskr</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Taskr takes the power of Apple Screen Time and connects it directly to tasks and chores, so device access is earned, not argued about.
            </p>
          </div>

          {/* Desktop table view */}
          <div className="hidden md:block glass rounded-3xl border border-white/40 overflow-hidden">
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

          {/* Mobile card view */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="glass rounded-2xl border border-white/40 p-5">
                <h3 className="font-semibold text-foreground text-lg mb-4">{row.feature}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-xs font-semibold text-mint-dark uppercase tracking-wide">Taskr</span>
                    </div>
                    <div className="flex items-start gap-2 flex-1">
                      {row.taskrHas ? (
                        <CheckCircle2 className="w-4 h-4 text-mint-dark mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm text-muted-foreground">{row.taskr}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Screen Time</span>
                    </div>
                    <div className="flex items-start gap-2 flex-1">
                      {row.screenTimeHas ? (
                        <CheckCircle2 className="w-4 h-4 text-mint-dark mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm text-muted-foreground">{row.screenTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              Everything you need to know about Taskr.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass border-white/40">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">{faq.question}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-foreground mt-2 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Join early families testing Taskr</h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed">
            Help us shape how Screen Time and chores work together so kids know exactly what is due and what happens when they miss a deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Apple className="w-5 h-5 mr-2" />
              Join the iOS beta
            </Button>
            <Link href="/support" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-white/50 w-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

