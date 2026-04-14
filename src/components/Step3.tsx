import { Info, Database, Factory, FileText, Upload, Plus, UserPlus } from 'lucide-react';
import { ProjectData } from '../types';
import { cn } from '../lib/utils';

interface Step3Props {
  data: ProjectData;
  updateData: (newData: Partial<ProjectData>) => void;
}

export default function Step3({ data, updateData }: Step3Props) {
  const updateInput = (field: string, value: any) => {
    updateData({
      dataInput: {
        ...data.dataInput,
        [field]: value
      }
    });
  };

  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Data Inputs</h1>
        <p className="text-gray-500 mb-10">Define the material sources and evidence parameters for the ledger calculations. Accurate data entry ensures architectural compliance.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-10 flex gap-4">
          <Info className="text-blue-500 shrink-0" size={24} />
          <div>
            <h4 className="text-sm font-bold text-blue-900 mb-1">Guidance</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              This step records what inputs are currently available. Missing details can be completed later inside the workspace.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            Data Source Type
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { id: 'HK_DEFAULT', title: 'HK default library', desc: 'Verified standard architectural library for regional compliance.', icon: Database },
              { id: 'SUPPLIER', title: 'Supplier data', desc: 'Custom metrics provided directly by building material manufacturers.', icon: Factory },
              { id: 'EPD', title: 'EPD Documentation', desc: 'Environmental Product Declarations for high-fidelity life cycle assessment.', icon: FileText },
            ].map((source) => (
              <button
                key={source.id}
                onClick={() => updateInput('sourceType', source.id)}
                className={cn(
                  "text-left p-6 rounded-2xl border transition-all duration-200 relative group",
                  data.dataInput.sourceType === source.id 
                    ? "bg-white border-blue-600 shadow-md ring-1 ring-blue-600" 
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"
                )}
              >
                <div className="absolute top-4 right-4">
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                    data.dataInput.sourceType === source.id ? "border-blue-600 bg-blue-600" : "border-gray-300"
                  )}>
                    {data.dataInput.sourceType === source.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
                <source.icon className={cn(
                  "mb-4 transition-colors",
                  data.dataInput.sourceType === source.id ? "text-blue-600" : "text-gray-400 group-hover:text-blue-400"
                )} size={24} />
                <h3 className="font-bold text-gray-900 mb-2">{source.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{source.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            Input Availability
          </h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Material Breakdown</label>
                <select
                  value={data.dataInput.materialBreakdown}
                  onChange={(e) => updateInput('materialBreakdown', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>Detailed breakdown available</option>
                  <option>Summary only</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">Evidence Level</label>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  {['L1: Low', 'L2: Med', 'L3: High'].map((level) => {
                    const id = level.split(':')[0] as 'L1' | 'L2' | 'L3';
                    return (
                      <button
                        key={id}
                        onClick={() => updateInput('evidenceLevel', id)}
                        className={cn(
                          "flex-1 py-2 text-xs font-bold rounded-md transition-all",
                          data.dataInput.evidenceLevel === id 
                            ? "bg-blue-900 text-white shadow-sm" 
                            : "text-gray-500 hover:text-gray-700"
                        )}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">EOL Pathway Known</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateInput('eolPathwayKnown', !data.dataInput.eolPathwayKnown)}
                  className={cn(
                    "w-14 h-8 rounded-full relative transition-colors duration-200",
                    data.dataInput.eolPathwayKnown ? "bg-green-600" : "bg-gray-300"
                  )}
                >
                  <div className={cn(
                    "absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-200",
                    data.dataInput.eolPathwayKnown ? "left-7" : "left-1"
                  )} />
                </button>
                <span className="text-sm font-bold text-gray-900">Verified End-of-Life track</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-4 leading-relaxed italic">
                Defining the EOL pathway increases the accuracy of the circularity ledger by approximately 14%.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            Supporting Documentation
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Upload EPD', icon: Upload },
              { title: 'Add Datasheet', icon: Plus },
              { title: 'Supplier Invite', icon: UserPlus },
            ].map((action, i) => (
              <button key={i} className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-blue-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:border-blue-200 group-hover:text-blue-600 transition-all">
                  <action.icon size={20} className="text-gray-400 group-hover:text-blue-600" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
