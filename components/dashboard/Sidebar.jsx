import { BaggageClaim, BarChart4, Cable, ChevronLeft, File, Home, LucideShoppingCart, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="w-56 min-h-screen bg-slate-900 text-slate-50 justify-between">
        
        {/* Top Part */}
        
        <div className="flex flex-col">
          {/* Logo */}
          <Link className="bg-slate-950 flex space-x-2 items-center px-8 py-3"  href="#">
            <ShoppingCart/>
            <span className="text-2xl font-semibold">Inventory</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-col gap-8 p-3 ">
            <Link className="flex items-center space-x-2  bg-blue-600  text-slate-50 p-1 rounded-md " href="">
              <Home className="w-4 h-4"/>
                <span>Home</span>
            </Link>

            <button className="flex items-center space-x-2 p-1 cursor-pointer" href="#">
              <BaggageClaim className="w-4 h-4"/>
                <span>Inventory</span>
            </button>

            <button className="flex items-center space-x-2 p-1 cursor-pointer" href="#">
              <ShoppingBasket className="w-4 h-4"/>
                <span>Sales</span>
            </button>

            <button className="flex items-center space-x-2 p-1 cursor-pointer" href="#">
              <ShoppingBag className="w-4 h-4"/>
                <span>Purchases</span>
            </button>

            <Link className="flex items-center space-x-2 p-1" href="#">
              <Cable className="w-4 h-4"/>
                <span>Integrations</span>
            </Link>

            <Link className="flex items-center space-x-2 p-1" href="#">
              <BarChart4 className="w-4 h-4"/>
                <span>Reports</span>
            </Link>

            <Link className="flex items-center space-x-2 p-1" href="#">
              <File className="w-4 h-4"/>
                <span>Documents</span>
            </Link>
          </nav>
        </div>
        



        {/* Bottom Part */}
        <div className="flex flex-col display-bottom">
          <button className="bg-slate-950 flex space-x-2 items-center px-8 py-3 justify-center absolute bottom-0 left-0 w-56">
            <ChevronLeft/>
          </button>
        </div>


        {/* Subscription Card */}
        {/* Footer Icon */}


      </div>
    </div>
  )
}
