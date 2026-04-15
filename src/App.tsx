/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SummaryPanel from './components/SummaryPanel';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { ProjectData, INITIAL_DATA, Step } from './types';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [data, setData] = useState<ProjectData>(INITIAL_DATA);

  const updateData = (newData: Partial<ProjectData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1 data={data} updateData={updateData} />;
      case 2: return <Step2 data={data} updateData={updateData} />;
      case 3: return <Step3 data={data} updateData={updateData} />;
      case 4: return <Step4 data={data} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar currentStep={currentStep} />
        
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex overflow-hidden"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Footer Actions */}
          <div className="h-20 border-t border-gray-200 bg-white px-10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-black transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              )}
              <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-black bg-gray-100 rounded-lg transition-all">
                <Save size={18} />
                Save Draft
              </button>
            </div>

            <button
              /*onClick={nextStep}*/
              onClick={() => {
    if (currentStep === 4) {
      window.location.href = "https://app.netlify.com/projects/project-case/overview";
    } else {
      nextStep();
    }
  }}
              className="flex items-center gap-2 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold shadow-lg shadow-blue-900/10 transition-all active:scale-95"
            >
              {currentStep === 4 ? (
                'Create Project'
              ) : (
                <>
                  Next: {currentStep === 1 ? 'Partition System' : currentStep === 2 ? 'Data Inputs' : 'Review & Generate'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </main>

        <SummaryPanel step={currentStep} data={data} />
      </div>
    </div>
  );
}

