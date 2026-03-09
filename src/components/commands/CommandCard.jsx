import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Terminal, List, Play, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const categoryColors = {
  color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  adjustments_effects: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  transformations: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  animations: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  text_overlay: "bg-green-500/20 text-green-400 border-green-500/30",
  utilities: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  settings: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  information: "bg-slate-500/20 text-slate-400 border-slate-500/30"
};

export default function CommandCard({ command, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = command.arguments || command.instructions;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <code className="text-white font-mono font-semibold text-base">/{command.name}</code>
              <Badge variant="outline" className={`${categoryColors[command.category]} border text-xs`}>
                {command.category?.replace(/_/g, ' ')}
              </Badge>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{command.description}</p>
          </div>
          {command.videoUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 flex-shrink-0"
              onClick={() => window.open(command.videoUrl, '_blank')}
            >
              <Play className="w-3 h-3 mr-1" />
              Video
            </Button>
          )}
        </div>

        {/* Usage */}
        {command.usage && (
          <div className="bg-black/30 rounded-lg p-3 border border-white/5">
            <p className="text-gray-500 text-xs mb-1">Usage:</p>
            <code className="text-xs text-gray-300 font-mono">{command.usage}</code>
          </div>
        )}

        {/* Expandable Details */}
        {hasDetails && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {isExpanded ? 'Hide details' : 'Show details'}
            </button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                {/* Arguments */}
                {command.arguments && (
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <List className="w-3 h-3 text-gray-500" />
                      <p className="text-gray-500 text-xs font-semibold">Arguments:</p>
                    </div>
                    <div className="space-y-2">
                      {command.arguments.map((arg, idx) => (
                        <div key={idx} className="text-xs">
                          <code className="text-indigo-300 font-mono">
                            {arg.name}
                            {arg.required ? ' (required)' : ' (optional)'}
                          </code>
                          <p className="text-gray-400 mt-1 ml-2">→ {arg.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructions */}
                {command.instructions && (
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-3 h-3 text-gray-500" />
                      <p className="text-gray-500 text-xs font-semibold">Instructions:</p>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">
                      {command.instructions}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}