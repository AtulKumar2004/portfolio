import React from 'react';
import {
  FileText,
  Sparkles,
  Users,
  CheckCircle2,
  Share2,
  BarChart3,
  ShieldCheck,
  Send,
  Image as ImageIcon,
  Smile,
  Hash,
  Activity,
  Layers,
  Radio,
  Sun,
  Thermometer,
  ShieldAlert,
  Bot,
  Search,
  Check,
} from 'lucide-react';

export default function ProjectMockup({ type, accent = '#A3E635' }) {
  if (type === 'document-editor') {
    // BharatDocs — Multilingual Document Editor Mockup
    return (
      <div className="w-full h-full bg-[#111111] p-3 sm:p-4 text-[11px] font-sans flex flex-col justify-between select-none overflow-hidden">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <span className="font-mono text-xs text-[#E5E5E5] font-medium flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#A3E635]" />
              BharatDocs_v2.md
            </span>
          </div>

          {/* Active Collaborators (Liveblocks) */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-[#A3E635] text-[#0A0A0A] font-bold text-[9px] flex items-center justify-center border border-[#111111]">
                AK
              </span>
              <span className="w-5 h-5 rounded-full bg-[#38BDF8] text-[#0A0A0A] font-bold text-[9px] flex items-center justify-center border border-[#111111]">
                RP
              </span>
              <span className="w-5 h-5 rounded-full bg-[#C084FC] text-[#0A0A0A] font-bold text-[9px] flex items-center justify-center border border-[#111111]">
                SK
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#737373] hidden sm:inline">
              Liveblocks
            </span>
          </div>
        </div>

        {/* Language Tabs & Formatting Toolbar */}
        <div className="flex items-center justify-between bg-[#171717] rounded-lg px-2.5 py-1.5 mb-3 border border-[#262626]">
          <div className="flex items-center gap-1 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-[#A3E635]/15 text-[#A3E635] font-medium border border-[#A3E635]/30">
              हिन्दी (Hindi)
            </span>
            <span className="px-2 py-0.5 rounded text-[#737373] hover:text-[#A3A3A3]">
              বাংলা
            </span>
            <span className="px-2 py-0.5 rounded text-[#737373] hover:text-[#A3A3A3]">
              தமிழ்
            </span>
            <span className="px-2 py-0.5 rounded text-[#737373] hover:text-[#A3A3A3]">
              English
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[#A3A3A3]">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#202020] text-[#A3E635] flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> AI Assist
            </span>
          </div>
        </div>

        {/* Document Body Area */}
        <div className="bg-[#141414] rounded-lg p-3.5 border border-[#222222] flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#737373] font-mono border-b border-[#1F1F1F] pb-1.5">
              <span>Section: Digital Lexicon</span>
              <span className="text-[#A3E635]">Convex DB Sync: Active</span>
            </div>
            <p className="text-sm font-medium text-[#F5F5F5] leading-snug">
              भारतीय भाषाओं में डिजिटल ज्ञान का सुगम विस्तार
            </p>
            <p className="text-[#8E8E8E] text-[11px] leading-relaxed line-clamp-2">
              Empowering vernacular synthesis with multilingual phonetic transliteration and LLM semantic rewriting.
            </p>
          </div>

          {/* AI Writing Assist Prompt Bubble */}
          <div className="mt-3 bg-[#1C1C1C] border border-[#2D2D2D] rounded-md p-2 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 text-[#E5E5E5] font-mono">
              <Sparkles className="w-3 h-3 text-[#A3E635]" />
              AI: "Summarize paragraph in Marathi & Telugu"
            </span>
            <span className="px-1.5 py-0.5 rounded bg-[#A3E635]/20 text-[#BEF264] text-[9px] font-mono">
              Ready
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics-diagnostics') {
    // MerchantLens — Shopify AI Diagnostics Mockup
    return (
      <div className="w-full h-full bg-[#111111] p-3 sm:p-4 text-[11px] font-sans flex flex-col justify-between select-none overflow-hidden">
        {/* Top bar with store URL */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <span className="font-mono text-xs text-[#E5E5E5] font-medium flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[#F59E0B]" />
              MerchantLens · AI Audit
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30">
            Shopify Store
          </span>
        </div>

        {/* Score & Store Status */}
        <div className="grid grid-cols-12 gap-2.5 mb-3">
          <div className="col-span-5 bg-[#171717] border border-[#262626] rounded-lg p-2.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#10B981] flex items-center justify-center font-mono font-bold text-sm text-[#10B981]">
              85
            </div>
            <div>
              <div className="text-[9px] font-mono text-[#737373] uppercase">AI Perception</div>
              <div className="text-xs font-semibold text-[#F5F5F5]">Good Readiness</div>
            </div>
          </div>
          <div className="col-span-7 bg-[#171717] border border-[#262626] rounded-lg p-2.5 flex flex-col justify-between">
            <div className="text-[9px] font-mono text-[#737373]">STORE URL</div>
            <div className="text-[11px] font-mono text-[#E5E5E5] truncate">https://store-fashion.myshopify.com</div>
            <div className="text-[9px] text-[#A3E635] font-mono">Agent Scrape Verified</div>
          </div>
        </div>

        {/* Action Roadmap */}
        <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 flex-1 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373]">
            <span>Ranked Action Plan</span>
            <span className="text-[#F59E0B]">3 High Priority Items</span>
          </div>

          <div className="space-y-1.5">
            <div className="bg-[#1A1A1A] border border-[#2B2B2B] rounded-md px-2.5 py-1.5 flex items-center justify-between text-[10px]">
              <span className="text-[#E5E5E5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                Add structured Product Variant Schema
              </span>
              <span className="text-[9px] font-mono text-[#EF4444] bg-[#EF4444]/10 px-1.5 py-0.5 rounded">Action Req</span>
            </div>
            <div className="bg-[#1A1A1A] border border-[#2B2B2B] rounded-md px-2.5 py-1.5 flex items-center justify-between text-[10px]">
              <span className="text-[#E5E5E5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                Enrich catalog descriptions for LLM Search
              </span>
              <span className="text-[9px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded">Pending</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-[10px] font-mono text-[#737373]">
            <span>TypeScript · Tailwind CSS</span>
            <span className="text-[#10B981]">Diagnostics Synced</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'weather-uv') {
    // CheckUV Web — Global UV Index & Sun Protection Mockup
    return (
      <div className="w-full h-full bg-[#111111] p-3 sm:p-4 text-[11px] font-sans flex flex-col justify-between select-none overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <span className="font-mono text-xs text-[#E5E5E5] font-medium flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#F97316]" />
              CheckUV Web · Solar Radiation
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
            Express.js API
          </span>
        </div>

        {/* Location search bar & Current UV */}
        <div className="bg-[#171717] border border-[#262626] rounded-lg px-2.5 py-1.5 mb-3 flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1.5 text-[#E5E5E5] font-mono">
            <Search className="w-3 h-3 text-[#F97316]" />
            Location: "Bhubaneswar, IN"
          </span>
          <span className="text-[#A3E635] font-mono">Real-Time Data</span>
        </div>

        {/* UV Index Gauge and Sun Protection Card */}
        <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[9px] font-mono text-[#737373] uppercase">Current UV Index</div>
              <div className="text-2xl font-bold font-mono text-[#F97316] flex items-center gap-2">
                8.4
                <span className="text-xs font-normal text-[#EF4444] px-2 py-0.5 rounded bg-[#EF4444]/10 border border-[#EF4444]/20">
                  Very High
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-mono text-[#737373] uppercase">Est. Burn Time</div>
              <div className="text-sm font-semibold font-mono text-[#F5F5F5]">15-20 mins</div>
            </div>
          </div>

          {/* Sun Protection Recommendation */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-md p-2 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 text-[#E5E5E5]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              Recommendation: Apply SPF 50+, seek shade 11 AM - 3 PM.
            </span>
          </div>

          <div className="pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-[10px] font-mono text-[#737373]">
            <span>Weather REST API</span>
            <span className="text-[#F97316]">Say NO to Sunburns</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    // Srijan — Management & Analytics Platform Mockup
    return (
      <div className="w-full h-full bg-[#111111] p-3 sm:p-4 text-[11px] font-sans flex flex-col justify-between select-none overflow-hidden">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <span className="font-mono text-xs text-[#E5E5E5] font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              Srijan Console · Internal Ops
            </span>
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
            RBAC: Admin
          </span>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-[#171717] border border-[#262626] rounded-lg p-2">
            <div className="text-[9px] font-mono text-[#737373] uppercase">Users</div>
            <div className="text-base font-semibold text-[#F5F5F5] font-mono mt-0.5">100+</div>
            <div className="text-[9px] text-[#38BDF8] font-mono mt-0.5">Active Society</div>
          </div>
          <div className="bg-[#171717] border border-[#262626] rounded-lg p-2">
            <div className="text-[9px] font-mono text-[#737373] uppercase">Attendance</div>
            <div className="text-base font-semibold text-[#F5F5F5] font-mono mt-0.5">94.8%</div>
            <div className="text-[9px] text-[#A3E635] font-mono mt-0.5">+4.2% MoM</div>
          </div>
          <div className="bg-[#171717] border border-[#262626] rounded-lg p-2">
            <div className="text-[9px] font-mono text-[#737373] uppercase">Follow-ups</div>
            <div className="text-base font-semibold text-[#F5F5F5] font-mono mt-0.5">28 Done</div>
            <div className="text-[9px] text-[#A3A3A3] font-mono mt-0.5">0 Overdue</div>
          </div>
        </div>

        {/* Analytics mini graph and status table */}
        <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] mb-2">
            <span>Weekly Session Cadence</span>
            <span className="text-[#38BDF8]">Live Metrics</span>
          </div>

          {/* Graphical visualization bars */}
          <div className="flex items-end justify-between gap-1.5 h-12 pt-1 pb-1 px-1 bg-[#171717] rounded border border-[#202020]">
            {[45, 68, 55, 82, 95, 78, 92].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm bg-gradient-to-t from-[#38BDF8]/40 to-[#38BDF8]"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-[10px] text-[#8E8E8E] font-mono">
            <span className="flex items-center gap-1 text-[#E5E5E5]">
              <CheckCircle2 className="w-3 h-3 text-[#A3E635]" />
              Role Permissions Synced
            </span>
            <span>Next.js 14 API</span>
          </div>
        </div>
      </div>
    );
  }

  // Chatty — Real-time Messaging Interface Mockup
  return (
    <div className="w-full h-full bg-[#111111] p-3 sm:p-4 text-[11px] font-sans flex flex-col justify-between select-none overflow-hidden">
      {/* Messaging Header */}
      <div className="flex items-center justify-between border-b border-[#222222] pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>
          <span className="font-mono text-xs text-[#E5E5E5] font-medium flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#C084FC]" />
            #dev-engineering
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A3A3A3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
          <span>Socket.IO Connected</span>
        </div>
      </div>

      {/* Message Chat Feed */}
      <div className="space-y-2.5 flex-1 flex flex-col justify-end bg-[#141414] rounded-lg p-3 border border-[#222222]">
        {/* Incoming Message */}
        <div className="flex items-start gap-2 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-[#38BDF8] text-[#0A0A0A] font-bold text-[10px] flex items-center justify-center shrink-0">
            A
          </div>
          <div className="bg-[#1E1E1E] border border-[#2D2D2D] rounded-xl rounded-tl-none p-2 text-[11px] text-[#E5E5E5]">
            <p>WebSocket latency dropped to 18ms with room partitioning.</p>
          </div>
        </div>

        {/* Outgoing Message with Media */}
        <div className="flex items-start gap-2 max-w-[85%] self-end flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-[#A3E635] text-[#0A0A0A] font-bold text-[10px] flex items-center justify-center shrink-0">
            Me
          </div>
          <div className="bg-[#C084FC]/15 border border-[#C084FC]/30 rounded-xl rounded-tr-none p-2 text-[11px] text-[#F5F5F5]">
            <p>Uploaded the preview asset!</p>
            <div className="mt-1.5 px-2 py-1 bg-[#121212] rounded border border-[#262626] flex items-center gap-1.5 text-[10px] font-mono text-[#C084FC]">
              <ImageIcon className="w-3 h-3" />
              <span>build_metrics.png · 420 KB</span>
            </div>
          </div>
        </div>

        {/* Live Typing Indicator */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#737373] pt-1">
          <span className="inline-flex gap-1 items-center">
            <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce [animation-delay:0.4s]" />
          </span>
          <span>Peer joined #dev-engineering</span>
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="mt-2.5 flex items-center justify-between bg-[#171717] border border-[#262626] rounded-lg px-2.5 py-1.5">
        <span className="text-[11px] text-[#525252] font-mono">Send message via Socket.IO...</span>
        <div className="flex items-center gap-1 text-[#737373]">
          <ImageIcon className="w-3 h-3 hover:text-[#E5E5E5] cursor-pointer" />
          <Send className="w-3 h-3 text-[#A3E635] ml-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
