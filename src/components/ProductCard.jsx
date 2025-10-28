import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 flex items-center justify-center">
        <span className="text-5xl">{product.emoji}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold">${product.price.toFixed(2)}</div>
          <button
            onClick={() => addItem(product)}
            className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
