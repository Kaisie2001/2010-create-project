import { Info } from 'lucide-react';
import { ProjectData } from '../types';

interface Step2Props {
  data: ProjectData;
  updateData: (newData: Partial<ProjectData>) => void;
}

export default function Step2({ data, updateData }: Step2Props) {
  const updatePartition = (field: string, value: any) => {
    updateData({
      partitionSystem: {
        ...data.partitionSystem,
        [field]: value
      }
    });
  };

  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Partition System Configuration</h1>
        <p className="text-gray-500 mb-10">Define the structural core of your partition. Assembly logic ensures compliance with fire and acoustic standards.</p>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-6">Core Specification</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">partition_system_type</label>
                <select
                  value={data.partitionSystem.type}
                  onChange={(e) => updatePartition('type', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>Internal Non-Loadbearing</option>
                  <option>External Loadbearing</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">system_format</label>
                <select
                  value={data.partitionSystem.format}
                  onChange={(e) => updatePartition('format', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>Single Frame</option>
                  <option>Double Frame</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="absolute top-4 left-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Assembly Preview</h2>
            <div className="flex items-center gap-2 h-32">
              <div className="flex gap-1 h-full">
                {Array.from({ length: data.partitionSystem.layersPerSide }).map((_, i) => (
                  <div key={i} className="w-1.5 h-full bg-blue-500 rounded-full" />
                ))}
              </div>
              <div className="w-12 h-12 border-2 border-slate-700 border-dashed flex items-center justify-center mx-2">
                <div className="text-slate-700 text-2xl font-bold">#</div>
              </div>
              <div className="flex gap-1 h-full">
                {Array.from({ length: data.partitionSystem.layersPerSide }).map((_, i) => (
                  <div key={i} className="w-1.5 h-full bg-blue-500 rounded-full" />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="bg-green-500/20 text-green-400 text-[8px] font-bold px-2 py-0.5 rounded uppercase border border-green-500/30">60 MIN FIRE</span>
              <span className="bg-blue-500/20 text-blue-400 text-[8px] font-bold px-2 py-0.5 rounded uppercase border border-blue-500/30">54dB RW</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 border-2 border-blue-600 rotate-45" />
              <h2 className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Board Layers</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">board_type</label>
                <select
                  value={data.partitionSystem.boardType}
                  onChange={(e) => updatePartition('boardType', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>Type F Fire Rated Plasterboard</option>
                  <option>Standard Plasterboard</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">board_layers_per_side</label>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{data.partitionSystem.layersPerSide}</span>
                  <div className="flex gap-2">
                    <button onClick={() => updatePartition('layersPerSide', Math.max(1, data.partitionSystem.layersPerSide - 1))} className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">-</button>
                    <button onClick={() => updatePartition('layersPerSide', data.partitionSystem.layersPerSide + 1)} className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 border-2 border-blue-600 flex items-center justify-center">
                <div className="w-1 h-3 bg-blue-600" />
              </div>
              <h2 className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Structural Frame</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">stud_frame_type</label>
                <select
                  value={data.partitionSystem.studFrameType}
                  onChange={(e) => updatePartition('studFrameType', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>70mm C-Stud Metal</option>
                  <option>90mm C-Stud Metal</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">connection_type</label>
                <select
                  value={data.partitionSystem.connectionType}
                  onChange={(e) => updatePartition('connectionType', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option>Deflection Head</option>
                  <option>Fixed Head</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">fire_rating_min</label>
                <input
                  type="number"
                  value={data.partitionSystem.fireRating}
                  onChange={(e) => updatePartition('fireRating', Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">acoustic_rating_rw_db</label>
                <input
                  type="number"
                  value={data.partitionSystem.acousticRating}
                  onChange={(e) => updatePartition('acousticRating', Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex gap-4">
          <Info className="text-orange-400 shrink-0" size={24} />
          <div>
            <h4 className="text-sm font-bold text-orange-900 mb-1">System Integrity Check</h4>
            <p className="text-xs text-orange-800 leading-relaxed">
              A valid passport requires assembly logic, not just product names. Changing the stud depth or board density may impact the system's fire rating. Ensure your selections align with regional building codes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
