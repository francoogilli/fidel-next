import { SectionBadge } from "./section-badge";
import { CheckItem } from "./check-item";
import {
  Wrench,
  FileSpreadsheet,
  Package,
  Users,
  Bell,
  Mail,
  Image,
} from "lucide-react";

export default function FidelFeaturesSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionBadge
            className="flex justify-center items-center mx-auto gap-2 w-fit border border-[#e9e9e9]"
            tailwindColor="bg-green-100"
          >
            {" "}
            <Wrench className="size-4 text-zinc-700" />
            Fidel para Ferreterías
          </SectionBadge>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance"
            style={{ lineHeight: "1.25" }}
          >
            El sistema de gestión pensado para el día a día de tu ferretería
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            ¿Tenés una ferretería y sentís que perdés tiempo actualizando
            precios, controlando stock o enviando facturas? Fidel simplifica tu
            trabajo con herramientas diseñadas específicamente para el rubro
            ferretero, ayudándote a vender más y ordenar tu negocio.
          </p>
          {/* Placeholder imagen hero */}
          <div className="mx-auto mt-12 w-full max-w-4xl aspect-[16/9] bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Imagen: Hero</span>
          </div>
        </div>
      </section>

      {/* Actualización masiva de precios - CON IMAGEN DERECHA */}
      <section className="bg-background py-16 md:pt-14 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <FileSpreadsheet className="size-4" />
                Actualización masiva de precios
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Actualización masiva de precios desde Excel
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ¿Tus proveedores te envían listas de precios en Excel? Con
                Fidel, solo importás el archivo y el sistema hace el resto.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>
                  Actualiza automáticamente los precios según el código de
                  proveedor
                </CheckItem>
                <CheckItem>Evita errores manuales</CheckItem>
                <CheckItem>Te ahorra horas de carga</CheckItem>
              </ul>
              <p className="mt-6 text-foreground font-medium">
                👉 En pocos segundos, tus precios quedan listos para vender.
              </p>
            </div>

            {/* Placeholder para imagen */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Imagen: Excel importación
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compra por bulto, venta por unidad - SIN IMAGEN */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <Package className="size-4" />
                Gestión flexible
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Compra por bulto, venta por unidad
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ¿Comprás por bulto pero vendés por unidad? Fidel te permite
                gestionar ambos formatos sin complicaciones.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <CheckItem>Configurar la cantidad por bulto</CheckItem>
              <CheckItem>Calcular automáticamente el precio unitario</CheckItem>
              <CheckItem>Gestionar el stock sin complicaciones</CheckItem>
              <li className="mt-2 text-foreground font-medium">
                👉 Vos vendés tranquilo, el sistema hace los cálculos por vos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proveedores alternativos - CON IMAGEN IZQUIERDA */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Placeholder para imagen */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Imagen: Comparación proveedores
                </span>
              </div>
            </div>

            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <Users className="size-4" />
                Múltiples proveedores
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Proveedores alternativos por producto
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ¿Comprás el mismo producto a distintos proveedores? Con Fidel
                podés gestionarlos todos desde un solo lugar.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>
                  Registrar múltiples proveedores para un mismo artículo
                </CheckItem>
                <CheckItem>Ver el historial de compras</CheckItem>
                <CheckItem>Comparar precios fácilmente</CheckItem>
              </ul>
              <p className="mt-6 text-foreground font-medium">
                👉 Tomá mejores decisiones y comprá siempre al mejor proveedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Control de stock - CON IMAGEN DERECHA */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <Bell className="size-4" />
                Control inteligente
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Control de stock mínimo y máximo
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Evitá quedarte sin mercadería o sobrestockear. Fidel te mantiene
                siempre en el punto justo.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>
                  Definir stock mínimo y máximo por producto
                </CheckItem>
                <CheckItem>
                  Recibir alertas automáticas cuando el stock baja
                </CheckItem>
                <CheckItem>Generar órdenes de compra de forma rápida</CheckItem>
              </ul>
              <p className="mt-6 text-foreground font-medium">
                👉 Tené siempre lo justo, sin sorpresas.
              </p>
            </div>

            {/* Placeholder para imagen */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Imagen: Dashboard stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Envío automático de facturas - SIN IMAGEN */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <Mail className="size-4" />
                Facturación ágil
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Envío automático de facturas
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dejá de perder tiempo enviando facturas una por una. Con Fidel,
                todo es más rápido.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <CheckItem>Enviar facturas por mail o WhatsApp</CheckItem>
              <CheckItem>Hacerlo en solo un par de clics</CheckItem>
              <CheckItem>Mantener todo registrado en el sistema</CheckItem>
              <li className="mt-2 text-foreground font-medium">
                👉 Más agilidad, menos tareas repetitivas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Listas de precios con imágenes - CON IMAGEN IZQUIERDA */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Placeholder para imagen */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Imagen: Lista con fotos productos
                </span>
              </div>
            </div>

            <div>
              <SectionBadge
                tailwindColor="bg-lime-100"
                className="flex items-center gap-2 w-fit border border-lime-200"
              >
                <Image className="size-4" />
                Catálogos visuales
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Listas de precios con imágenes
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ideal para ferreterías que venden por mostrador o a clientes
                habituales.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>Crear listas de precios personalizadas</CheckItem>
                <CheckItem>Incluir imágenes de los productos</CheckItem>
                <CheckItem>Imprimirlas o enviarlas digitalmente</CheckItem>
              </ul>
              <p className="mt-6 text-foreground font-medium">
                👉 Tus clientes ven exactamente lo que están comprando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionBadge className="flex justify-center items-center mx-auto gap-2 w-fit">
            <Wrench className="size-4" />
            Fidel, el aliado de tu ferretería
          </SectionBadge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Fidel no es solo un sistema de gestión
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Es una herramienta pensada para simplificar tu trabajo, ordenar tu
            stock y ayudarte a vender mejor.
          </p>
        </div>
      </section>
    </>
  );
}
