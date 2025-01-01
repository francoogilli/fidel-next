import Apple from "../icons/apple";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import PlayStore from "../icons/playstore";
import Whatsapp from "../icons/whatsapp";
import WorldIcon from "../icons/world";
import CalendarIcon from "../icons/calendar";
import FileImportIcon from "../icons/file-import";
import ScreenIcon from "../icons/screen";
import CloudIcon from "../icons/cloud";
import HelpIcon from "../icons/help";
import HomeIcon from "../icons/home";
import MailIcon from "../icons/email";
import FunctionalitiesIcon from "../icons/functionalities";
import CreditCardIcon from "../icons/creditCard";

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
  icon: React.ComponentType<any>;
}

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "¿Desde dónde se puede usar Fidel?",
    content:
      "Fidel es una plataforma accesible desde cualquier lugar con conexión a internet. Podes usarla en tu computadora, tablet o smartphone, lo que te permite gestionar tus procesos de negocio y acceder a herramientas analíticas estés donde estés.",
    icon: WorldIcon,
  },
  {
    id: 2,
    title: "¿Con qué frecuencia se actualiza Fidel?",
    content:
      "En Fidel, actualizamos y mejoramos nuestro servicio cada 15 días. Priorizamos los requerimientos de nuestros clientes para garantizar que cada actualización aborde sus necesidades y mejore la plataforma de acuerdo con sus expectativas.",
    icon: CalendarIcon,
  },
  {
    id: 3,
    title: "¿Puedo importar mi información al sistema?",
    content:
      "Sí, puedes importar tu información a Fidel. Con esta funcionalidad, podes cargar de manera simple y rápida tus clientes, proveedores y productos. Para comenzar, consulta nuestra guía de importación o contacta con nuestro equipo de soporte.",
    icon: FileImportIcon,
  },
  {
    id: 4,
    title: "¿Necesito instalar algo para utilizar Fidel?",
    content:
      "No, Fidel es una plataforma que funciona en la nube, por lo que no necesitas instalar ningún software adicional en tu computadora. Solo necesitas un navegador web y una conexión a Internet para acceder y utilizar el sistema.",
    icon: ScreenIcon,
  },
  {
    id: 5,
    title: "¿Se realiza una copia de seguridad de mi información?",
    content:
      "Sí, se realizan copias de seguridad periódicas de tu información para garantizar su seguridad y disponibilidad. Esto asegura que tus datos estén protegidos y puedan ser recuperados en caso de cualquier imprevisto.",
    icon: CloudIcon,
  },
  {
    id: 6,
    title: "¿Qué hago si necesito ayuda?",
    content:
      "Si necesitas ayuda, nuestro equipo de soporte está disponible para ayudarte. Podes contactarnos a través de WhatsApp, correo electrónico o llamada, y estaremos disponibles para resolver cualquier duda o inconveniente que tengas al usar Fidel.",
    icon: HelpIcon,
  },
];

interface Benefit {
  text: string;
  active: boolean;
  tooltipInfo: string;
  displayText?: string;
}

interface PricingCardProps {
  name: string;
  popular?: boolean;
  iconPro?:boolean;
  price: number;
  bestOption: string;
  benefits: Benefit[];
}

