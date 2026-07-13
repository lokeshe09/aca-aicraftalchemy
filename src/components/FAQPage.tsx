import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQPage() {
  const faqList: FAQItem[] = [
    {
      id: 'free',
      question: 'Is ACA free to use?',
      answer: 'Yes, ACA itself is a tool you can download and install for free. You bring your own API key from a model provider and pay that provider directly for what you use — so your only cost is the direct API transaction fees from Google, Anthropic, OpenAI, or other providers.',
    },
    {
      id: 'privacy',
      question: 'Where do my API keys and code go?',
      answer: 'Nowhere but your own local machine and the provider you chose. Your keys are stored privately on your computer, and ACA talks directly to your provider\'s API. Aicraftalchemy never sees your keys or your code, and nothing is routed through a middleman server.',
    },
    {
      id: 'start',
      question: 'Which provider should I start with?',
      answer: 'Gemini is the default and needs no model configuration, so it\'s an incredibly simple and affordable starting point. You can switch to Claude or OpenAI for deeper complex reasoning, or Groq and Cerebras for ultra-fast response times — every provider works seamlessly inside ACA.',
    },
    {
      id: 'switch',
      question: 'How do I switch providers or models?',
      answer: 'Run `/login` again to pick a different provider and paste its key, or use `/model <id>` to change the model. For scripts and CI, you can set the ACA_PROVIDER and ACA_DEFAULT_MODEL environment variables. Each provider remembers its own last-used model, making provider-hopping instant.',
    },
    {
      id: 'os',
      question: 'Does it work on Windows, macOS and Linux?',
      answer: 'Yes. ACA ships as a fully compiled native binary for Windows, macOS (both Intel and Apple Silicon), and Linux (x64 and ARM). You can install it the same way everywhere via npm install -g @aicraftalchemy/aca (Node.js 18+ required).',
    },
    {
      id: 'model-ids',
      question: 'Do I need to know which model a provider serves?',
      answer: 'For Gemini and Claude, no — ACA routes to sensible defaults automatically. For OpenRouter, Groq, Cerebras, NVIDIA, OpenAI, and Hugging Face, you can name the model ID yourself (e.g. gpt-4o, llama-3.3-70b-versatile) via the /model command or during /login. You can use any model your key has access to.',
    },
    {
      id: 'files',
      question: 'Will ACA change my files without asking?',
      answer: 'Absolutely not. ACA always prompts you for explicit approval before editing files, running command-line actions, or trusting new workspace directories. You maintain absolute command of any destructive or outward-facing operations.',
    },
  ];

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-border/30 bg-accent/5 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-accent-2" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-accent-2 font-bold">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-display text-text-custom mb-6 leading-[1.1]">
            Questions,{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              answered
            </span>
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Have questions about keys, costs, or how ACA secures your local workstation? We've got you covered.
          </p>
        </div>

        {/* Collapsible details layout */}
        <div className="space-y-4.5">
          {faqList.map((faq, idx) => {
            const isExpanded = expandedId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`border rounded-2xl bg-panel/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? 'border-accent-border/40 shadow-[0_10px_30px_rgba(120,150,255,0.06)] bg-bg-dark-2/40'
                    : 'border-border-custom hover:border-accent-border/40 hover:bg-bg-dark-3/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-text-custom font-display focus:outline-none focus:ring-1 focus:ring-accent-border rounded-2xl cursor-pointer"
                >
                  <span className="text-sm md:text-base tracking-tight font-bold">{faq.question}</span>
                  <div className="text-accent shrink-0">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isExpanded ? 'bg-accent/10 text-accent-2' : 'bg-bg-dark-3 text-text-custom-3'
                    }`}>
                      {isExpanded ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-text-custom-2 leading-relaxed border-t border-border-soft/40 max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Callout card */}
        <div className="mt-14 p-7 rounded-2xl border border-border-custom/80 bg-panel/40 backdrop-blur-sm text-left flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-accent-border/30 transition-colors">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent-border/20 flex items-center justify-center text-accent shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-text-custom text-base font-display">Still have questions?</h4>
            <p className="text-xs md:text-sm text-text-custom-2 leading-relaxed">
              Reach out directly to the creators of ACA at{' '}
              <a href="mailto:aicraftalchemy@gmail.com" className="text-accent-2 hover:underline font-semibold">
                aicraftalchemy@gmail.com
              </a>{' '}
              or call us at{' '}
              <a href="tel:+917661081043" className="text-accent-2 hover:underline font-semibold">
                +91 7661081043
              </a>.
              We are located in{' '}
              <span className="text-text-custom font-medium">Hyderabad, India</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
