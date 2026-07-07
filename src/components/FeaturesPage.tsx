import React from 'react';
import { Plug, Lock, Key, Cpu, Zap, Shield, Sparkles } from 'lucide-react';
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
    <div className="py-12 md:py-18 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-12 left-12 w-[350px] h-[250px] bg-accent-dim rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2 font-semibold mb-3 inline-block">
            What is ACA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-text-custom mb-5">
            An AI pair-programmer that lives in your terminal
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            ACA plans, edits files, runs commands, searches your codebase, and explains what it does — all inside the shell you already work in. You stay in control: it asks before touching anything that matters.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-panel border border-border-custom hover:border-accent-border/50 rounded-2xl p-6 transition-all duration-250 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-dim border border-accent-border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-text-custom mb-2.5 font-display group-hover:text-accent-2 transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-custom-2 text-sm leading-relaxed">
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
          className="mt-16 bg-gradient-to-r from-bg-dark-3 to-bg-dark-2 border border-border-custom rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-custom text-sm">Perfect for secure workflows</h4>
              <p className="text-xs text-text-custom-2 mt-1">
                Zero data retention, zero usage logging, and zero tracking. Absolute alignment with corporate data safety requirements.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-accent-2 border border-accent-border bg-accent-dim px-3 py-1.5 rounded-lg whitespace-nowrap">
            LOCAL ENGINE: ON-PREMISE ONLY
          </div>
        </motion.div>
      </div>
    </div>
  );
}
