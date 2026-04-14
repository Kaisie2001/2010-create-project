import { Ruler, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ProjectData, Step } from '../types';
import { cn } from '../lib/utils';

interface SummaryPanelProps {
  step: Step;
  data: ProjectData;
}

export default function SummaryPanel({ step, data }: SummaryPanelProps) {
  if (step === 1) {
    return (
      <div className="w-80 bg-[#F8FAFC] border-l border-gray-200 p-6 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Live Summary</h2>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">In Progress</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Project Name</p>
              <p className="text-sm font-semibold text-gray-900">{data.projectName || 'Untitled Project'}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Location</p>
              <p className="text-sm font-semibold text-gray-900">{data.buildingName}, {data.district}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Type</p>
                <p className="text-sm font-semibold text-gray-900">{data.projectType}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Stage</p>
                <p className="text-sm font-semibold text-gray-900">{data.projectStage}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Target Area</p>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold text-blue-600">{Number(data.partitionArea).toLocaleString()}</p>
                <span className="text-sm font-bold text-blue-600">m²</span>
                <Ruler size={16} className="text-gray-300 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 group">
          <img 
            src="https://picsum.photos/seed/blueprint/400/300" 
            alt="Visual Context" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
              <Ruler size={14} />
              Visual Context Loading
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex gap-3">
          <Lightbulb className="text-orange-400 shrink-0" size={20} />
          <p className="text-xs text-orange-900 leading-relaxed">
            Pro-tip: You can import building geometry from Revit or IFC later in the 'Data Inputs' stage.
          </p>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="w-80 bg-[#F8FAFC] border-l border-gray-200 p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">Configuration Summary</h2>
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold text-gray-900 uppercase">setup_completeness</span>
              <span className="text-xs font-bold text-blue-600">45%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full w-[45%]" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Status: IN_PROGRESS</span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Partition_system_type</p>
              <p className="text-sm font-semibold text-gray-900">{data.partitionSystem.type}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Board_layers</p>
              <p className="text-sm font-semibold text-gray-900">{data.partitionSystem.layersPerSide} Layers / Side (Plasterboard)</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Stud_frame_type</p>
              <p className="text-sm font-semibold text-gray-900">{data.partitionSystem.studFrameType}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Connection_type</p>
              <p className="text-sm font-semibold text-gray-900">{data.partitionSystem.connectionType}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto italic text-[10px] text-gray-400 text-center px-4">
          "The ledger ensures all calculations are rooted in the physical reality of the assembly."
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="w-80 bg-[#F8FAFC] border-l border-gray-200 p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">Setup Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Data Source</span>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">HK Default</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Evidence Level</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Medium (L2)</span>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-gray-500">Completeness</span>
                <span className="text-xs font-bold text-gray-900">68%</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-900 rounded-full w-[68%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 size={16} className="text-green-600" />
            <span className="text-[10px] font-bold text-gray-900 uppercase">Status: Ready to Proceed</span>
          </div>

          <div className="rounded-xl overflow-hidden aspect-video bg-gray-200 mb-4">
            <img 
              src="https://picsum.photos/seed/material/400/225" 
              alt="Material Context" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Architectural Ledger Project Instance ID: #8821-XG
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-[#F8FAFC] border-l border-gray-200 p-6 flex flex-col gap-6">
      <div className="bg-blue-900 rounded-2xl p-6 text-white">
        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-2">Workspace Status</p>
        <h2 className="text-2xl font-bold mb-6 leading-tight">Ready to create workspace</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-blue-800">
            <span className="text-[10px] text-blue-300 uppercase">Project Ledger ID</span>
            <span className="text-xs font-mono">{data.projectId}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-blue-800">
            <span className="text-[10px] text-blue-300 uppercase">Creator Access</span>
            <span className="text-xs">Admin / Lead Arch</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-[10px] text-blue-300 uppercase">Estimated Nodes</span>
            <span className="text-xs font-bold">1,240 nodes</span>
          </div>
        </div>

        <div className="mt-8 bg-blue-800/50 rounded-xl p-4 flex gap-3">
          <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center shrink-0">
            <div className="w-4 h-4 text-blue-900">✨</div>
          </div>
          <p className="text-[10px] text-blue-100 leading-relaxed">
            The ledger will be initialized with AI-assisted structural validation enabled.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">Metadata Check</h3>
        <div className="space-y-3">
          {[
            'Timezone: UTC+8 (Singapore)',
            'Currency: SGD (Primary)',
            'Standard: ISO 19650-1'
          ].map((check, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <span className="text-xs text-gray-600">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
