import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import { CartProvider } from './context/CartContext.jsx';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
            <ProductGrid />
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
