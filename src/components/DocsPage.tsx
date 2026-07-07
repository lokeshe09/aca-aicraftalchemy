import React, { useState } from 'react';
import CopyButton from './CopyButton';
import { Terminal, Settings, Key, Info, HelpCircle, Layers, ArrowRight, Eye, Check, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

type OSType = 'unix' | 'windows';

export default function DocsPage() {
  const [activeOS, setActiveOS] = useState<OSType>('unix');

  const envVars = [
    { name: 'ACA_PROVIDER', desc: 'Specify which provider to use — gemini, claude, openai, nvidia, groq, cerebras, openrouter, or huggingface.' },
    { name: 'ACA_DEFAULT_MODEL', desc: 'Specify the model ID you want to use by default (e.g. gpt-4o, llama-3.3-70b-versatile).' },
  ];

  return (
    <div className="py-12 md:py-18 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-dim rounded-full blur-[110px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2 font-semibold mb-3 inline-block">
            Documentation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-text-custom mb-5">
            Quickstart &amp; Setup Guide
          </h2>
          <p className="text-text-custom-2 text-base md:text-lg leading-relaxed">
            Everything you need to connect a provider to ACA: where to get each API key, the exact format ACA expects, and the two ways to plug it in.
          </p>
        </div>

        {/* --- Quickstart Steps --- */}
        <div className="mb-20">
          <h3 className="text-xl font-bold font-display text-text-custom mb-8 border-b border-border-soft pb-3 flex items-center gap-2">
            <Terminal className="w-5.5 h-5.5 text-accent" />
            <span>Up and running in three steps</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-dim border border-accent-border flex items-center justify-center font-mono font-bold text-sm text-accent-2">
                  1
                </div>
                <h4 className="font-bold text-text-custom text-sm font-display">Install ACA globally</h4>
              </div>
              <p className="text-text-custom-2 text-xs leading-relaxed mb-4 min-h-[40px]">
                One npm command fetches the compiled ACA binary and its bundled code-search indexer automatically for your current OS.
              </p>
              <div className="bg-code-bg border border-border-custom rounded-xl p-3.5 flex flex-col gap-3 font-mono text-xs mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-text-custom-3 text-[10px]">terminal</span>
                  <CopyButton text="npm install -g @aicraftalchemy/aca" />
                </div>
                <div className="text-text-custom">
                  <span className="text-accent-2 select-none mr-2">$</span>
                  <span>npm install -g @aicraftalchemy/aca</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-dim border border-accent-border flex items-center justify-center font-mono font-bold text-sm text-accent-2">
                  2
                </div>
                <h4 className="font-bold text-text-custom text-sm font-display">Launch &amp; login with a key</h4>
              </div>
              <p className="text-text-custom-2 text-xs leading-relaxed mb-4 min-h-[40px]">
                Run <code className="font-mono text-accent-2 text-xs">aca</code> in any project folder, then use <code className="font-mono text-accent-2 text-xs">/login</code> to select a provider and paste your key.
              </p>
              <div className="bg-code-bg border border-border-custom rounded-xl p-3.5 flex flex-col gap-3 font-mono text-xs mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-text-custom-3 text-[10px]">terminal</span>
                  <CopyButton text="aca" />
                </div>
                <div className="text-text-custom space-y-1">
                  <div>
                    <span className="text-accent-2 select-none mr-2">$</span>
                    <span>aca</span>
                  </div>
                  <div className="text-text-custom-3">
                    <span># inside ACA environment:</span>
                  </div>
                  <div>
                    <span className="text-accent select-none mr-2">&gt;</span>
                    <span className="text-accent-2">/login</span>
                    <span className="text-text-custom-3"> # pick provider &amp; paste key</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-dim border border-accent-border flex items-center justify-center font-mono font-bold text-sm text-accent-2">
                  3
                </div>
                <h4 className="font-bold text-text-custom text-sm font-display">Start giving it tasks</h4>
              </div>
              <p className="text-text-custom-2 text-xs leading-relaxed mb-4 min-h-[40px]">
                Ask in plain English. Reference files with <code className="font-mono text-accent-2 text-xs">@</code>. ACA handles the plan, edits, and checks.
              </p>
              <div className="bg-code-bg border border-border-custom rounded-xl p-3.5 flex flex-col gap-3 font-mono text-xs mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-text-custom-3 text-[10px]">inside ACA prompt</span>
                  <span className="text-[10px] text-accent-2 font-semibold">Ready</span>
                </div>
                <div className="text-text-custom">
                  <span className="text-accent select-none mr-2">&gt;</span>
                  <span>refactor <span className="text-accent-2">@src/api.ts</span> to use async/await and run the tests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 1. Two Ways to add key --- */}
        <div className="mb-20 text-left">
          <h3 className="text-xl font-bold font-display text-text-custom mb-4 border-b border-border-soft pb-3">
            1 · Two ways to add your key
          </h3>
          <p className="text-text-custom-2 text-sm mb-6">
            ACA is fully offline-first and connects directly to APIs. Choose whichever method fits your style:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border-custom bg-panel">
              <span className="text-xl mb-3 block">💬</span>
              <h4 className="font-bold text-text-custom text-sm font-display mb-1.5">Interactive /login (Recommended)</h4>
              <p className="text-xs text-text-custom-2 leading-relaxed">
                Run the CLI, type <code className="font-mono text-accent-2">/login</code>, choose a provider, and paste your API key. ACA securely persists it locally in your machine's local configuration directory so it remembers it for future sessions.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border-custom bg-panel">
              <span className="text-xl mb-3 block">💻</span>
              <h4 className="font-bold text-text-custom text-sm font-display mb-1.5">Environment Variables (Scripts &amp; CI)</h4>
              <p className="text-xs text-text-custom-2 leading-relaxed">
                Set your provider's API key as an environment variable before running ACA. This is perfect for automation, bash scripts, and headless CI pipelines where interactive inputs aren't available.
              </p>
            </div>
          </div>
        </div>

        {/* --- 2. Keys table --- */}
        <div className="mb-20 text-left">
          <h3 className="text-xl font-bold font-display text-text-custom mb-4 border-b border-border-soft pb-3">
            2 · API Key Reference List
          </h3>
          <p className="text-text-custom-2 text-sm mb-6">
            Quick links to access official key generation hubs and corresponding variables expected by ACA:
          </p>

          <div className="border border-border-custom rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-dark-2 border-b border-border-soft">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-custom-3">Provider</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-custom-3">Key Dashboard Link</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-custom-3">Expected Env Variable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft text-xs">
                {[
                  { name: 'Gemini', link: 'https://aistudio.google.com/apikey', var: 'GEMINI_API_KEY' },
                  { name: 'Claude', link: 'https://console.anthropic.com/settings/keys', var: 'ANTHROPIC_API_KEY' },
                  { name: 'OpenAI', link: 'https://platform.openai.com/api-keys', var: 'OPENAI_API_KEY' },
                  { name: 'NVIDIA NIM', link: 'https://build.nvidia.com/settings/api-keys', var: 'NVIDIA_API_KEY' },
                  { name: 'Groq', link: 'https://console.groq.com/keys', var: 'GROQ_API_KEY' },
                  { name: 'Cerebras', link: 'https://cloud.cerebras.ai', var: 'CEREBRAS_API_KEY' },
                  { name: 'OpenRouter', link: 'https://openrouter.ai/keys', var: 'OPENROUTER_API_KEY' },
                  { name: 'Hugging Face', link: 'https://huggingface.co/settings/tokens', var: 'HF_TOKEN' },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-bg-dark-2/30">
                    <td className="p-4 font-bold text-text-custom">{item.name}</td>
                    <td className="p-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-2 hover:underline inline-flex items-center gap-1.5 font-medium"
                      >
                        <span>{new URL(item.link).hostname} ↗</span>
                      </a>
                    </td>
                    <td className="p-4 font-mono text-accent-2 font-medium">{item.var}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- 3. Key formatting --- */}
        <div className="mb-20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-soft pb-3 mb-6">
            <h3 className="text-xl font-bold font-display text-text-custom">
              3 · Format per provider
            </h3>

            {/* OS Picker Tabs */}
            <div className="flex bg-bg-dark-3 p-1 rounded-lg border border-border-custom self-start">
              <button
                onClick={() => setActiveOS('unix')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeOS === 'unix' ? 'bg-accent/15 text-accent-2' : 'text-text-custom-3 hover:text-text-custom-2'
                }`}
              >
                macOS / Linux
              </button>
              <button
                onClick={() => setActiveOS('windows')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeOS === 'windows' ? 'bg-accent/15 text-accent-2' : 'text-text-custom-3 hover:text-text-custom-2'
                }`}
              >
                Windows (PowerShell)
              </button>
            </div>
          </div>

          <p className="text-text-custom-2 text-sm mb-6">
            Set the environment variable on your shell before booting up the engine.
          </p>

          {activeOS === 'unix' ? (
            <div className="bg-code-bg border border-border-custom rounded-xl p-5 font-mono text-xs space-y-4 relative">
              <div className="absolute top-4 right-4">
                <CopyButton text={`export GEMINI_API_KEY="AIza...your-key"
export ANTHROPIC_API_KEY="sk-ant-...your-key"
export OPENAI_API_KEY="sk-...your-key"
export NVIDIA_API_KEY="nvapi-...your-key"
export GROQ_API_KEY="gsk_...your-key"
export CEREBRAS_API_KEY="csk-...your-key"
export OPENROUTER_API_KEY="sk-or-...your-key"
export HF_TOKEN="hf_...your-token"`} />
              </div>
              <div className="space-y-3.5">
                <div>
                  <span className="text-text-custom-3"># Gemini — default provider</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> GEMINI_API_KEY=<span className="text-custom-green">"AIzaSy...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># Claude (Anthropic)</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> ANTHROPIC_API_KEY=<span className="text-custom-green">"sk-ant-...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># OpenAI</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> OPENAI_API_KEY=<span className="text-custom-green">"sk-...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># NVIDIA NIM</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> NVIDIA_API_KEY=<span className="text-custom-green">"nvapi-...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># Groq</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> GROQ_API_KEY=<span className="text-custom-green">"gsk_...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># Cerebras</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> CEREBRAS_API_KEY=<span className="text-custom-green">"csk-...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># OpenRouter</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> OPENROUTER_API_KEY=<span className="text-custom-green">"sk-or-...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># Hugging Face</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">export</span> HF_TOKEN=<span className="text-custom-green">"hf_...your-token"</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-code-bg border border-border-custom rounded-xl p-5 font-mono text-xs space-y-4 relative">
              <div className="absolute top-4 right-4">
                <CopyButton text={`$env:GEMINI_API_KEY = "AIzaSy...your-key"
setx GEMINI_API_KEY "AIzaSy...your-key"`} />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-text-custom-3"># Set current session variable (PowerShell)</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">$env:</span>GEMINI_API_KEY = <span className="text-custom-green">"AIzaSy...your-key"</span>
                  </div>
                </div>
                <div>
                  <span className="text-text-custom-3"># Persist permanently for all future sessions</span>
                  <div className="text-text-custom mt-1">
                    <span className="text-accent-2">setx</span> GEMINI_API_KEY <span className="text-custom-green">"AIzaSy...your-key"</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alert Callout */}
          <div className="mt-6 border-l-2 border-accent/40 bg-accent-dim/10 p-4 rounded-r-lg text-text-custom-2 text-xs leading-relaxed">
            <span className="font-bold text-text-custom mr-1.5">Note on Model Selections:</span>
            Gemini defaults to <code className="font-mono text-accent-2">gemini-2.5-flash-lite</code>. For OpenRouter, Groq, Cerebras, NVIDIA, OpenAI and Hugging Face you can define custom model targets dynamically via the <code className="font-mono text-accent-2">/model &lt;id&gt;</code> command inside ACA.
          </div>
        </div>

        {/* --- 4. Options Setup details --- */}
        <div className="mb-20 text-left">
          <h3 className="text-xl font-bold font-display text-text-custom mb-4 border-b border-border-soft pb-3">
            4 · Integrate into ACA
          </h3>
          <p className="text-text-custom-2 text-sm mb-8">
            Complete usage layout examples for connecting your credentials:
          </p>

          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-accent-2 text-sm font-display mb-3">Option A — Interactive <code>/login</code> flow (Persistent)</h4>
              <div className="bg-code-bg border border-border-custom rounded-xl p-5 font-mono text-xs space-y-3">
                <div className="text-text-custom-3"># 1. boot up client</div>
                <div>
                  <span className="text-accent-2 select-none mr-2">$</span>
                  <span>aca</span>
                </div>
                <div className="text-text-custom-3 mt-2"># 2. launch secure login utility</div>
                <div>
                  <span className="text-accent select-none mr-2">&gt;</span>
                  <span className="text-accent-2">/login</span>
                </div>
                <div className="text-text-custom-3 pl-4"># Select provider (e.g. Gemini) from interactive prompts</div>
                <div className="text-text-custom-3 pl-4"># Paste API token securely</div>
                <div className="text-text-custom-3 pl-4"># Pick model from list</div>
                <div className="text-text-custom-3 mt-2"># 3. switch targeted model easily any time</div>
                <div>
                  <span className="text-accent select-none mr-2">&gt;</span>
                  <span className="text-accent-2">/model</span>
                  <span> gemini-2.5-pro</span>
                </div>
                <div className="text-text-custom-3 mt-2"># 4. disconnect or logout current session</div>
                <div>
                  <span className="text-accent select-none mr-2">&gt;</span>
                  <span className="text-accent-2">/logout</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-accent-2 text-sm font-display mb-3">Option B — Environment overrides (Instant)</h4>
              <div className="bg-code-bg border border-border-custom rounded-xl p-5 font-mono text-xs space-y-3 relative">
                <div className="absolute top-4 right-4">
                  <CopyButton text={`export GROQ_API_KEY="gsk_...your-key"
export ACA_PROVIDER="groq"
export ACA_DEFAULT_MODEL="llama-3.3-70b-versatile"
aca`} />
                </div>
                <div className="text-text-custom-3"># Feed key and target system overrides instantly inside script</div>
                <div>
                  <span className="text-accent-2">export</span> GROQ_API_KEY=<span className="text-custom-green">"gsk_...your-key"</span>
                </div>
                <div>
                  <span className="text-accent-2">export</span> ACA_PROVIDER=<span className="text-custom-green">"groq"</span>
                </div>
                <div>
                  <span className="text-accent-2">export</span> ACA_DEFAULT_MODEL=<span className="text-custom-green">"llama-3.3-70b-versatile"</span>
                </div>
                <div className="text-text-custom-3 mt-2"># launch CLI</div>
                <div>
                  <span className="text-accent-2 select-none mr-2">$</span>
                  <span>aca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. Optional settings --- */}
        <div className="text-left">
          <h3 className="text-xl font-bold font-display text-text-custom mb-4 border-b border-border-soft pb-3">
            5 · Optional Automation Settings
          </h3>
          <p className="text-text-custom-2 text-sm mb-6">
            Handy override configuration parameters for workflows and scripts:
          </p>

          <div className="border border-border-custom rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-dark-2 border-b border-border-soft">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-custom-3 w-[30%]">Variable</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-custom-3 w-[70%]">Behavior Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft text-xs">
                {envVars.map((item, idx) => (
                  <tr key={idx} className="hover:bg-bg-dark-2/30">
                    <td className="p-4 font-mono text-accent-2 font-bold">{item.name}</td>
                    <td className="p-4 text-text-custom-2 leading-relaxed">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
