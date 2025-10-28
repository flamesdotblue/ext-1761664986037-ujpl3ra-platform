import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { openCart, items } = useCart();
  const count = items.reduce((acc, it) => acc + it.qty, 0);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
          <span className="font-bold tracking-tight">Bluemart</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Home</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#products" className="hover:text-slate-900">Products</a>
          <a href="#support" className="hover:text-slate-900">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md text-sm border border-slate-300 hover:bg-slate-50">Sign in</button>
          <button onClick={openCart} className="relative px-3 py-1.5 rounded-md text-sm bg-slate-900 text-white hover:bg-slate-800">
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-2 text-xs rounded-full bg-rose-500 text-white px-1.5 py-0.5">{count}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
