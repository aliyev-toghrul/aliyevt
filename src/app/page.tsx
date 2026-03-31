"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  const projects = [
    {
      title: "ZeroT Cybersecurity",
      category: "AI & Cybersecurity",
      description: "An AI-native cybersecurity platform for SMEs. Features real-time OSINT threat feeds, hybrid intelligence scanning via Gemini Pro, and an autonomous security assistant.",
      stack: ["Next.js 15", "TypeScript", "Gemini AI", "Vercel"],
      image: "ZeroT"
    },
    {
      title: "Gist",
      category: "Content Intelligence",
      description: "AI-powered content intelligence tool. Scrapes any URL via Firecrawl, runs Gemini Flash analysis, and extracts tone, entities, and insights through a FastAPI microservice and Opal pipeline.",
      stack: ["FastAPI", "Gemini", "Firecrawl", "Docker"],
      image: "Gist"
    },
    {
      title: "Coursera Auto-Solver",
      category: "Automation",
      description: "A production-grade automation script using Playwright and GPT-4o-mini to solve and submit Coursera quizzes autonomously with high accuracy.",
      stack: ["Python", "Playwright", "OpenAI"],
      image: "Automation"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-zinc-300 font-sans selection:bg-[#3ff2d7]/30">
      <main className="max-w-6xl mx-auto px-4 py-8 lg:py-20 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-[280px] lg:sticky lg:top-10 bg-[#242424] border border-zinc-800 rounded-3xl p-8 flex flex-col items-center shrink-0">
          <div className="bg-[#333333] rounded-3xl p-4 mb-6 shadow-xl">
            <img 
              src="/avatar.jpg" 
              alt="Toghrul Aliyev" 
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl object-cover bg-[#242424]" 
            />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-white mb-3 whitespace-nowrap">Toghrul Aliyev</h1>
            <span className="px-4 py-1.5 bg-[#333333] text-xs font-medium text-white rounded-lg">
              Data Science Student
            </span>
          </div>

          <div className="w-full border-t border-zinc-800 pt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#242424] border border-zinc-800 rounded-xl flex items-center justify-center text-[#3ff2d7] shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Email</p>
                <a href="mailto:toghrulaliyev724@gmail.com" className="text-xs text-zinc-200 truncate block hover:text-[#3ff2d7] transition-colors">
                  toghrulaliyev724@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#242424] border border-zinc-800 rounded-xl flex items-center justify-center text-[#3ff2d7] shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Location</p>
                <p className="text-xs text-zinc-200">Baku, Azerbaijan</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <a href="https://github.com/aliyev-toghrul" target="_blank" className="text-zinc-400 hover:text-[#3ff2d7] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" target="_blank" className="text-zinc-400 hover:text-[#3ff2d7] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6 relative">
          
          {/* Navigation Tabs */}
          <nav className="absolute top-0 right-0 z-10 hidden lg:flex bg-[#282829] border border-zinc-800 rounded-bl-3xl rounded-tr-3xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-5 text-sm font-medium transition-colors ${
                  activeTab === tab ? "text-[#3ff2d7]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="lg:hidden bg-[#242424] border border-zinc-800 rounded-2xl flex justify-around p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-xs font-medium rounded-xl transition-colors ${
                  activeTab === tab ? "bg-[#333333] text-[#3ff2d7]" : "text-zinc-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Main Article */}
          <article className="bg-[#242424] border border-zinc-800 rounded-3xl p-6 lg:p-10 min-h-[600px]">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                {activeTab}
                <div className="absolute -bottom-1 left-0 w-10 h-1 bg-[#3ff2d7] rounded-full"></div>
              </h2>
            </header>

            {/* About Tab */}
            {activeTab === "About" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-zinc-400 leading-relaxed mb-10">
                  I am Toghrul Aliyev, a Data Analytics & AI/ML engineer focused on building 
                  autonomous systems, LLM agent architectures, and production-grade AI platforms. 
                  Currently bridging the gap between raw data and actionable intelligence at BEU-INHA.
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* AI & ML Engineering */}
                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><path d="M12 14v8"/><path d="m8 18 4 4 4-4"/><path d="m19 9-4 4 4 4"/><path d="m5 15 4-4-4-4"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">AI & ML Engineering</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Building autonomous systems and LLM agent architectures that solve complex problems.
                      </p>
                    </div>
                  </div>

                  {/* Data Science */}
                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Data Science</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Extracting actionable intelligence from raw data through advanced statistical analysis and modeling.
                      </p>
                    </div>
                  </div>

                  {/* Automation & Pipelines */}
                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Automation & Pipelines</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Developing production-grade automated systems and robust data CI/CD pipelines.
                      </p>
                    </div>
                  </div>

                  {/* Open Source */}
                  <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6 flex gap-4 shadow-lg">
                    <div className="text-[#3ff2d7] shrink-0">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Open Source</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Contributing to the community and building public tools for better engineering workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Portfolio Tab */}
            {activeTab === "Portfolio" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#1e1e1f] border border-zinc-800 mb-4">
                        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold tracking-tighter text-white opacity-10 group-hover:opacity-30 transition-all group-hover:scale-110">
                          {project.image}
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 bg-[#333333] border border-zinc-700 rounded-xl flex items-center justify-center text-[#3ff2d7]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#3ff2d7] transition-colors">{project.title}</h3>
                      <p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">{project.category}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Resume Tab */}
            {activeTab === "Resume" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 text-center py-20">
                <div className="w-16 h-16 bg-[#333333] rounded-2xl flex items-center justify-center text-[#3ff2d7] mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Resume is being compiled</h3>
                <p className="text-zinc-500">Currently organizing academic and professional milestones.</p>
              </section>
            )}

            {activeTab === "Blog" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 text-center py-20">
                <div className="w-16 h-16 bg-[#333333] rounded-2xl flex items-center justify-center text-[#3ff2d7] mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No posts yet</h3>
                <p className="text-zinc-500">Thinking about interesting things to write about.</p>
              </section>
            )}

            {activeTab === "Contact" && (
              <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="max-w-xl">
                  <p className="text-zinc-400 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
                  <div className="space-y-4">
                    <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6">
                      <h4 className="font-bold text-white mb-2">Email Me</h4>
                      <a href="mailto:toghrulaliyev724@gmail.com" className="text-[#3ff2d7] hover:underline">toghrulaliyev724@gmail.com</a>
                    </div>
                    <div className="bg-[#1e1e1f] border border-zinc-800 rounded-2xl p-6">
                      <h4 className="font-bold text-white mb-2">Social Networks</h4>
                      <div className="flex gap-4">
                        <a href="https://github.com/aliyev-toghrul" target="_blank" className="text-zinc-400 hover:text-[#3ff2d7]">GitHub</a>
                        <a href="https://linkedin.com/in/toghrul-aliyev-a83b3037b" target="_blank" className="text-zinc-400 hover:text-[#3ff2d7]">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

          </article>

          {/* Footer for Mobile */}
          <footer className="lg:hidden text-center py-8 text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 Toghrul Aliyev
          </footer>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom {
          from { transform: translateY(10px); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .slide-in-from-bottom-2 {
          animation: slide-in-from-bottom 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
