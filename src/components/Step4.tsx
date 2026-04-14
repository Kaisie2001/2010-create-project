import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { ProjectData } from '../types';
import { cn } from '../lib/utils';

interface Step4Props {
  data: ProjectData;
}

export default function Step4({ data }: Step4Props) {
  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Final Step</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Review & Create</h1>
        <p className="text-gray-500 mb-10">Confirm your architectural specifications and data integrity before initializing the project ledger.</p>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8 relative">
          <button className="absolute top-8 right-8 text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline">Edit Details</button>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <div className="w-5 h-5 border-2 border-current" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Project Summary</h2>
          </div>
          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Project Name</p>
              <p className="text-sm font-semibold text-gray-900">{data.projectName}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Building Type</p>
              <p className="text-sm font-semibold text-gray-900">Commercial Grade A Office</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">District/Location</p>
              <p className="text-sm font-semibold text-gray-900">{data.district}, Sector 4</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Total Floor Area</p>
              <p className="text-sm font-semibold text-gray-900">{Number(data.partitionArea).toLocaleString()} m²</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8 relative">
          <button className="absolute top-8 right-8 text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline">Edit Specs</button>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <div className="w-5 h-5 border-2 border-current rotate-45" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Partition System</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-2">Primary Type</p>
              <p className="text-sm font-bold text-gray-900 mb-1">Drywall Partition</p>
              <p className="text-[10px] text-gray-500">Multi-layer acoustic</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-2">Stud Frame</p>
              <p className="text-sm font-bold text-gray-900 mb-1">{data.partitionSystem.studFrameType}</p>
              <p className="text-[10px] text-gray-500">Galvanized Steel</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-2">Fire Rating</p>
              <p className="text-sm font-bold text-gray-900 mb-1">FRR {data.partitionSystem.fireRating}/{data.partitionSystem.fireRating}/{data.partitionSystem.fireRating}</p>
              <p className="text-[10px] text-gray-500">Certified Compliant</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs font-bold text-gray-700">Head Track Connection: {data.partitionSystem.connectionType}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs font-bold text-gray-700">Cladding: {data.partitionSystem.layersPerSide}× 13mm Plasterboard</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <div className="w-5 h-5 border-2 border-current flex items-center justify-center">
                  <div className="w-3 h-1 bg-current" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Data Readiness</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Project boundary', status: 'VERIFIED', color: 'bg-green-100 text-green-700' },
                { label: 'System definition', status: 'DEFINED', color: 'bg-green-100 text-green-700' },
                { label: 'Data inputs', status: 'PARTIAL', color: 'bg-orange-100 text-orange-700' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", item.status === 'PARTIAL' ? 'bg-orange-400' : 'bg-green-500')} />
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                  </div>
                  <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded uppercase", item.color)}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl border border-red-100 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="text-red-500" size={24} />
              <h2 className="text-xl font-bold text-red-900">Missing Items</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Info size={16} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-800 leading-relaxed">
                  Bill of Quantities (BoQ) sub-item breakdown is currently estimated from master plan.
                </p>
              </div>
              <div className="flex gap-3">
                <Info size={16} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-800 leading-relaxed">
                  Geotechnical confirmation for floor slab loading is pending final report upload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
