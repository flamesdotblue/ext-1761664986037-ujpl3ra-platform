import React from 'react';
import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
