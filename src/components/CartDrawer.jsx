import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function CartDrawer() {
  const { isOpen, closeCart, items, inc, dec, remove, total } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white border-l border-slate-200 shadow-xl transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h3 className="font-semibold">Your Cart</h3>
          <button onClick={closeCart} className="text-slate-600 hover:text-slate-900">Close</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
          {items.length === 0 && (
            <p className="text-slate-600">Your cart is empty.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 items-center border border-slate-200 rounded-lg p-3">
              <div className="h-12 w-12 flex items-center justify-center rounded bg-slate-100 text-2xl">{it.emoji}</div>
              <div className="flex-1">
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-slate-600">${it.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => dec(it.id)} className="h-7 w-7 rounded border">-</button>
                <span className="w-6 text-center">{it.qty}</span>
                <button onClick={() => inc(it.id)} className="h-7 w-7 rounded border">+</button>
              </div>
              <button onClick={() => remove(it.id)} className="text-rose-600 hover:text-rose-700">Remove</button>
            </div>
          ))}
        </div>

        <div className="h-16 border-t flex items-center justify-between px-4">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <div className="px-4 pb-6">
          <button className="w-full py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50" disabled={items.length===0}>
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
