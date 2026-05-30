import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Database,
  Monitor,
  Smartphone,
  CheckCircle,
  Clock,
  ChevronRight,
  Activity,
  ArrowUpRight,
  Menu,
  X,
  FileText,
  Compass,
  GraduationCap,
  Sun,
  Moon
} from 'lucide-react'
import appScreenshot from './assets/photo_2026-05-29_00-41-59.jpg'
import logoImg from './assets/logo.png'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('mindsurge-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    localStorage.setItem('mindsurge-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const webAppUrl = 'https://mindsurge-8d956.web.app'

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Resource Library',
      desc: 'Centralized directory of notes, past papers, assignments, and study materials organized for easy access.'
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: 'Database Integration',
      desc: 'A structured and secure data repository ensuring your resources are safely organized and retrievable instantly.'
    },
    {
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      title: 'Cross-Platform Web',
      desc: 'Blistering-fast browser access featuring optimized PDF document rendering for seamless study sessions.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      title: 'Android Client',
      desc: 'Optimized native mobile application offering smooth navigation, light/dark themes, and quick access on the move.'
    }
  ]

  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Core Architecture',
      status: 'completed',
      date: 'Completed Q1 2026',
      details: ['Database made', 'Basic course directory', 'Light & Dark theme layouts']
    },
    {
      phase: 'Phase 2',
      title: 'Release Deployment & Web Tuning',
      status: 'completed',
      date: 'Completed Q2 2026',
      details: ['Signed Android APK compilation', 'Web Hosting setup', 'Integrated PDF rendering engine']
    },
    {
      phase: 'Phase 3',
      title: 'UI Optimization & Visual Tuning',
      status: 'active',
      date: 'In Progress (Active)',
      details: ['Refining user interface aesthetics', 'Updating custom brand icons and logos', 'Improving registration and onboarding flow']
    },
    {
      phase: 'Phase 4',
      title: 'Collaborative Hub & Peer Systems',
      status: 'planned',
      date: 'Planned Q3 2026',
      details: ['Dynamic course discussion forums', 'Peer-to-peer study group coordinator', 'Push notification alerts for updates']
    },
    {
      phase: 'Phase 5',
      title: 'AI Smart Learning & iOS App',
      status: 'planned',
      date: 'Planned Q4 2026',
      details: ['AI-driven summaries of uploaded files and papers', 'Developing iOS version of the app', 'Advanced student academic analytics']
    }
  ]

  return (
    <div className={`min-h-screen bg-[#0A0E1A] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden font-sans ${!isDark ? 'light' : ''}`}>
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Nav Bar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 20 
            ? 'bg-[#0A0E1A]/85 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-lg shadow-black/10' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:bg-blue-500/40 transition duration-300" />
              <img src={logoImg} alt="MindSurge Logo" className="w-10 h-10 rounded-xl relative border border-slate-700/55 shadow-md shadow-blue-500/10" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent font-display">
              MindSurge
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition">Features</a>
            <a href="#showcase" className="text-sm font-medium text-slate-400 hover:text-white transition">App Preview</a>
            <a href="#roadmap" className="text-sm font-medium text-slate-400 hover:text-white transition">Roadmap</a>
            <a href="#project-status" className="text-sm font-medium text-slate-400 hover:text-white transition">Development Status</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700/50"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href={webAppUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
            >
              Open Web Portal
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Btn */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[72px] bg-[#0A0E1A] z-45 border-t border-slate-800/80 px-6 py-8 flex flex-col gap-6 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition py-2 border-b border-slate-900">Features</a>
            <a href="#showcase" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition py-2 border-b border-slate-900">App Preview</a>
            <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition py-2 border-b border-slate-900">Roadmap</a>
            <a href="#project-status" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition py-2 border-b border-slate-900">Development Status</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-between text-lg font-medium text-slate-300 hover:text-white transition py-2 border-b border-slate-900"
            >
              {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href={webAppUrl} 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 w-full py-3.5 rounded-xl text-center font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/25"
            >
              Open Web Portal
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 z-10 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          Active Project Development
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Surge Ahead in Your{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Academic Journey
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MindSurge coordinates academic resources and digital study sheets. Beautifully designed for modern university modules, it helps you organize your curriculum.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={webAppUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl text-center font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
          >
            Access Web Platform
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a 
            href="#roadmap"
            className="px-8 py-4 rounded-2xl text-center font-semibold bg-slate-900/60 backdrop-blur border border-slate-800 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300 flex items-center justify-center gap-1.5 transition-all"
          >
            Explore Roadmap
          </a>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 border-t border-slate-900 relative z-10 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-display">
            Built for Academic Efficiency
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            MindSurge combines the best features of file servers and community directories to support academic workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 backdrop-blur hover:bg-slate-900/80 hover:border-slate-800 transition-all hover:scale-[1.02] flex flex-col items-start text-left shadow-lg shadow-black/5 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 mb-5 relative">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Screen Showcase Deep Dive */}
      <section id="showcase" className="py-24 border-t border-slate-900 relative z-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative p-4 bg-slate-900/40 rounded-3xl border border-slate-850 backdrop-blur max-w-sm shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[3rem] blur-2xl opacity-30 animate-pulse pointer-events-none" />

              {/* Phone Mock Frame (Emulator UI) */}
              <div className="relative border-[12px] border-slate-950 bg-slate-950 rounded-[2.8rem] shadow-2xl overflow-hidden aspect-[9/19.5]">
                {/* Phone Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20 flex justify-center items-center">
                  <div className="w-12 h-1 bg-slate-850 rounded-full mb-1" />
                  <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-3 mb-1" />
                </div>
                
                {/* Screenshot */}
                <img 
                  src={appScreenshot} 
                  alt="MindSurge Mobile Client UI" 
                  className="w-full h-full object-cover relative z-10"
                />

                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-15" />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Dashboard Insight
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 font-display">
              A Dashboard Made to Focus
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              The mobile app UI offers a clean dashboard loaded with active modules. MindSurge presents options designed around student preferences:
            </p>

            <div className="space-y-6 w-full">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-500/15 border border-blue-500/25 rounded-xl text-blue-400 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Clear Course Navigation</h4>
                  <p className="text-sm text-slate-400">Jump directly into syllabus files, documents, and notes mapped to your courses.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-indigo-500/15 border border-indigo-500/25 rounded-xl text-indigo-400 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">High-Fidelity Document Viewer</h4>
                  <p className="text-sm text-slate-400">View notes and exam guides natively inside the browser or native app using optimized render viewports.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-purple-500/15 border border-purple-500/25 rounded-xl text-purple-400 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Resource Tracking</h4>
                  <p className="text-sm text-slate-400">Organize your study resources and access them instantly whenever you need to prepare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Project & Timeline (Roadmap) */}
      <section id="roadmap" className="py-24 border-t border-slate-900 relative z-10 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Project Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-display">
            Active Development Journey
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            MindSurge is an <strong className="text-slate-200">ongoing project</strong>. We are actively refining user interfaces, improving build outputs, and developing new tools.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {roadmap.map((item, idx) => (
              <motion.div 
                key={idx}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-stretch`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-800 -translate-x-1/2 z-20 flex items-center justify-center">
                  {item.status === 'completed' ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50" />
                  ) : item.status === 'active' ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-md shadow-blue-500/50 animate-pulse" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                  )}
                </div>

                {/* Empty Spacer Column for layout mapping */}
                <div className="hidden md:block w-1/2" />

                {/* Content Panel Column */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className={`p-6 rounded-2xl bg-slate-900/40 border backdrop-blur text-left transition duration-300 hover:border-slate-750 relative ${
                    item.status === 'active' 
                      ? 'border-blue-500/35 shadow-lg shadow-blue-500/5' 
                      : 'border-slate-850'
                  }`}>
                    {/* Floating Status Tag */}
                    <span className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      item.status === 'completed'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : item.status === 'active'
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 animate-pulse'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      {item.status}
                    </span>

                    <span className="text-xs font-semibold text-slate-500 block mb-1">{item.date}</span>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">{item.phase}</span>
                    <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                    
                    <ul className="space-y-2">
                      {item.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2.5 text-slate-400 text-sm">
                          {item.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : item.status === 'active' ? (
                            <div className="w-4 h-4 rounded-full border border-blue-500/40 flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-800 shrink-0" />
                          )}
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Status Section */}
      <section id="project-status" className="py-24 border-t border-slate-900 bg-slate-950/20 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 font-display">
                Current Deployment Status
              </h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                The MindSurge app has been compiled, packaged, and verified for both android devices and web hosting targets. You can load modules or download the release assets:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-900/60 border border-slate-850 rounded-xl">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest block mb-1">Android Client</span>
                  <span className="text-lg font-bold text-white flex items-center gap-2">
                    v1.0.0-release
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </span>
                </div>
                <div className="p-4 bg-slate-900/60 border border-slate-850 rounded-xl">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest block mb-1">Web Hosting Target</span>
                  <span className="text-lg font-bold text-white flex items-center gap-2">
                    Active Deploy
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </span>
                </div>
              </div>

              <div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl mb-8">
                <h4 className="text-sm font-bold text-blue-400 mb-1">Ongoing Project Note</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  MindSurge is updated regularly. Feature requests, resource submissions, or program layout tweaks are actively monitored and deployed live to hosting weekly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 text-left">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 w-fit mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Designed for Every Student</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  MindSurge is built to accommodate university students across all academic paths. Whether you are studying sciences, humanities, business, or engineering, the platform provides a unified dashboard to organize and access your learning materials.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 text-left">
                <h4 className="text-base font-bold text-white mb-3">Release &amp; Access Vectors</h4>
                <div className="space-y-3">
                  <a 
                    href={webAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center p-3 bg-slate-950/60 border border-slate-800 rounded-xl hover:bg-slate-950 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-semibold text-white">Access Web App Portal</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>

                  <a 
                    href="/App/app-release.apk"
                    download="app-release.apk"
                    className="flex justify-between items-center p-3 bg-slate-950/60 border border-slate-800 rounded-xl hover:bg-slate-950 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-semibold text-white">Download Android Client (APK)</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 relative z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-lg border border-slate-800" />
            <span className="text-base font-bold text-white">MindSurge</span>
          </div>

          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} MindSurge Platform. All rights reserved. Evolving active project.
          </p>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs text-slate-500 hover:text-white transition">Features</a>
            <a href="#showcase" className="text-xs text-slate-500 hover:text-white transition">Preview</a>
            <a href="#roadmap" className="text-xs text-slate-500 hover:text-white transition">Roadmap</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
