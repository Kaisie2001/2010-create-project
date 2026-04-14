import { CheckCircle2, Circle } from 'lucide-react';
import { Step } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  currentStep: Step;
}

const STEPS = [
  { id: 1, title: 'Project Basics', subtitle: 'STEP 1 • COMPLETE' },
  { id: 2, title: 'Partition System', subtitle: 'STEP 2 • IN PROGRESS' },
  { id: 3, title: 'Data Input', subtitle: 'STEP 3 • LOCKED' },
  { id: 4, title: 'Review & Generate', subtitle: 'STEP 4 • LOCKED' },
];

export default function Sidebar({ currentStep }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#F8FAFC] border-r border-gray-200 p-6 flex flex-col gap-4">
      {STEPS.map((step) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;
        const isLocked = currentStep < step.id;

        return (
          <div
            key={step.id}
            className={cn(
              "p-4 rounded-xl border transition-all duration-200",
              isActive ? "bg-white border-blue-200 shadow-sm ring-1 ring-blue-100" : "border-transparent",
              isCompleted ? "bg-green-50/50" : ""
            )}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {isCompleted ? (
                  <CheckCircle2 size={20} className="text-green-600" />
                ) : isActive ? (
                  <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                ) : (
                  <Circle size={20} className="text-gray-300" />
                )}
              </div>
              <div>
                <h3 className={cn(
                  "text-sm font-semibold",
                  isActive ? "text-blue-900" : isCompleted ? "text-green-900" : "text-gray-500"
                )}>
                  {step.title}
                </h3>
                <p className={cn(
                  "text-[10px] font-bold tracking-wider mt-0.5",
                  isActive ? "text-blue-500" : isCompleted ? "text-green-500" : "text-gray-400"
                )}>
                  {step.id === currentStep ? (step.id === 4 ? 'STEP 4 • FINAL' : `STEP ${step.id} • IN PROGRESS`) : 
                   step.id < currentStep ? `STEP ${step.id} • COMPLETE` : `STEP ${step.id} • LOCKED`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
