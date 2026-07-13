import React from 'react';
import { Shield, Check, X, ShieldAlert, Cpu } from 'lucide-react';
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
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-border/30 bg-accent/5 mb-4">
            <Cpu className="w-3.5 h-3.5 text-accent-2" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-accent-2 font-bold">
              Why ACA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-display text-text-custom mb-6 leading-[1.1]">
            Built to stay{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              out of your way
            </span>{' '}
            — and off your bill.
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
          className="overflow-hidden border border-border-custom/80 rounded-2xl bg-panel/40 backdrop-blur-sm shadow-2xl hover:border-accent-border/20 transition-all duration-300"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-border-custom bg-bg-dark-2/80">
                  <th className="p-6 font-bold text-text-custom-3 font-display uppercase tracking-wider text-[11px] w-2/5">
                    Capability
                  </th>
                  <th className="p-6 font-black text-accent-2 font-display uppercase tracking-wider text-[11px] bg-accent-dim/15 w-[30%] border-x border-border-custom">
                    ACA (Agentic Coding CLI)
                  </th>
                  <th className="p-6 font-bold text-text-custom-3 font-display uppercase tracking-wider text-[11px] w-[30%]">
                    Typical single-vendor tool
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft font-sans">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-bg-dark-2/40 transition-colors">
                    {/* Capability column */}
                    <td className="p-6 font-semibold text-text-custom text-sm">
                      {row.capability}
                    </td>

                    {/* ACA column */}
                    <td className="p-6 text-sm bg-accent-dim/5 font-semibold border-x border-border-custom">
                      <div className="flex items-center gap-3 text-custom-green">
                        <div className="w-6 h-6 rounded-full bg-custom-green/10 border border-custom-green/30 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-custom-green" />
                        </div>
                        <span className="text-text-custom font-medium">{row.aca}</span>
                      </div>
                    </td>

                    {/* Other column */}
                    <td className="p-6 text-sm text-text-custom-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-border-custom/30 border border-border-soft flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 text-text-custom-3/80" />
                        </div>
                        <span className="leading-relaxed">{row.other}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional security note */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-7 rounded-2xl border border-border-custom/80 bg-panel/50 backdrop-blur-sm text-left hover:border-accent-border/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 text-accent-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-dim border border-accent-border/35 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-text-custom text-base font-display">Zero-Data Liability</h4>
            </div>
            <p className="text-sm text-text-custom-2 leading-relaxed">
              We never host servers, route your connections, or maintain client accounts. Your API transactions are directly between your workspace and your chosen cloud providers' security boundary.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-border-custom/80 bg-panel/50 backdrop-blur-sm text-left hover:border-accent-border/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 text-accent-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-dim border border-accent-border/35 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-text-custom text-base font-display">Developer-Agile Latencies</h4>
            </div>
            <p className="text-sm text-text-custom-2 leading-relaxed">
              No queue congestion or artificial rate-limiting. Because you use your own key, you access the exact rate-limits and performance tiers authorized directly on your developer billing accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
