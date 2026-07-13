import React from 'react';
import { Provider } from '../types';
import { ExternalLink, Key, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProvidersPage() {
  const providers: Provider[] = [
    {
      id: 'gemini',
      name: 'Gemini',
      badge: 'Ge',
      badgeClass: 'text-[#8ab4f8] border-[#8ab4f8]/40 bg-[#8ab4f8]/5',
      company: 'Google',
      envVar: 'GEMINI_API_KEY',
      keyUrl: 'https://aistudio.google.com/apikey',
      description: 'The default and most budget-friendly provider. Extremely high capability with large contexts.',
    },
    {
      id: 'claude',
      name: 'Claude',
      badge: 'Cl',
      badgeClass: 'text-[#e0a06a] border-[#e0a06a]/40 bg-[#e0a06a]/5',
      company: 'Anthropic',
      envVar: 'ANTHROPIC_API_KEY',
      keyUrl: 'https://console.anthropic.com/settings/keys',
      description: 'Superb code reasoning and step-by-step programming structure. Great for complex refactors.',
    },
    {
      id: 'openai',
      name: 'OpenAI',
      badge: 'Op',
      badgeClass: 'text-[#5fd0a8] border-[#5fd0a8]/40 bg-[#5fd0a8]/5',
      company: 'GPT models',
      envVar: 'OPENAI_API_KEY',
      keyUrl: 'https://platform.openai.com/api-keys',
      description: 'The industry reference standard for reliability, quick function calls, and robust outputs.',
    },
    {
      id: 'nvidia',
      name: 'NVIDIA',
      badge: 'Nv',
      badgeClass: 'text-[#8ed14b] border-[#8ed14b]/40 bg-[#8ed14b]/5',
      company: 'NIM · nemotron',
      envVar: 'NVIDIA_API_KEY',
      keyUrl: 'https://build.nvidia.com/settings/api-keys',
      description: 'NIM microservices and highly specialized Llama-based code assistants with high throughput.',
    },
    {
      id: 'groq',
      name: 'Groq',
      badge: 'Gr',
      badgeClass: 'text-[#ff7b6b] border-[#ff7b6b]/40 bg-[#ff7b6b]/5',
      company: 'fast LPU inference',
      envVar: 'GROQ_API_KEY',
      keyUrl: 'https://console.groq.com/keys',
      description: 'Experience blazing-fast Llama and Mixtral completions. Ideal for quick code diagnostics.',
    },
    {
      id: 'cerebras',
      name: 'Cerebras',
      badge: 'Ce',
      badgeClass: 'text-[#c58bff] border-[#c58bff]/40 bg-[#c58bff]/5',
      company: 'ultra-fast inference',
      envVar: 'CEREBRAS_API_KEY',
      keyUrl: 'https://cloud.cerebras.ai',
      description: 'Unprecedented speed using Wafer-Scale Engines for real-time suggestions and streaming.',
    },
    {
      id: 'openrouter',
      name: 'OpenRouter',
      badge: 'Or',
      badgeClass: 'text-[#7fa0ff] border-[#7fa0ff]/40 bg-[#7fa0ff]/5',
      company: 'one key · 100s of models',
      envVar: 'OPENROUTER_API_KEY',
      keyUrl: 'https://openrouter.ai/keys',
      description: 'Unified gateway endpoint accessing DeepSeek, Claude, GPT, and custom open-source models.',
    },
    {
      id: 'huggingface',
      name: 'Hugging Face',
      badge: 'Hf',
      badgeClass: 'text-[#ffd45e] border-[#ffd45e]/40 bg-[#ffd45e]/5',
      company: 'routed inference',
      envVar: 'HF_TOKEN',
      keyUrl: 'https://huggingface.co/settings/tokens',
      description: 'Run inference on thousands of open-source models hosted directly on the Hub.',
    },
  ];

  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-border/30 bg-accent/5 mb-4">
            <Key className="w-3.5 h-3.5 text-accent-2" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-accent-2 font-bold">
              Model Providers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-display text-text-custom mb-6 leading-[1.1]">
            Eight providers.{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              One key at a time.
            </span>
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Every provider works the same way in ACA — no provider is special. Each card links straight to where you can quickly generate or find your keys on their respective official developer dashboards.
          </p>
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {providers.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group bg-panel/60 backdrop-blur-sm border border-border-custom hover:border-accent-border/60 rounded-2xl p-6 transition-all duration-300 flex flex-col sm:flex-row gap-5.5 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(12,14,24,0.35),0_0_25px_rgba(120,150,255,0.05)] text-left"
            >
              {/* Badge Icon */}
              <div
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-mono font-extrabold text-xl shrink-0 group-hover:scale-105 transition-transform duration-300 ${p.badgeClass}`}
              >
                {p.badge}
              </div>

              {/* Body Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                    <span className="font-extrabold text-text-custom text-lg tracking-tight font-display group-hover:text-accent-2 transition-colors">
                      {p.name}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-text-custom-3 border border-border-custom/55 px-2.5 py-0.5 rounded-full bg-bg-dark-3/60">
                      {p.company}
                    </span>
                  </div>

                  <p className="text-text-custom-2 text-xs md:text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>
                </div>

                {/* API Action Row */}
                <div className="space-y-4 pt-3.5 border-t border-border-soft">
                  <div className="flex items-center justify-between gap-4 bg-bg-dark-3/40 border border-border-custom/30 rounded-xl p-2.5 hover:bg-bg-dark-3/70 transition-colors">
                    <code className="font-mono text-xs text-accent-2 truncate select-all px-1">
                      {p.envVar}
                    </code>
                    <button
                      onClick={() => copyToClipboard(p.envVar, p.id)}
                      className="p-2 hover:bg-bg-dark-3 rounded-lg text-text-custom-3 hover:text-text-custom hover:border hover:border-border-custom transition-all cursor-pointer"
                      title="Copy variable name"
                    >
                      {copiedId === p.id ? (
                        <Check className="w-3.5 h-3.5 text-custom-green" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={p.keyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-text-custom-2 hover:text-accent-2 transition-all font-medium hover:translate-x-0.5"
                  >
                    <Key className="w-3.5 h-3.5 text-accent" />
                    <span>Get a key at {new URL(p.keyUrl).hostname}</span>
                    <ExternalLink className="w-3 h-3 text-text-custom-3" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
