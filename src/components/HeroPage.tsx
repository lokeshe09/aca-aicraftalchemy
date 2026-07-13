import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import CopyButton from './CopyButton';
import { Terminal, Shield, Key, ArrowRight, Check, Play, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroPageProps {
  setActivePage: (page: ActivePage) => void;
}

type TerminalDemoType = 'refactor' | 'debug' | 'generate';

interface TerminalLine {
  type: 'input' | 'process' | 'edit' | 'run' | 'success' | 'done' | 'info';
  text: string;
}

export default function HeroPage({ setActivePage }: HeroPageProps) {
  const [activeDemo, setActiveDemo] = useState<TerminalDemoType>('refactor');
  const [demoLines, setDemoLines] = useState<TerminalLine[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const headlinePrefix = "The agentic coding CLI for ";
  const headlineSuffix = "any model, any provider";
  const fullHeadline = headlinePrefix + headlineSuffix;
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    let currentLength = 0;
    const interval = setInterval(() => {
      currentLength++;
      setTypedLength(currentLength);
      if (currentLength >= fullHeadline.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const demos: Record<TerminalDemoType, { command: string; steps: TerminalLine[] }> = {
    refactor: {
      command: 'refactor @src/auth.ts to use async/await and run the tests',
      steps: [
        { type: 'process', text: '· reading src/auth.ts · scanning callers' },
        { type: 'process', text: '· analyzed 3 callers & token usage verified' },
        { type: 'edit', text: '✎ Edit: src/auth.ts — 3 functions converted to async/await' },
        { type: 'run', text: '▶ Run: npm test' },
        { type: 'success', text: '✓ 24 passing (1.2s)' },
        { type: 'done', text: 'Done — auth.ts now uses async/await; all tests green.' },
      ],
    },
    debug: {
      command: 'debug @src/routes/api.ts and fix the uncaught TypeError',
      steps: [
        { type: 'process', text: '· analyzing runtime logs & src/routes/api.ts' },
        { type: 'process', text: '· located error: accessing property "id" on undefined at line 42' },
        { type: 'edit', text: '✎ Edit: src/routes/api.ts — added optional chaining & default values' },
        { type: 'run', text: '▶ Run: npm run build' },
        { type: 'success', text: '✓ Compile successful. 0 errors (0.8s)' },
        { type: 'done', text: 'Done — Type safety patch applied. Uncaught TypeError resolved.' },
      ],
    },
    generate: {
      command: 'generate a new route @src/routes/users.ts with get, post and delete handlers',
      steps: [
        { type: 'process', text: '· planning route architecture & schema alignment' },
        { type: 'edit', text: '✎ Create: src/routes/users.ts — instantiated router & CRUD validation' },
        { type: 'edit', text: '✎ Edit: src/server.ts — registered users router at /api/users' },
        { type: 'run', text: '▶ Run: curl -I http://localhost:3000/api/users' },
        { type: 'success', text: '✓ HTTP/1.1 200 OK — CRUD endpoints responding' },
        { type: 'done', text: 'Done — Express router generated and fully wired into server.' },
      ],
    },
  };

  // Run selected terminal demo step-by-step
  useEffect(() => {
    setDemoLines([]);
    setStepIndex(0);
    setIsPlaying(true);
  }, [activeDemo]);

  useEffect(() => {
    if (!isPlaying) return;

    const currentDemo = demos[activeDemo];
    if (stepIndex === 0) {
      // First line is the user prompt
      const timer = setTimeout(() => {
        setDemoLines([{ type: 'input', text: currentDemo.command }]);
        setStepIndex(1);
      }, 300);
      return () => clearTimeout(timer);
    }

    if (stepIndex - 1 < currentDemo.steps.length) {
      const timer = setTimeout(() => {
        setDemoLines((prev) => [...prev, currentDemo.steps[stepIndex - 1]]);
        setStepIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [stepIndex, activeDemo, isPlaying]);

  return (
    <div className="relative py-12 md:py-18 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-accent/10 rounded-full blur-[110px]" />
        <div className="absolute top-36 right-12 w-[400px] h-[260px] bg-accent-2/5 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs text-text-custom-2 border border-border-custom px-3.5 py-1.5 rounded-full bg-bg-dark-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-custom-green shadow-[0_0_10px_#55d98a] animate-pulse" />
              <span>Local &amp; private · Your keys never leave your machine</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-text-custom leading-[1.08] mb-6 min-h-[5.5rem] md:min-h-[7rem] lg:min-h-[8.5rem]">
              {fullHeadline.substring(0, Math.min(typedLength, headlinePrefix.length))}
              {typedLength > headlinePrefix.length && (
                <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                  {fullHeadline.substring(headlinePrefix.length, Math.min(typedLength, headlinePrefix.length + headlineSuffix.length))}
                </span>
              )}
              {typedLength > (headlinePrefix.length + headlineSuffix.length) && (
                <span className="text-text-custom-3 font-sans text-2xl md:text-3xl lg:text-4xl font-normal block mt-3">
                  {fullHeadline.substring(headlinePrefix.length + headlineSuffix.length, typedLength)}
                </span>
              )}
              {typedLength < fullHeadline.length && (
                <span className="inline-block w-[3px] h-[0.8em] bg-accent ml-1.5 animate-blink align-middle" />
              )}
            </h1>

            {/* Lead Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-custom-2 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            >
              ACA is a terminal-native AI coding assistant that reads, writes, and runs your code — driven by whichever model you choose. Bring your own API key from Gemini, Claude, OpenAI, NVIDIA, Groq, Cerebras, OpenRouter, or Hugging Face. No lock-in, no middleman.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={() => setActivePage('docs')}
                className="flex items-center justify-center gap-2 bg-accent text-bg-dark font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-2 transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span>Install ACA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActivePage('features')}
                className="flex items-center justify-center gap-2 border border-border-custom hover:border-accent-border/60 hover:bg-bg-dark-2 transition-all text-text-custom text-sm px-6 py-3 rounded-lg cursor-pointer w-full sm:w-auto"
              >
                <span>Explore Features</span>
              </button>
            </motion.div>

            {/* Global Install Command Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-md bg-code-bg border border-border-custom rounded-xl p-3.5 flex items-center justify-between font-mono text-sm"
            >
              <div className="flex items-center gap-2 text-text-custom overflow-x-auto whitespace-nowrap scrollbar-none pr-3">
                <span className="text-accent-2 select-none">$</span>
                <span>npm install -g @aicraftalchemy/aca</span>
              </div>
              <CopyButton text="npm install -g @aicraftalchemy/aca" />
            </motion.div>
          </div>

          {/* Hero Right - Interactive Terminal Simulator */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">
            {/* Terminal Header Tabs to select Demo */}
            <div className="flex bg-bg-dark-3/70 p-1 rounded-xl border border-border-custom">
              {(['refactor', 'debug', 'generate'] as TerminalDemoType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveDemo(type)}
                  className={`flex-1 text-center py-2 text-xs font-mono font-medium rounded-lg transition-all capitalize cursor-pointer ${
                    activeDemo === type
                      ? 'bg-accent/15 text-accent-2 border border-accent-border/30 shadow-sm'
                      : 'text-text-custom-3 hover:text-text-custom-2'
                  }`}
                >
                  {type === 'refactor' ? 'Refactor' : type === 'debug' ? 'Debug' : 'Generate'}
                </button>
              ))}
            </div>

            {/* Terminal Screen Container */}
            <div className="w-full bg-[#0a0c13] border border-border-custom rounded-xl overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Window Chrome */}
              <div className="bg-[#0e1119] px-4 py-3 border-b border-border-soft flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-[11px] text-text-custom-3 tracking-wide">
                    aca — ~/projects/app
                  </span>
                </div>
                {/* Replay action */}
                <button
                  onClick={() => {
                    setDemoLines([]);
                    setStepIndex(0);
                    setIsPlaying(true);
                  }}
                  disabled={isPlaying}
                  className={`p-1 text-text-custom-3 hover:text-text-custom-2 rounded transition-colors ${
                    isPlaying ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  title="Replay simulation"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Terminal Inner Output Display */}
              <div className="p-5 font-mono text-[12.5px] leading-relaxed min-h-[290px] flex flex-col justify-between text-left">
                <div className="space-y-2.5 flex-1">
                  {demoLines.map((line, idx) => (
                    <div key={idx} className="animate-in fade-in slide-in-from-bottom-1 duration-200">
                      {line.type === 'input' && (
                        <div>
                          <span className="text-accent-2 select-none mr-2">&gt;</span>
                          <span className="text-text-custom font-medium">{line.text}</span>
                        </div>
                      )}
                      {line.type === 'process' && (
                        <div className="text-text-custom-3 pl-4 flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
                          <span>{line.text}</span>
                        </div>
                      )}
                      {line.type === 'edit' && (
                        <div className="text-accent-2 pl-4">
                          <span className="text-accent mr-1.5">✎</span>
                          <span>{line.text}</span>
                        </div>
                      )}
                      {line.type === 'run' && (
                        <div className="text-text-custom pl-4">
                          <span className="text-accent mr-1.5">▶</span>
                          <span>{line.text}</span>
                        </div>
                      )}
                      {line.type === 'success' && (
                        <div className="text-custom-green pl-4 font-semibold">
                          <span>{line.text}</span>
                        </div>
                      )}
                      {line.type === 'done' && (
                        <div className="text-text-custom-2 font-medium mt-1">
                          <span>{line.text}</span>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Blinking Interactive Command input */}
                  {isPlaying && stepIndex === 0 && (
                    <div className="text-text-custom-3">
                      <span className="text-accent-2 select-none mr-2">&gt;</span>
                      <span className="animate-pulse">Typing...</span>
                    </div>
                  )}

                  {/* Active prompt with blinking cursor when idle or done */}
                  {!isPlaying && (
                    <div className="mt-2 text-text-custom-2">
                      <span className="text-accent-2 select-none mr-2">&gt;</span>
                      <span className="inline-block w-2.5 h-4 bg-accent-2/80 animate-[blink_1s_step-end_infinite] align-middle" />
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-border-soft/60 flex items-center justify-between text-[11px] text-text-custom-3">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-accent" />
                    <span>Direct-to-provider routing active</span>
                  </div>
                  <div className="font-semibold text-accent-2 bg-accent-dim px-2 py-0.5 rounded">
                    LOCAL ENGINE
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Helper text */}
            <p className="text-xs text-text-custom-3 text-center">
              Click tabs above to see different simulated developer commands.
            </p>
          </div>

        </div>

        {/* Highlight Stats / Mini benefits row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-border-soft">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-bg-dark-2/40 border border-border-custom/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-dim text-accent border border-accent-border/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-custom text-sm">No Proxy Middleman</h4>
              <p className="text-xs text-text-custom-2 mt-1">
                Your code and API keys connect straight to providers. We do not store or process your data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-bg-dark-2/40 border border-border-custom/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-dim text-accent border border-accent-border/30">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-custom text-sm">Bring Your Own Key</h4>
              <p className="text-xs text-text-custom-2 mt-1">
                Say goodbye to marked-up monthly AI seats. Pay developers prices directly to Google, Anthropic, or OpenAI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-bg-dark-2/40 border border-border-custom/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-dim text-accent border border-accent-border/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-custom text-sm">Runs Directly in Shell</h4>
              <p className="text-xs text-text-custom-2 mt-1">
                No need to switch to custom IDE extensions. Run right inside your native terminal, tmux, or VSCode terminal.
              </p>
            </div>
          </div>
        </div>

        {/* CLI SEO & Index Directory Section */}
        <div className="mt-20 pt-10 border-t border-border-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-sans font-bold text-lg md:text-xl text-text-custom tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                CLI Engine Index &amp; Search Tags
              </h3>
              <p className="text-xs text-text-custom-3 mt-1">
                Explore the complete technical index and core search tags of the agentic coding CLI ecosystem.
              </p>
            </div>
            <div className="text-[10px] font-mono text-accent-2 bg-accent-dim px-3 py-1.5 rounded-lg border border-accent-border/20 self-start md:self-auto uppercase tracking-wider font-bold">
              Indexable metadata active
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Agentic Coding CLI", text: "ACA runs as a high-performance <strong>agentic coding CLI</strong> built for automated software engineering." },
              { label: "Command-Line Interface", text: "A fully keyboard-driven <strong>command-line interface</strong> that eliminates context-switching." },
              { label: "Local AI Coder", text: "Integrate a secure, offline-ready <strong>local AI coder</strong> that respects your project boundaries." },
              { label: "Private Coding Assistant", text: "An absolute <strong>private coding assistant</strong> that never sends telemetry or secret keys to middleman proxies." },
              { label: "Bring Your Own Key", text: "A robust <strong>bring your own key (BYOK)</strong> framework ensuring direct billing relationships with models." },
              { label: "Gemini API Integration", text: "Leverage state-of-the-art <strong>Gemini API integration</strong> for native code generation and fast reasoning." },
              { label: "Claude Sonnet Model Router", text: "Route complex developer tasks with <strong>Claude Sonnet model router</strong> configurations for extreme coding accuracy." },
              { label: "OpenAI Developer Key", text: "Plug in any <strong>OpenAI developer key</strong> to utilize GPT models directly from your native shell environment." },
              { label: "Groq Inference Engine", text: "Accelerate development speed with ultra-low latency <strong>Groq speed-of-light inference</strong> models." },
              { label: "Cerebras Rapid Codegen", text: "Experience next-level generation speed via <strong>Cerebras rapid codegen</strong> integration." },
              { label: "Autonomous Software Agent", text: "A highly capable <strong>autonomous software development agent</strong> that writes, tests, and debugs source files." },
              { label: "Direct Shell Terminal", text: "Works inside any <strong>direct shell terminal code editor</strong> like vim, neovim, tmux, or VSCode terminals." },
              { label: "Code Refactoring Engine", text: "Execute automated cleanups, type adjustments, and optimizations with the <strong>code refactoring engine</strong>." },
              { label: "Automated Error Debugging", text: "Trace stack logs and fix fatal compiler exceptions using the <strong>automated error debugging tool</strong>." },
              { label: "Full-Stack Codebase Generator", text: "Scaffold, compile, and refine large-scale systems with the <strong>full-stack codebase generator</strong>." },
              { label: "Offline-First Local Workspace", text: "Operate in an <strong>offline-first local workspace</strong> environment where your intellectual property stays secure." },
              { label: "Multi-Model LLM Gateway", text: "Unify all foundation models into a unified <strong>multi-model LLM gateway</strong> under a single terminal utility." },
              { label: "Intelligent Token Control", text: "Keep model server bills light through active <strong>intelligent token budget control</strong> and context trimming." },
              { label: "No Proxy Security", text: "Bypass data parsing and middleman logging with our <strong>no proxy middleman security</strong> engineering." },
              { label: "Developer Utilities", text: "A clean set of <strong>terminal-native developer utilities</strong> tailored for agile software engineering teams." }
            ].map((tag, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-bg-dark-2/20 border border-border-custom/30 hover:border-accent-border/30 hover:bg-bg-dark-2/40 transition-all duration-200 text-left"
              >
                <div className="font-mono text-[11px] text-accent font-bold mb-1.5 uppercase tracking-wide">{tag.label}</div>
                <p 
                  className="text-xs text-text-custom-2 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: tag.text }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
