import React from 'react';
import SearchInput from './SearchInput'
import Image from 'next/image';
import { Bell, ChevronDown, ChevronLeft, History, LayoutGrid, Plus, Settings, User} from 'lucide-react'; // Import History icon

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-300 mt-[2px]">
      <div className="flex gap-5">
        {/* Recent Activities */}
        <button>
          <History className="w-6 h-6"/>
        </button>
        {/* Search */}
        <SearchInput/>
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon */}
        <div className="flex pr-2 space-x-2">
          <div className="flex border-r border-gey-300 space-x-2">
            <button className=" p-1 bg-blue-600 rounded-lg">
              <Plus className="text-slate-50 w-5 h-5"/>
            </button>
          </div>
          <div className="flex border-r border-gey-300 space-x-2">
            
            
            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <User className="text-slate-900 w-6 h-6"/>
            </button>

            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <Bell className="text-slate-900 w-6 h-6"/>
            </button>

            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <Settings className="text-slate-900 w-6 h-6"/>
            </button>
          </div>
        </div>
        {/* */}
        <div className="flex gap-3">
          <button className="flex items-center gap-1">
            <span>Garat</span>
            <ChevronDown className="w-4 h-4"/>
          </button>
          <button>
            <Image 
              src="/user.png"  
              alt="user" 
              width={32} 
              height={32} 
              className="rounded-full  w-10 h-10 border border-slate-900"
              priority/>
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900"/>
          </button>
        </div>
        {/* */}
      </div>
    </div>
  );
}
