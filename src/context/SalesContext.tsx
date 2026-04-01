"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface SalesContextType {
  nroVentas: string;
  loadingNro: boolean;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export const SalesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nroVentas, setNroVentas] = useState<string>("");
  const [loadingNro, setLoadingNro] = useState(true);

  useEffect(() => {
    const fetchNroVentas = async () => {
      try {
        const response = await fetch("/Home/ObtenerNroVentasFidel");
        const data = await response.json();
        setNroVentas(data || "");
      } catch (error) {
        console.error("Error obteniendo nro de ventas", error);
      } finally {
        setLoadingNro(false);
      }
    };

    fetchNroVentas();
  }, []);

  return (
    <SalesContext.Provider value={{ nroVentas, loadingNro }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => {
  const context = useContext(SalesContext);
  if (context === undefined) {
    throw new Error("useSales must be used within a SalesProvider");
  }
  return context;
};
