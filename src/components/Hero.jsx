import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[78vh] lg:min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 z-10 bg-white/40 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Modern • Minimal • Fintech
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Shop the future of digital commerce
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Cards, accessories, and tools for a cashless world. Designed with simplicity and crafted for performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">Browse products</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-slate-300 bg-white/80 hover:bg-white">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