export const pricingComparison: PricingCardProps[] = [
  {
    name: "Básico",
    price: 10500,
    bestOption: "monotributistas",
    benefits: [
      {
        text: "Asesoría",
        active: true,
        tooltipInfo: "Tipo de asesoría",
        displayText: "prioritaria",
      },
      {
        text: "Usuarios",
        active: true,
        tooltipInfo: "Usuarios disponibles. Sin contar vendedores",
        displayText: "1",
      },
      {
        text: "Vendedores",
        active: false,
        tooltipInfo: "Vendedores para pedidos en app móvil",
        displayText: "-",
      },
      {
        text: "Gestión",
        active: false,
        tooltipInfo: "Compras, Proveedores y Estadísticas",
      },
      {
        text: "Portal de clientes",
        active: false,
        tooltipInfo: "Acceso a ventas y pagos",
      },
      {
        text: "Reportes Contables",
        active: false,
        tooltipInfo: "IVA, IIBB e Imp. Municipal",
      },
      {
        text: "App Mobile",
        active: false,
        tooltipInfo: "Acceso a la aplicacion mobile.",
      },
      {
        text: "Tienda Nube",
        active: false,
        tooltipInfo: "Integración con Tienda Nube.",
      },
      {
        text: "Múltiples CUITs",
        active: false,
        tooltipInfo: "Facturar utilizando múltiples CUITs.",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "Gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Inicial",
    price: 13500,
    bestOption: "negocios locales",
    benefits: [
      {
        text: "Asesoría",
        active: true,
        tooltipInfo: "Asesoría rápida y eficaz.",
        displayText: "prioritaria",
      },
      {
        text: "Usuarios",
        active: true,
        tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores",
        displayText: "hasta 3",
      },
      {
        text: "Vendedores",
        active: false,
        tooltipInfo: "No incluye soporte para múltiples vendedores.",
        displayText: "-",
      },
      {
        text: "Gestión",
        active: true,
        tooltipInfo: "Compras, Proveedores y Estadísticas",
      },
      {
        text: "Portal de clientes",
        active: true,
        tooltipInfo: "Acceso a ventas y pagos",
      },
      {
        text: "Reportes Contables",
        active: true,
        tooltipInfo: "IVA, IIBB e Imp. Municipal",
      },
      {
        text: "App Mobile",
        active: true,
        tooltipInfo: "No incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "Multicuit",
        active: false,
        tooltipInfo: "No permite facturar utilizando múltiples CUITs.",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "No incluye gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Intermedio",
    price: 18500,
    bestOption: "pequeñas/medianas empresas",
    benefits: [
      {
        text: "Asesoría prioritaria",
        active: true,
        tooltipInfo: "Asesoría rápida y eficaz.",
        displayText: "prioritaria",
      },
      {
        text: "Usuarios",
        active: true,
        tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores",
        displayText: "hasta 6",
      },
      {
        text: "Vendedores",
        active: true,
        tooltipInfo: "Soporte para hasta 3 vendedores.",
        displayText: "hasta 3",
      },
      {
        text: "Gestión",
        active: true,
        tooltipInfo: "Compras, Proveedores y Estadísticas",
      },
      {
        text: "Portal de clientes",
        active: true,
        tooltipInfo: "Acceso a ventas y pagos",
      },
      {
        text: "Reportes Contables",
        active: true,
        tooltipInfo: "IVA, IIBB e Imp. Municipal",
      },
      {
        text: "App Mobile",
        active: true,
        tooltipInfo: "Incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "Multicuit",
        active: true,
        tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes.",
        displayText: "hasta 2",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "No incluye gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Avanzado",
    price: 23000,
    bestOption: "grandes empresas",
    benefits: [
      {
        text: "Asesoría personalizada",
        active: true,
        tooltipInfo: "Asesoría personalizada y detallada.",
        displayText: "personalizada",
      },
      {
        text: "Usuarios",
        active: true,
        tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores",
        displayText: "hasta 12 *",
      },
      {
        text: "Vendedores",
        active: true,
        tooltipInfo: "Soporte para hasta 9 vendedores.",
        displayText: "hasta 9 *",
      },
      {
        text: "Gestión",
        active: true,
        tooltipInfo: "Compras, Proveedores y Estadísticas",
      },
      {
        text: "Portal de clientes",
        active: true,
        tooltipInfo: "Acceso a ventas y pagos",
      },
      {
        text: "Reportes Contables",
        active: true,
        tooltipInfo: "IVA, IIBB e Imp. Municipal",
      },
      {
        text: "App Mobile",
        active: true,
        tooltipInfo: "Incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "Multicuit",
        active: true,
        tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes.",
        displayText: "hasta 6 *",
      },
      {
        text: "Percepciones Prov.",
        active: true,
        tooltipInfo: "Gestión de percepciones provinciales incluida.",
      },
    ],
  },
];

export const pricingData: PricingCardProps[] = [
  {
    name: "Básico",
    price: 37000,
    bestOption: "monotributistas",
    benefits: [
      {
        text: "Asesoría prioritaria",
        active: true,
        tooltipInfo: "Asesoría rápida y eficaz.",
      },
      {
        text: "1 Usuario",
        active: true,
        tooltipInfo: "Acceso para 1 usuario. Sin contar vendedores",
      },
      {
        text: "Tienda Nube",
        active: false,
        tooltipInfo: "No incluye integración con Tienda Nube.",
      },
      {
        text: "Vendedores",
        active: false,
        tooltipInfo: "No incluye soporte para múltiples vendedores.",
      },
      {
        text: "App Mobile",
        active: false,
        tooltipInfo: "No incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Múltiples CUITs",
        active: false,
        tooltipInfo: "No permite facturar utilizando múltiples CUITs.",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "No incluye gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Inicial",
    price: 50000,
    popular: true,
    bestOption: "negocios locales",
    benefits: [
      {
        text: "Asesoría prioritaria",
        active: true,
        tooltipInfo: "Asesoría rápida y eficaz.",
      },
      {
        text: "3 usuarios",
        active: true,
        tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "Vendedores",
        active: false,
        tooltipInfo: "No incluye soporte para múltiples vendedores.",
      },
      {
        text: "App Mobile",
        active: false,
        tooltipInfo: "No incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Múltiples CUITs",
        active: false,
        tooltipInfo: "No permite facturar utilizando múltiples CUITs.",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "No incluye gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Intermedio",
    price: 68000,
    bestOption: "medianas empresas",
    benefits: [
      {
        text: "Asesoría prioritaria",
        active: true,
        tooltipInfo: "Asesoría rápida y eficaz.",
      },
      {
        text: "6 usuarios",
        active: true,
        tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "3 vendedores",
        active: true,
        tooltipInfo: "Soporte para hasta 3 vendedores.",
      },
      {
        text: "App Mobile",
        active: true,
        tooltipInfo: "Incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Múltiples CUITs",
        active: true,
        tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes.",
      },
      {
        text: "Percepciones Prov.",
        active: false,
        tooltipInfo: "No incluye gestión de percepciones provinciales.",
      },
    ],
  },
  {
    name: "Avanzado",
    price: 88000, 
    bestOption: "grandes empresas",
    iconPro: true,
    benefits: [
      {
        text: "Asesoría personalizada",
        active: true,
        tooltipInfo: "Asesoría personalizada y detallada.",
      },
      {
        text: "12 usuarios",
        active: true,
        tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores",
      },
      {
        text: "Tienda Nube",
        active: true,
        tooltipInfo: "Incluye integración con Tienda Nube.",
      },
      {
        text: "9 Vendedores",
        active: true,
        tooltipInfo: "Soporte para hasta 9 vendedores.",
      },
      {
        text: "App Mobile",
        active: true,
        tooltipInfo: "Incluye acceso a la aplicacion mobile.",
      },
      {
        text: "Múltiples CUITs",
        active: true,
        tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes.",
      },
      {
        text: "Percepciones Prov.",
        active: true,
        tooltipInfo: "Gestión de percepciones provinciales incluida.",
      },
    ],
  },
];

export const socialLinks = [
  { href: "https://www.facebook.com/fidelgestion", icon: Facebook },
  { href: "https://api.whatsapp.com/send?phone=543564222935", icon: Whatsapp },
  { href: "https://www.instagram.com/fidelsistema", icon: Instagram },
];

export const footerLinks = [
  {
    title: "Secciones",
    links: [
      { text: "Inicio", href: "" },
      { text: "Funcionalidades", href: "/funcionalidades" },
      { text: "Planes", href: "/planes" },
      { text: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "All Pages",
    links: [
      { text: "Home", href: "#link11" },
      { text: "App", href: "#link12" },
      { text: "Contact", href: "#link15" },
      { text: "Privacy Policy", href: "#link16" },
    ],
  },
];

export const appLinks = [
  {
    href: "https://play.google.com/store/apps/details?id=ar.com.fidel",
    icon: PlayStore,
    platform: "Play Store",
  },
  {
    href: "https://apps.apple.com/ar/app/fidel-gesti%C3%B3n/id1670120525",
    icon: Apple,
    platform: "App Store",
  },
];

export const termsData = {
  lastUpdated: "04 de febrero, 2024",
  sections: [
    {
      title: "1. Introducción:",
      content: [
        "El Programa de Red de Vendedores otorga a cualquier persona mayor de 18 años ('Participante') un Bono único e intransferible por el valor de $10.000 (pesos argentinos). El mismo es comunicado y otorgado por la empresa Trizap, fundadora de Fidel. Esta iniciativa busca incentivar la promoción y expansión de los servicios de Fidel, ofreciendo una recompensa a aquellos que logren atraer nuevos clientes.",
        "Para participar, se deberán aceptar los siguientes términos y condiciones. Estos términos están diseñados para asegurar un proceso justo y transparente para todos los participantes, garantizando que las referencias sean genuinas y que los bonos se otorguen de acuerdo con las reglas establecidas.",
      ],
    },
    {
      title: "2. Requisitos para obtener el bono:",
      content: ["El Participante puede conseguir un bono solo si:"],
      listItems: [
        "Refiere a un usuario no vinculado anteriormente a través del formulario disponible en los distintos medios (Página Web, App Móvil, Sistema ERP) y este contrata por primera vez un plan de los ofrecidos en el año corriente. El usuario referido debe ser una persona que nunca haya tenido una relación comercial con Fidel anteriormente.",
      ],
    },
    {
      title: "Ampliación del párrafo anterior:",
      content: [
        "El Participante no podrá reclamar el pago del premio si, anteriormente, el Usuario potencial fue referido por otra persona o si ya tuvo relación comercial con el producto Fidel. En caso de que el usuario referido haya sido contactado previamente o haya utilizado los servicios de Fidel, el bono no será otorgado. De activarse cualquiera de las dos situaciones, será notificado por el ente emisor del programa 'Red de Vendedores'.",
      ],
    },
    {
      title: "3. Proceso de referencia:",
      content: [
        "El Participante debe ingresar los datos solicitados del Usuario potencial, a fin de contactarlo y generar el vínculo. En caso de no obtener respuesta por parte de este último, queda cancelado el premio en cuestión. Es fundamental que los datos proporcionados sean correctos y completos para facilitar el proceso de contacto y confirmación.",
        "También se solicitará, por única vez, la cuenta bancaria y correo electrónico del 'Participante', para la posterior comunicación y transferencia del premio. Esta información será utilizada exclusivamente para la gestión del bono y no será compartida con terceros.",
      ],
    },
    {
      title: "4. Entrega del premio:",
      content: [
        "La entrega del premio se realizará mediante correo electrónico. Se enviará el comprobante de transferencia bancaria al e-mail de contacto del 'Participante' una vez que el Usuario potencial contrate un plan. El proceso de transferencia se completará dentro de los 30 días hábiles posteriores a la confirmación de la nueva contratación.",
      ],
    },
    {
      title: "5. Vigencia del acuerdo:",
      content: [
        "Este acuerdo es válido desde el 1 de enero de 2023 hasta el 31 de diciembre de 2023. Durante este período, los participantes podrán referir nuevos usuarios y optar por los bonos correspondientes siempre que se cumplan las condiciones mencionadas. Al finalizar el año, los términos y condiciones podrán ser revisados y actualizados según las políticas de la empresa.",
      ],
    },
  ],
};

export const navLinks = [
  { href: "/", label: "Inicio", icon:HomeIcon },
  { href: "/funcionalidades", label: "Funcionalidades", icon:FunctionalitiesIcon },
  { href: "/planes", label: "Planes", icon:CreditCardIcon },
  { href: "/contacto", label: "Contacto", icon:MailIcon },
];

export const headerData = {
  logoSrc: "/fidelnew.svg",
  logoAlt: "Logo",
  logoText: "Fidel",
  buttonText: "Ingresar",
  buttonStyle:
    "bg-[#212121] rounded-xl text-white text-[.8rem] px-5 py-2 font-medium",
};
