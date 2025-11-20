import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, X, Loader2 } from 'lucide-react';
import { getLegalAdvice } from '../services/geminiService';

interface AiAssistantProps {
  context: string;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const answer = await getLegalAdvice(query, context);
    
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-800 transition-all transform hover:scale-105 border-2 border-orange-500"
        >
          <Sparkles className="h-5 w-5 text-orange-400" />
          <span className="font-bold">AI Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-blue-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <h3 className="font-bold">Legal <span className="text-orange-500">स्थल</span> AI</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto flex flex-col gap-3">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-gray-700 max-w-[90%]">
              Hi! I can help answer questions about {context}. What would you like to know?
            </div>
            
            {response && (
              <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-gray-700 max-w-[90%]">
                {response}
              </div>
            )}

            {loading && (
               <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-gray-500 flex items-center gap-2">
                 <Loader2 className="h-4 w-4 animate-spin text-orange-600" /> Thinking...
               </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleAsk} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question..."
              className="flex-grow text-sm border-gray-300 rounded-full px-4 py-2 border focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 disabled:opacity-50 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;