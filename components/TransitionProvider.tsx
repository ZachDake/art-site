"use client";

import { createContext, useContext, useState } from "react";

const TransitionContext = createContext(null);

export function useTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <TransitionContext.Provider value={{ loading, setLoading }}>
      {children}
    </TransitionContext.Provider>
  );
}