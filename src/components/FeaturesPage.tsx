import React from 'react';
import { Plug, Lock, Key, Cpu, Zap, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeaturesPage() {
  const featureList = [
    {
      icon: <Plug className="w-5 h-5 text-accent" />,
      title: 'Any provider, one tool',
      description: 'Switch between 8 model providers with a single command. Prefer a Gemini key today and a fast Groq model tomorrow — same workflow, no reinstall.',
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      title: 'Private by design',
      description: 'ACA runs on your machine and talks directly to the provider you pick. Your API keys stay on your computer — nothing is proxied through us.',
    },
    {
      icon: <Key className="w-5 h-5 text-accent" />,
      title: 'Bring your own key',
      description: 'No subscription, no seat. Use the API keys you already have. You pay your provider directly and only for what you use.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: 'Agentic, not just chat',
      description: 'It reads files, greps the repo, edits code, and runs your build or tests — then verifies the result. Real tasks end to end, not copy-paste snippets.',
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: 'Fast where it counts',
      description: 'Built-in code search and file indexing make large repos feel small. Pick ultra-fast inference providers like Groq or Cerebras when speed matters most.',
    },
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: 'You approve the risky stuff',
      description: 'ACA asks before editing files, running commands, or trusting a new folder. Nothing outward-facing or destructive happens without your say-so.',
    },
  ];

  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[380px] h-[380px] bg-accent/5 rounded-full blur-[130px] opacity-70" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-accent-2/5 rounded-full blur-[130px] opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-border/30 bg-accent/5 mb-4">
            <Zap className="w-3.5 h-3.5 text-accent-2" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-accent-2 font-bold">
              What is ACA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-display text-text-custom mb-6 leading-[1.1]">
            An AI pair-programmer that{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              lives in your terminal
            </span>
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed max-w-2xl">
            ACA plans, edits files, runs commands, searches your codebase, and explains what it does — all inside the shell you already work in. You stay in control: it asks before touching anything that matters.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-panel/70 backdrop-blur-sm border border-border-custom hover:border-accent-border/60 hover:bg-bg-dark-3/40 rounded-2xl p-6.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(12,14,24,0.4),0_0_30px_rgba(120,150,255,0.06)]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-dim border border-accent-border/40 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-accent-border group-hover:bg-accent/15 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-text-custom mb-3 font-display group-hover:text-accent-2 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-text-custom-2 text-sm leading-relaxed group-hover:text-text-custom/90 transition-colors duration-200">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Banner at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-bg-dark-3/60 to-bg-dark-2/60 backdrop-blur-md border border-border-custom/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-accent-border/30 transition-colors"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent-border/20 flex items-center justify-center text-accent shrink-0">
              <Shield className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-bold text-text-custom text-sm font-display tracking-tight">Perfect for secure workflows</h4>
              <p className="text-xs text-text-custom-2 mt-1 max-w-xl leading-relaxed">
                Zero data retention, zero usage logging, and zero tracking. Absolute alignment with corporate data safety requirements.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-accent-2 border border-accent-border/40 bg-accent-dim/40 px-3.5 py-2 rounded-lg whitespace-nowrap tracking-wide relative z-10 shadow-sm">
            LOCAL ENGINE: ON-PREMISE ONLY
          </div>
        </motion.div>
      </div>
    </div>
  );
}
