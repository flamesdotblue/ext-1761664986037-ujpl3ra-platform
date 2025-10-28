import React, { createContext, useContext, useMemo, useState } from 'react';

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const addItem = (p) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === p.id);
      if (existing) {
        return prev.map((it) => (it.id === p.id ? { ...it, qty: it.qty + 1 } : it));
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 }];
    });
    setOpen(true);
  };

  const inc = (id) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  const dec = (id) => setItems((prev) => prev.flatMap((it) => (it.id === id ? (it.qty > 1 ? [{ ...it, qty: it.qty - 1 }] : []) : [it])));
  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const total = useMemo(() => items.reduce((acc, it) => acc + it.price * it.qty, 0), [items]);

  const value = { isOpen, openCart, closeCart, items, addItem, inc, dec, remove, total };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
