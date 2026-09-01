import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  pharmacy: string;
  description: string;
  image: string;
  boxImage?: string;
  capsuleImage?: string;
  categoryId?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface User {
  name: string;
  email: string;
  address: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  orderStatus: string;
  setOrderStatus: (status: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  prescriptionUploaded: boolean;
  setPrescriptionUploaded: (uploaded: boolean) => void;
  customProducts: Product[];
  addCustomProduct: (product: Product) => void;
  removeCustomProduct: (productId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState('pending');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  const addCustomProduct = (product: Product) => {
    setCustomProducts((prev) => [...prev, product]);
  };

  const removeCustomProduct = (productId: string) => {
    setCustomProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        orderStatus,
        setOrderStatus,
        theme,
        setTheme,
        prescriptionUploaded,
        setPrescriptionUploaded,
        customProducts,
        addCustomProduct,
        removeCustomProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};