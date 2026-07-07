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
    <div className="py-12 md:py-18 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 right-12 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2 font-semibold mb-3 inline-block">
            Model Providers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-text-custom mb-5">
            Eight providers. One key at a time.
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Every provider works the same way in ACA — no provider is special. Each card links straight to where you can quickly generate or find your keys on their respective official developer dashboards.
          </p>
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {providers.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group bg-panel border border-border-custom hover:border-accent-border rounded-xl p-5 md:p-6 transition-all duration-200 flex flex-col sm:flex-row gap-5 hover:-translate-y-0.5 text-left"
            >
              {/* Badge Icon */}
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center font-mono font-bold text-lg shrink-0 ${p.badgeClass}`}
              >
                {p.badge}
              </div>

              {/* Body Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-bold text-text-custom text-base tracking-tight font-display">
                      {p.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-custom-3 border border-border-custom/50 px-2 py-0.5 rounded-full bg-bg-dark-3">
                      {p.company}
                    </span>
                  </div>

                  <p className="text-text-custom-2 text-xs leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                {/* API Action Row */}
                <div className="space-y-3.5 pt-2 border-t border-border-soft">
                  <div className="flex items-center justify-between gap-4">
                    <code className="font-mono text-xs text-accent-2 bg-bg-dark-3 px-2 py-1 rounded border border-border-custom/40 truncate select-all">
                      {p.envVar}
                    </code>
                    <button
                      onClick={() => copyToClipboard(p.envVar, p.id)}
                      className="p-1.5 hover:bg-bg-dark-3 rounded text-text-custom-3 hover:text-text-custom transition-all cursor-pointer"
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
                    className="inline-flex items-center gap-1.5 text-xs text-text-custom-2 hover:text-accent-2 transition-colors border-b border-dashed border-border-custom hover:border-accent-border/50 pb-0.5"
                  >
                    <Key className="w-3 h-3 text-accent" />
                    <span>Get a key at {new URL(p.keyUrl).hostname}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
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
