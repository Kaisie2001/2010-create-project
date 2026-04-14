import { Info, Ruler } from 'lucide-react';
import { ProjectData } from '../types';

interface Step1Props {
  data: ProjectData;
  updateData: (newData: Partial<ProjectData>) => void;
}

export default function Step1({ data, updateData }: Step1Props) {
  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Basics</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-10 flex gap-4">
          <Info className="text-blue-500 shrink-0" size={24} />
          <p className="text-blue-900 text-sm leading-relaxed">
            This step defines the project boundary and context. Accurate data here ensures the ledger balances correctly across physical partitions.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Project Name</label>
              <input
                type="text"
                value={data.projectName}
                onChange={(e) => updateData({ projectName: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Project ID</label>
              <div className="relative">
                <input
                  type="text"
                  value={data.projectId}
                  onChange={(e) => updateData({ projectId: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 border-dashed rounded-lg px-10 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <div className="w-4 h-4 border-2 border-current rotate-45" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Client / Tenant Name</label>
              <input
                type="text"
                placeholder="e.g. Globex Corp"
                value={data.clientName}
                onChange={(e) => updateData({ clientName: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Building Name</label>
              <input
                type="text"
                value={data.buildingName}
                onChange={(e) => updateData({ buildingName: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">District</label>
              <select
                value={data.district}
                onChange={(e) => updateData({ district: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
              >
                <option>Central Business District</option>
                <option>Kowloon Bay</option>
                <option>Quarry Bay</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Floor / Unit</label>
              <input
                type="text"
                value={data.floorUnit}
                onChange={(e) => updateData({ floorUnit: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Project Type</label>
              <select
                value={data.projectType}
                onChange={(e) => updateData({ projectType: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
              >
                <option>New Fit-out</option>
                <option>Renovation</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Project Stage</label>
              <select
                value={data.projectStage}
                onChange={(e) => updateData({ projectStage: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
              >
                <option>Concept Design</option>
                <option>Detailed Design</option>
                <option>Construction</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Partition Area (m²)</label>
              <div className="relative">
                <input
                  type="number"
                  value={data.partitionArea}
                  onChange={(e) => updateData({ partitionArea: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
