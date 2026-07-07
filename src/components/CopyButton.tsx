import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border transition-all duration-150 cursor-pointer ${
        copied
          ? 'text-custom-green border-custom-green/40 bg-custom-green/5'
          : 'text-text-custom-2 border-border-custom hover:border-accent-border hover:text-text-custom bg-bg-dark-3'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-custom-green" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
