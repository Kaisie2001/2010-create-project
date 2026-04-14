import { Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tight">TraceWall-HK</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-black text-sm font-medium">Home</a>
          <a href="#" className="text-gray-500 hover:text-black text-sm font-medium">Cases</a>
          <a href="#" className="text-blue-600 text-sm font-medium border-b-2 border-blue-600 py-5">New Project</a>
          <a href="#" className="text-gray-500 hover:text-black text-sm font-medium">Workspace</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-black transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-black transition-colors">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white overflow-hidden">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
