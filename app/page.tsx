"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Download, MessageCircle, Shield, Zap, Code, Cpu, Lock, Star, Users, Clock } from "lucide-react"

export default function NexoraHomepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Level 8 Execution",
      description: "Advanced internal executor with maximum compatibility and security",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "98% UNC/SUNC",
      description: "Unparalleled script compatibility with the latest Roblox updates",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Advanced Scripting",
      description: "Full Lua support with enhanced debugging and error handling",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Optimized Performance",
      description: "Lightweight design that doesn't impact game performance",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Supports Luarmor",
      description: "Advanced anti-detection technology keeps you safe",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Regular Updates",
      description: "Constant updates to maintain compatibility and add features",
    },
  ]

  const faqs = [
    {
      question: "Is Nexora completely safe and detected?",
      answer:
        "Nexora employs state-of-the-art anti-detection algorithms and memory protection techniques. Our Level 8 internal execution ensures maximum stealth while maintaining full functionality. However, always use any third-party tools responsibly and at your own discretion.",
    },
    {
      question: "What does 98% UNC/SUNC compatibility mean?",
      answer:
        "UNC and SUNC are script compatibility standards. Our 98% rate means Nexora can execute nearly all existing Roblox scripts without modification, making it one of the most compatible executors available.",
    },
    {
      question: "How does Level 8 execution work?",
      answer:
        "Level 8 represents the highest tier of script execution capabilities. This means Nexora can run advanced scripts that require deep system access, including complex exploits, advanced GUIs, and sophisticated game modifications that lower-level executors cannot handle.",
    },
    {
      question: "What makes Nexora's internal executor special?",
      answer:
        "Unlike external executors that inject from outside the process, Nexora's internal architecture operates directly within Roblox's memory space. This provides better performance, enhanced stealth, and superior compatibility with game updates.",
    },
    {
      question: "How often do you update for new Roblox patches?",
      answer:
        "Our development team monitors Roblox updates 24/7. Most compatibility patches are released within 2-6 hours of a Roblox update. Critical updates are prioritized and often available within the first hour.",
    },
    {
      question: "Do I need programming knowledge to use Nexora?",
      answer:
        "Basic Lua scripting knowledge is recommended but not required. Nexora includes a user-friendly interface and supports drag-and-drop script execution. Our Discord community also provides script libraries and tutorials for beginners.",
    },
    {
      question: "What support options are available?",
      answer:
        "Join our active Discord server for real-time support, script sharing, update notifications, and community discussions. Our support team and experienced community members are available to help with any issues or questions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 grid-pattern animate-grid-move opacity-20 pointer-events-none" />

      {/* Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(107, 95, 199, 0.3) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.1s ease",
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold font-mono">NEXORA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="hover:text-primary transition-colors cursor-interactive">
              Features
            </a>
            <a href="#faq" className="hover:text-primary transition-colors cursor-interactive">
              FAQ
            </a>
            <Button variant="outline" className="cursor-interactive bg-transparent">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discord
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Code Snippets */}
            <div className="absolute top-20 left-10 animate-float-slow opacity-30">
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-3 font-mono text-sm text-violet-300">
                loadstring(game:HttpGet(...))()
              </div>
            </div>
            <div className="absolute top-32 right-16 animate-float-delayed opacity-25">
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-3 font-mono text-sm text-violet-300">
                game.Players.LocalPlayer
              </div>
            </div>
            <div className="absolute bottom-20 left-20 animate-float opacity-20">
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-3 font-mono text-sm text-violet-300">
                workspace.CurrentCamera
              </div>
            </div>
            <div className="absolute bottom-32 right-10 animate-float-slow opacity-30">
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-3 font-mono text-sm text-violet-300">
                getgenv().Nexora = true
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-500 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-violet-600 rounded-full animate-bounce opacity-30"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping opacity-50"></div>
          </div>

          <div className="animate-float relative z-10">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Level 8 • 98% UNC/SUNC • Internal Executor
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono relative z-10">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NEXORA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto relative z-10">
            The ultimate Roblox utility with advanced internal execution capabilities. Experience unmatched performance
            and compatibility.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 relative z-10">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium">Detected</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium">Level 8</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2">
              <Code className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium">Internal</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Button
              size="lg"
              className="cursor-interactive animate-pulse-glow text-lg px-8 py-6"
              onClick={() =>
                window.open("https://github.com/saintydevz/Nexora/releases/download/adsdasd1/Nexora.zip", "_blank")
              }
            >
              <Download className="h-5 w-5 mr-2" />
              Download Nexora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-interactive text-lg px-8 py-6 bg-transparent"
              onClick={() => window.open("https://discord.gg/vnrzwWJSUR", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center cursor-interactive bg-black/20 backdrop-blur-md border-violet-500/30 hover:bg-black/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">1.7K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </CardContent>
            </Card>
            <Card className="text-center cursor-interactive bg-black/20 backdrop-blur-md border-violet-500/30 hover:bg-black/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-muted-foreground">UNC/SUNC Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center cursor-interactive bg-black/20 backdrop-blur-md border-violet-500/30 hover:bg-black/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Nexora the most advanced Roblox utility available
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="cursor-interactive bg-black/20 backdrop-blur-md border-violet-500/30 hover:bg-black/30 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Nexora</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="group">
                <CollapsibleTrigger asChild>
                  <Card className="cursor-interactive bg-black/10 backdrop-blur-md border-violet-500/20 hover:bg-black/20 hover:border-primary/40 transition-all duration-300 group-data-[state=open]:border-primary/50 group-data-[state=open]:bg-black/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 py-6">
                      <CardTitle className="text-left text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown className="h-6 w-6 text-violet-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </CardHeader>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 duration-200">
                  <Card className="mt-2 bg-black/15 backdrop-blur-md border-violet-500/10">
                    <CardContent className="py-6 px-8">
                      <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md border-violet-500/30 hover:bg-black/30 transition-all duration-300">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                Ready to Experience <span className="text-primary">Nexora</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Nexora for their Roblox scripting needs. Download now and unlock
                unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="cursor-interactive animate-pulse-glow text-lg px-8 py-6"
                  onClick={() =>
                    window.open("https://github.com/saintydevz/Nexora/releases/download/adsdasd1/Nexora.zip", "_blank")
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-interactive text-lg px-8 py-6 bg-transparent"
                  onClick={() => window.open("https://discord.gg/vnrzwWJSUR", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-mono">NEXORA</span>
          </div>
          <p className="text-muted-foreground mb-4">The ultimate Roblox utility for advanced users</p>
          <p className="text-sm text-muted-foreground">
            © 2025 Nexora. Use responsibly and follow Roblox's terms of service.
          </p>
        </div>
      </footer>
    </div>
  )
}
