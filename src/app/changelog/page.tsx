"use client";

import { useState, useEffect, useRef } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const tagStyles: Record<string, { gradient: string; label: string }> = {
  N: { gradient: "bg-gradient-to-t from-blue-400 via-blue-600 to-blue-400", label: "Nuevo" },
  M: { gradient: "bg-gradient-to-t from-green-300 via-green-500 to-green-300", label: "Mejora" },
  C: { gradient: "bg-gradient-to-t from-orange-300 via-orange-500 to-orange-300", label: "Corrección" },
};

const changelog = [
  {
    version: "2.4.0",
    date: "29 de Mayo, 2026",
    items: [
      { type: "N", text: "Generación automática de facturas electrónicas en formato AFIP" },
      { type: "N", text: "Módulo de cuentas corrientes con historial de movimientos" },
      { type: "M", text: "Velocidad de carga del listado de clientes mejorada en un 40%" },
      { type: "C", text: "Corrección del cálculo de IVA en facturas con descuentos aplicados" },
    ],
  },
  {
    version: "2.3.1",
    date: "10 de Mayo, 2026",
    items: [
      { type: "C", text: "Corrección del redondeo en totales de remitos con múltiples productos" },
      { type: "C", text: "Corrección del filtro de fechas en el reporte de ventas mensual" },
      { type: "M", text: "Mejor mensaje de error al intentar emitir una factura sin CAE" },
    ],
  },
  {
    version: "2.3.0",
    date: "18 de Abril, 2026",
    items: [
      { type: "N", text: "Exportación de reportes de ventas a Excel y PDF" },
      { type: "N", text: "Nuevo panel de control con resumen diario de facturación" },
      { type: "M", text: "Optimización del módulo de stock con alertas de bajo inventario" },
      { type: "C", text: "Corrección del doble envío de email al confirmar un pedido" },
    ],
  },
  {
    version: "2.2.0",
    date: "2 de Marzo, 2026",
    items: [
      { type: "N", text: "Integración con MercadoPago para cobros online desde el sistema" },
      { type: "N", text: "Alta masiva de productos mediante importación por archivo CSV" },
      { type: "M", text: "Diseño actualizado del formulario de nueva factura" },
      { type: "M", text: "El buscador de productos ahora incluye búsqueda por código de barras" },
      { type: "C", text: "Corrección del error al anular una nota de crédito ya contabilizada" },
    ],
  },
  {
    version: "2.1.0",
    date: "15 de Enero, 2026",
    items: [
      { type: "N", text: "Módulo de presupuestos con conversión directa a factura" },
      { type: "N", text: "Soporte para múltiples puntos de venta en una misma cuenta" },
      { type: "M", text: "El historial de pagos ahora muestra el medio de pago utilizado" },
      { type: "C", text: "Corrección del error 500 al generar remitos sin dirección de entrega" },
    ],
  },
  {
    version: "2.0.0",
    date: "1 de Diciembre, 2025",
    items: [
      { type: "N", text: "Rediseño completo de la interfaz del sistema de gestión" },
      { type: "N", text: "Nueva sección de reportes con gráficos de ventas por período" },
      { type: "N", text: "Gestión de usuarios con roles y permisos por módulo" },
      { type: "M", text: "Migración a facturación electrónica versión 3 según normativa AFIP" },
    ],
  },
  {
    version: "1.5.2",
    date: "10 de Octubre, 2025",
    items: [
      { type: "C", text: "Corrección del cálculo de percepciones en facturas tipo B" },
      { type: "C", text: "Corrección del error al imprimir facturas con caracteres especiales" },
      { type: "M", text: "Mejora en la sincronización del stock tras una venta confirmada" },
    ],
  },
  {
    version: "1.5.0",
    date: "22 de Agosto, 2025",
    items: [
      { type: "N", text: "Alta de clientes con validación automática de CUIT/CUIL" },
      { type: "N", text: "Envío automático de factura por email al cliente al momento de emitir" },
      { type: "M", text: "Tabla de productos con paginación y ordenamiento por columnas" },
      { type: "C", text: "Corrección del descuento por lista de precios en notas de débito" },
    ],
  },
];

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="text-gray-900 font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

function TagBadge({ type }: { type: string }) {
  const s = tagStyles[type];
  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold flex-shrink-0 text-white ${s.gradient}`}
    >
      {type}
    </span>
  );
}

export default function ChangelogPage() {
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterOpen) return;
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [filterOpen]);

  const toggleType = (type: string) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  };

  const filtered = changelog
    .map((version) => ({
      ...version,
      items: version.items.filter((item) => {
        const q = query.toLowerCase();
        const matchesQuery =
          !q ||
          item.text.toLowerCase().includes(q) ||
          tagStyles[item.type].label.toLowerCase().includes(q) ||
          version.date.toLowerCase().includes(q);
        const matchesType = activeTypes.size === 0 || activeTypes.has(item.type);
        return matchesQuery && matchesType;
      }),
    }))
    .filter((version) => version.items.length > 0);

  return (
    <div className="min-h-screen">
      {/* Legend */}
      <div className="flex justify-center gap-6 pt-8 pb-2">
        {Object.entries(tagStyles).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <TagBadge type={key} />
            <span className="text-sm font-medium text-gray-700">{val.label}</span>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mt-6 mb-8">
        <div className="relative inline-block">
          <h1
            className="text-7xl font-light tracking-tight text-gray-800"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Changelog
          </h1>
          <span className="absolute -top-2 -right-5 bg-[#fe3f1e] text-white text-xs font-bold size-6 rounded-full flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      {/* Search bar + filter */}
      <div className="max-w-xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar cambios..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          )}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className={`p-1 rounded-lg transition-colors ${
                filterOpen || activeTypes.size > 0
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeTypes.size > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-2 z-10 min-w-[160px]">
                {Object.entries(tagStyles).map(([key, val]) => {
                  const active = activeTypes.has(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggleType(key)}
                      className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm transition-colors ${
                        active
                          ? "bg-gray-100 text-gray-900 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <TagBadge type={key} />
                      {val.label}
                    </button>
                  );
                })}
                {activeTypes.size > 0 && (
                  <button
                    onClick={() => { setActiveTypes(new Set()); setFilterOpen(false); }}
                    className="w-full mt-1 pt-1 border-t border-gray-100 text-xs text-gray-400 hover:text-gray-600 py-1"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Versions */}
      <div className="max-w-xl mx-auto px-4 space-y-0">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-10">
            No se encontraron resultados para &quot;{query}&quot;
          </p>
        ) : (
          filtered.map((version, idx) => (
            <div key={version.version}>
              {idx > 0 && <div className="border-t border-gray-300 my-10" />}

              {/* Version header */}
              <div className="text-start mb-5">
                <span className="font-bold text-gray-800">{version.date}</span>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {version.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-4 py-3 rounded-[18px]"
                  >
                    <TagBadge type={item.type} />
                    <span className="text-gray-700 text-sm"><HighlightedText text={item.text} query={query} /></span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
