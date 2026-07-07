import React from 'react';
import { Shield, Sparkles, Check, X, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyPage() {
  const comparisonData = [
    {
      capability: 'Choose your model provider',
      aca: '8 providers, switch anytime',
      acaSuccess: true,
      other: 'Locked to one',
      otherSuccess: false,
    },
    {
      capability: 'Bring your own API key',
      aca: '✓ Yes — you pay the provider directly',
      acaSuccess: true,
      other: 'Bundled subscription / seat cost',
      otherSuccess: false,
    },
    {
      capability: 'Runs locally in your terminal',
      aca: '✓ On your machine',
      acaSuccess: true,
      other: 'Often cloud or custom editor-bound',
      otherSuccess: false,
    },
    {
      capability: 'Keys & code proxied through a middleman',
      aca: 'Never — connection is direct-to-API',
      acaSuccess: true,
      other: 'Frequently routed & stored on remote server',
      otherSuccess: false,
    },
    {
      capability: 'Agentic: edits files & runs commands',
      aca: '✓ End-to-end task loops (with approvals)',
      acaSuccess: true,
      other: 'Varies; mostly just code chat & autocomplete',
      otherSuccess: false,
    },
    {
      capability: 'Use budget-friendly models of your choice',
      aca: '✓ Supported (e.g. Gemini 2.5 flash-lite)',
      acaSuccess: true,
      other: 'Rarely (fixed expensive models only)',
      otherSuccess: false,
    },
    {
      capability: 'Pick ultra-fast hardware (Groq, Cerebras)',
      aca: '✓ Your call (LPU hardware speeds)',
      acaSuccess: true,
      other: 'Not your choice (controlled server speeds)',
      otherSuccess: false,
    },
  ];

  return (
    <div className="py-12 md:py-18 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-[280px] h-[280px] bg-accent-dim rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2 font-semibold mb-3 inline-block">
            Why ACA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-text-custom mb-5">
            Built to stay out of your way — and off your bill.
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Most AI coding tools lock you into a single vendor, require monthly subscription fees, and route your sensitive code through their remote servers. ACA takes the opposite stance: freedom of choice, native local execution, and total direct control.
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden border border-border-custom rounded-2xl bg-panel shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-border-soft bg-bg-dark-2">
                  <th className="p-5 font-semibold text-text-custom-3 font-display uppercase tracking-wider text-[11px] w-2/5">
                    Capability
                  </th>
                  <th className="p-5 font-bold text-accent-2 font-display uppercase tracking-wider text-[11px] bg-accent-dim/10 w-[30%]">
                    ACA (Agentic Coding CLI)
                  </th>
                  <th className="p-5 font-semibold text-text-custom-3 font-display uppercase tracking-wider text-[11px] w-[30%]">
                    Typical single-vendor tool
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft font-sans">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-bg-dark-2/35 transition-colors">
                    {/* Capability column */}
                    <td className="p-5 font-medium text-text-custom text-sm">
                      {row.capability}
                    </td>

                    {/* ACA column */}
                    <td className="p-5 text-sm bg-accent-dim/5 font-semibold border-x border-border-soft/60">
                      <div className="flex items-center gap-2.5 text-custom-green">
                        <Check className="w-4.5 h-4.5 shrink-0 text-custom-green" />
                        <span>{row.aca}</span>
                      </div>
                    </td>

                    {/* Other column */}
                    <td className="p-5 text-sm text-text-custom-3">
                      <div className="flex items-center gap-2.5">
                        <X className="w-4 h-4 shrink-0 text-text-custom-3/60" />
                        <span>{row.other}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional security note */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-border-custom/80 bg-bg-dark-2/40 text-left">
            <div className="flex items-center gap-2.5 text-accent-2 mb-3">
              <Shield className="w-5 h-5" />
              <h4 className="font-bold text-text-custom text-sm font-display">Zero-Data Liability</h4>
            </div>
            <p className="text-xs text-text-custom-2 leading-relaxed">
              We never host servers, route your connections, or maintain client accounts. Your API transactions are directly between your workspace and your chosen cloud providers' security boundary.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border-custom/80 bg-bg-dark-2/40 text-left">
            <div className="flex items-center gap-2.5 text-accent-2 mb-3">
              <Cpu className="w-5 h-5" />
              <h4 className="font-bold text-text-custom text-sm font-display">Developer-Agile Latencies</h4>
            </div>
            <p className="text-xs text-text-custom-2 leading-relaxed">
              No queue congestion or artificial rate-limiting. Because you use your own key, you access the exact rate-limits and performance tiers authorized directly on your developer billing accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
