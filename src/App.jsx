import React, { useState } from 'react';
import { 
  Terminal, 
  Video, 
  Code2, 
  Users, 
  Award, 
  Camera, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Flame, 
  ArrowUpRight,
  Layers,
  Send
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', category: 'General Inquiry', message: '' });

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'VPH Media Production Web & CMS Platform',
      tagline: 'Modern responsive agency site with dynamic media showcase',
      description: 'Engineered high-performance agency portal and custom CMS administrative dashboard allowing seamless client showcase, video reel embedding, and inquiry routing.',
      tags: ['React', 'Tailwind CSS', 'Cloudflare Pages', 'Supabase'],
      accent: 'border-yellow-400/40 text-yellow-300'
    },
    {
      id: 2,
      category: 'media',
      title: 'Shawarma Ko Pasay Launch Campaign',
      tagline: 'Multi-platform voiceover script & dynamic video assets',
      description: 'Wrote and directed a high-energy 90-second Taglish voiceover commercial spot and promotional creative suite for the branch expansion at Metropolitan Technological Center, Pasay.',
      tags: ['Scriptwriting', 'Voiceover Direction', 'Videography', 'Canon Gear'],
      accent: 'border-purple-500/40 text-purple-300'
    },
    {
      id: 3,
      category: 'community',
      title: 'Creator Community Meetup & Gear Up Challenge',
      tagline: 'Partnership with Canon Philippines & CameraHaus',
      description: 'Orchestrated nationwide creator summit and creative challenge at Shakeys Ayala Malls Manila Bay, uniting hundreds of Filipino digital creators with top camera equipment brands.',
      tags: ['Community Leadership', 'Event Production', 'Canon Philippines', 'CameraHaus'],
      accent: 'border-yellow-400/40 text-yellow-300'
    },
    {
      id: 4,
      category: 'web',
      title: 'Global Recruitment & Manpower Portal Prototype',
      tagline: 'Enterprise candidate screening & applicant pipeline',
      description: 'Architected interactive candidate filtering and modern recruitment prototype deck for international placement agency TW (Phil.) International Manpower Inc.',
      tags: ['React', 'Tailwind CSS', 'GitHub Pages', 'UI/UX Design'],
      accent: 'border-purple-500/40 text-purple-300'
    },
    {
      id: 5,
      category: 'branding',
      title: 'Kultura Entertainment & Pamana Film Festival',
      tagline: 'Visual identity system & cultural festival branding',
      description: 'Crafted logo lockups, typography hierarchy, and key visual creative assets for cultural preservation and national cinematic initiatives.',
      tags: ['Brand Identity', 'Graphic Direction', 'Creative Suite'],
      accent: 'border-yellow-400/40 text-yellow-300'
    },
    {
      id: 6,
      category: 'community',
      title: 'VPH Creator Community Disaster Relief Drives',
      tagline: 'Nationwide humanitarian aid logistics',
      description: 'Mobilized decentralized creator networks and relief logistics supplying aid to disaster-affected communities across Visayas, Cagayan, and Taal volcano response operations.',
      tags: ['Humanitarian Relief', 'Civic Action', 'Grassroots Logistics'],
      accent: 'border-purple-500/40 text-purple-300'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', category: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-yellow-400 selection:text-black relative overflow-x-hidden">
      {/* Background Cyber Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -left-32 w-[500px] h-[450px] bg-yellow-400/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 -right-32 w-[600px] h-[500px] bg-purple-500/15 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060609]/85 border-b border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-yellow-400 p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition duration-300">
              <div className="w-full h-full bg-[#08080c] rounded-[10px] flex items-center justify-center font-black text-yellow-400 text-lg">
                DB
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-white flex items-center gap-1.5">
                DANILO BRENIO
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
              </span>
              <p className="text-[10px] text-purple-300 font-mono tracking-widest uppercase">CEO • Producer • Dev</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#ventures" className="hover:text-yellow-400 transition-colors">Ventures</a>
            <a href="#portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="#gear" className="hover:text-yellow-400 transition-colors">Arsenal</a>
            <a href="#awards" className="hover:text-yellow-400 transition-colors">Honors</a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.35)] hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]"
            >
              Collaborate
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-purple-500/30 text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f] border-b border-purple-900/40 px-6 py-5 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-yellow-400">About</a>
            <a href="#ventures" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-yellow-400">Ventures</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-yellow-400">Portfolio</a>
            <a href="#gear" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-yellow-400">Arsenal</a>
            <a href="#awards" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-yellow-400">Honors</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-2.5 rounded-lg bg-yellow-400 text-black font-bold">
              Collaborate
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-32">

        {/* HERO SECTION */}
        <section id="about" className="space-y-8 pt-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Sparkles size={14} className="text-yellow-400 animate-pulse" />
            Empowering Creator Ecosystems & Digital Experiences
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Creative Direction, <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-purple-400 bg-clip-text text-transparent">
                Community Power
              </span> & Modern Code.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
              I am <strong className="text-white font-semibold">Danilo Brenio</strong>. Founder & CEO of <span className="text-yellow-400 font-medium">Vloggers Philippines</span> and Executive Producer at <span className="text-purple-300 font-medium">VPH Media Production</span>. I converge executive media production, community organizing, and modern front-end engineering to build high-impact stories and scalable tools.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#11111a] to-[#09090f] border border-purple-900/40 relative overflow-hidden group hover:border-yellow-400/50 transition">
              <div className="text-3xl font-extrabold text-yellow-400 font-mono">2019</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Founded Vloggers PH</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#11111a] to-[#09090f] border border-purple-900/40 relative overflow-hidden group hover:border-yellow-400/50 transition">
              <div className="text-3xl font-extrabold text-purple-400 font-mono">100+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Creator Campaigns & Events</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#11111a] to-[#09090f] border border-purple-900/40 relative overflow-hidden group hover:border-yellow-400/50 transition">
              <div className="text-3xl font-extrabold text-white font-mono">BSBA</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Business Management</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#11111a] to-[#09090f] border border-purple-900/40 relative overflow-hidden group hover:border-yellow-400/50 transition">
              <div className="text-3xl font-extrabold text-yellow-400 font-mono">DTI / IPO</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">Registered Ventures</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#portfolio" 
              className="px-8 py-3.5 rounded-xl bg-yellow-400 text-black font-extrabold tracking-wide hover:bg-yellow-300 transition shadow-[0_0_25px_rgba(250,204,21,0.4)] flex items-center gap-2"
            >
              Explore Portfolio <ChevronRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-xl bg-purple-950/40 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900/50 hover:border-purple-400 transition font-semibold"
            >
              Inquire for Production / Dev
            </a>
          </div>
        </section>

        {/* CORE VENTURES SECTION */}
        <section id="ventures" className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-yellow-400 tracking-widest flex items-center gap-2">
              <Layers size={14} /> Executive Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Pillars of Impact & Media Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Venture 1 */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#12121e] to-[#09090f] border border-purple-700/30 hover:border-yellow-400/60 transition-all duration-300 space-y-5 group">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-yellow-400/10 border border-yellow-400/30 text-yellow-300">
                  EST. 2019
                </span>
                <Users className="text-purple-400 group-hover:text-yellow-400 transition" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition">
                Vloggers Philippines
              </h3>
              <p className="text-sm font-semibold text-purple-300 font-mono">
                Founder, President & CEO
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pioneering a nationwide grassroots alliance for Filipino vloggers, influencers, and digital creatives. Hosting large-scale brand collaborations with Canon Philippines and CameraHaus, leading provincial creator forums, and conducting nationwide disaster relief operations.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Nationwide Summits</span>
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Community Relief</span>
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Creator Challenges</span>
              </div>
            </div>

            {/* Venture 2 */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#12121e] to-[#09090f] border border-purple-700/30 hover:border-purple-400 transition-all duration-300 space-y-5 group">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  DTI REGISTERED
                </span>
                <Video className="text-yellow-400 group-hover:text-purple-300 transition" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">
                VPH Media Production
              </h3>
              <p className="text-sm font-semibold text-yellow-300 font-mono">
                Founder & Executive Producer
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Full-cycle creative media house delivering commercial video advertisements, press conference coverage, entertainment media screenings, and high-impact brand campaigns. Leading visual storytelling from pre-production scripts to post-production delivery.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Commercial Spots</span>
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Entertainment PR</span>
                <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800">Voiceover Ads</span>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-yellow-400 tracking-widest flex items-center gap-2">
                <Code2 size={14} /> Selected Works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Multi-Disciplinary Portfolio
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0f0f18] border border-purple-900/40">
              {['all', 'web', 'media', 'branding', 'community'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition ${
                    activeTab === tab 
                      ? 'bg-yellow-400 text-black font-extrabold shadow-[0_0_15px_rgba(250,204,21,0.4)]' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer p-6 rounded-2xl bg-gradient-to-b from-[#11111a] to-[#09090f] border border-purple-900/40 hover:border-yellow-400/60 transition-all duration-300 space-y-4 hover:-translate-y-1 relative"
              >
                <div className="flex justify-between items-start">
                  <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border ${item.accent} bg-black/40`}>
                    {item.category}
                  </span>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-yellow-400 transition" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-purple-300 border border-purple-800/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARSENAL / TECH STACK SECTION */}
        <section id="gear" className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-yellow-400 tracking-widest flex items-center gap-2">
              <Camera size={14} /> Systems & Hardware
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Production & Development Arsenal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0c0c14] border border-purple-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                <Camera size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Cinematography & Audio</h3>
              <ul className="text-sm text-slate-300 space-y-2 font-mono">
                <li>• Canon EOS R10 + RF 50mm f/1.8 STM</li>
                <li>• Canon PowerShot G7 X Mark III</li>
                <li>• Canon EOS 3000D DSLR</li>
                <li>• Hollyland Lark M2 Wireless Audio</li>
                <li>• LED Key & Rim Production Lighting</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0c14] border border-purple-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center">
                <Terminal size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Web & Software Dev</h3>
              <ul className="text-sm text-slate-300 space-y-2 font-mono">
                <li>• React.js & Modern JavaScript</li>
                <li>• Tailwind CSS Styling Engine</li>
                <li>• Cloudflare Pages & Workers</li>
                <li>• Supabase & Firebase Persistence</li>
                <li>• GitHub Copilot & VS Code</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0c14] border border-purple-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                <Flame size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Post & Creative Suite</h3>
              <ul className="text-sm text-slate-300 space-y-2 font-mono">
                <li>• CapCut Pro & DaVinci Workflows</li>
                <li>• Canva Pro Brand System Design</li>
                <li>• Mac workstation & SanDisk Extreme SSD</li>
                <li>• Microsoft 365 Professional</li>
                <li>• Taglish Voiceover Narration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HONORS & AWARDS SECTION */}
        <section id="awards" className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-yellow-400 tracking-widest flex items-center gap-2">
              <Award size={14} /> Recognitions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Honors, Leadership & Affiliations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-yellow-400/30 space-y-3">
              <Award className="text-yellow-400" size={28} />
              <h4 className="font-bold text-white text-base">Man of Influence</h4>
              <p className="text-xs text-purple-300 font-mono">Asia's Golden Icon Awards</p>
              <p className="text-xs text-slate-400">Awarded as Innovative Business Leader of the Year for community digital leadership.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-purple-500/30 space-y-3">
              <ShieldCheck className="text-purple-400" size={28} />
              <h4 className="font-bold text-white text-base">Influencer Hall of Fame</h4>
              <p className="text-xs text-purple-300 font-mono">Influencer Watchlist Awards</p>
              <p className="text-xs text-slate-400">Honored for founding and sustaining the premiere creator network in the Philippines.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-yellow-400/30 space-y-3">
              <Users className="text-yellow-400" size={28} />
              <h4 className="font-bold text-white text-base">Student Ambassador</h4>
              <p className="text-xs text-purple-300 font-mono">University of the People</p>
              <p className="text-xs text-slate-400">Representing global scholars in the Bachelor of Science in Business Administration program.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-purple-500/30 space-y-3">
              <Code2 className="text-purple-400" size={28} />
              <h4 className="font-bold text-white text-base">GitHub Developer Grant</h4>
              <p className="text-xs text-purple-300 font-mono">GitHub Global Education</p>
              <p className="text-xs text-slate-400">Approved 2-year Developer Pack grantee utilizing state-of-the-art developer tooling.</p>
            </div>
          </div>
        </section>

        {/* CONTACT / COLLABORATION TERMINAL */}
        <section id="contact" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#12121f] to-[#08080d] border border-purple-600/40 relative overflow-hidden space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400">Transmission Portal</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let’s Launch Something Exceptional</h2>
            <p className="text-slate-300 text-sm">
              Open for commercial video production, brand sponsorship rollouts with Vloggers Philippines, and custom front-end development.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Your Name / Organization</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Maria Santos (Brand Director)"
                  className="w-full px-4 py-3 rounded-xl bg-[#060609] border border-purple-900/60 focus:border-yellow-400 focus:outline-none text-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Contact Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="maria@company.ph"
                  className="w-full px-4 py-3 rounded-xl bg-[#060609] border border-purple-900/60 focus:border-yellow-400 focus:outline-none text-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Project Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#060609] border border-purple-900/60 focus:border-yellow-400 focus:outline-none text-white text-sm"
                >
                  <option>Commercial Video Production</option>
                  <option>Vloggers PH Brand Partnership</option>
                  <option>Web Platform / CMS Development</option>
                  <option>Event Coverage & Media Screening</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Project Scope & Timeline</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your campaign objectives, timeline, or product release..."
                  className="w-full px-4 py-3 rounded-xl bg-[#060609] border border-purple-900/60 focus:border-yellow-400 focus:outline-none text-white text-sm resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-yellow-400 text-black font-extrabold tracking-wider uppercase text-sm hover:bg-yellow-300 transition shadow-[0_0_25px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2"
              >
                <Send size={16} /> Send Direct Proposal
              </button>
              {formSubmitted && (
                <div className="p-3 rounded-lg bg-green-950/80 border border-green-500/50 text-green-300 text-xs text-center font-mono">
                  ✓ Message transmitted successfully. Danilo will respond shortly.
                </div>
              )}
            </div>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 bg-[#040406] py-10 relative z-10 text-center space-y-4">
        <div className="font-extrabold text-lg tracking-wider text-white">
          DANILO BRENIO
        </div>
        <p className="text-xs text-slate-500 font-mono">
          Founder & CEO, Vloggers Philippines • Executive Producer, VPH Media Production • Metro Manila, Philippines
        </p>
        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} Danilo Brenio. All rights reserved.
        </p>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e0e18] border border-purple-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X size={18} />
            </button>
            <div className="space-y-1">
              <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded border ${selectedProject.accent}`}>
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white pt-2">{selectedProject.title}</h3>
              <p className="text-xs font-mono text-yellow-300">{selectedProject.tagline}</p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">Core Technologies & Responsibilities:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-xl bg-purple-900/40 border border-purple-500/40 text-purple-200 text-xs font-mono font-bold uppercase hover:bg-purple-900/70 transition"
            >
              Close Terminal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
