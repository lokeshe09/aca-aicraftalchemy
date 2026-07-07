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
    <div className="py-12 md:py-18 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[280px] h-[280px] bg-accent-dim rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2 font-semibold mb-3 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-text-custom mb-5">
            Questions, answered
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Have questions about keys, costs, or how ACA secures your local workstation? We've got you covered.
          </p>
        </div>

        {/* Collapsible details layout */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isExpanded = expandedId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="border border-border-custom hover:border-accent-border/50 rounded-xl bg-panel overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-text-custom font-display focus:outline-none focus:ring-1 focus:ring-accent-border rounded-xl cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <div className="text-accent shrink-0">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-accent-2" />
                    ) : (
                      <Plus className="w-4 h-4 text-text-custom-3 group-hover:text-text-custom" />
                    )}
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
                      <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-text-custom-2 leading-relaxed border-t border-border-soft/50 max-w-3xl">
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
        <div className="mt-12 p-6 rounded-xl border border-border-custom bg-bg-dark-2/50 text-left flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <HelpCircle className="w-8 h-8 text-accent shrink-0 mt-0.5 sm:mt-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-text-custom text-sm font-display">Still have questions?</h4>
            <p className="text-xs text-text-custom-2 leading-relaxed">
              Reach out directly to the creators of ACA at{' '}
              <a href="mailto:aicraftalchemy@gmail.com" className="text-accent-2 hover:underline">
                aicraftalchemy@gmail.com
              </a>{' '}
              or call us at{' '}
              <a href="tel:+917661081043" className="text-accent-2 hover:underline">
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
