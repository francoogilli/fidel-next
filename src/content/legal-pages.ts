import type { LegalDocument } from "@/components/legal-document-page";

const updatedAt = "24 de septiembre de 2026";

export const privacyPolicy: LegalDocument = {
  title: "Política de Privacidad",
  summary: "Qué datos recopilamos, para qué los usamos y cómo podés ejercer tus derechos.",
  opening:
    "Esta política describe el tratamiento de datos personales en el sitio web de Fidel y, cuando corresponda, durante la prestación del servicio. Las condiciones específicas de los datos que cada cliente carga en Fidel también se rigen por el contrato y el Acuerdo de Confidencialidad.",
  updatedAt,
  sections: [
    {
      heading: "Responsable del tratamiento",
      blocks: [
        {
          type: "paragraph",
          text: "La responsable de los datos recibidos a través de este sitio es AGENCIA PROGRAMARTE S.A.S. (CUIT 30-71584333-8), con domicilio en San Luis 733, San Francisco, Provincia de Córdoba, Argentina. Para consultas sobre privacidad o para ejercer tus derechos, podés escribirnos a info@fidel.com.ar.",
        },
      ],
    },
    {
      heading: "Qué datos recopilamos",
      blocks: [
        {
          type: "paragraph",
          text: "Si completás el formulario de contacto, recibimos tu nombre, rubro, email y teléfono. Si nos escribís por email, WhatsApp u otro canal, también recibimos los datos y el contenido que decidas compartir en esa conversación.",
        },
        {
          type: "paragraph",
          text: "El sitio utiliza Meta Pixel para registrar vistas de página. Al cargar una página, esa herramienta puede recibir información técnica y de navegación, como la dirección de la página, el momento de la visita y datos asociados al navegador o dispositivo. Meta puede usar cookies o identificadores similares para medir campañas y actividad; el detalle depende de la configuración del navegador y de Meta.",
        },
        {
          type: "paragraph",
          text: "Cuando una empresa usa Fidel, puede incorporar información de sus usuarios, clientes, proveedores, productos, ventas, comprobantes y operaciones. En esos casos tratamos la información por cuenta del cliente y de acuerdo con el servicio contratado y las instrucciones que correspondan.",
        },
      ],
    },
    {
      heading: "Para qué usamos los datos",
      blocks: [
        {
          type: "list",
          items: [
            "Responder consultas, coordinar demostraciones y dar seguimiento a solicitudes comerciales.",
            "Gestionar la relación con clientes, habilitar y prestar Fidel, y brindar soporte, mantenimiento y capacitación.",
            "Proteger la disponibilidad y seguridad del sitio y del servicio, y atender obligaciones legales o contractuales.",
            "Medir visitas y la eficacia de campañas de difusión mediante Meta Pixel.",
          ],
        },
        {
          type: "paragraph",
          text: "No usamos los datos que un cliente carga en Fidel para fines ajenos a la prestación del servicio, salvo autorización o una obligación legal que lo permita o requiera.",
        },
      ],
    },
    {
      heading: "Con quién compartimos la información",
      blocks: [
        {
          type: "paragraph",
          text: "Los datos del formulario de contacto se envían a HubSpot para registrar y atender la consulta. Meta recibe información asociada a las vistas de página a través de Meta Pixel. Fidel también puede usar proveedores tecnológicos de alojamiento, almacenamiento, comunicaciones, seguridad y copias de respaldo cuando sean necesarios para prestar y mantener el servicio.",
        },
        {
          type: "paragraph",
          text: "Limitamos el acceso a quienes lo necesitan para su tarea y procuramos que los proveedores que intervienen estén sujetos a obligaciones adecuadas de confidencialidad y seguridad. También podemos comunicar información si una norma, autoridad competente o procedimiento legal lo exige.",
        },
      ],
    },
    {
      heading: "Conservación de los datos",
      blocks: [
        {
          type: "paragraph",
          text: "Conservamos la información durante el tiempo necesario para atender la consulta, mantener la relación comercial, prestar el servicio y cumplir obligaciones legales o resolver reclamos. Al terminar un servicio, cierta información puede permanecer temporalmente en copias de respaldo o conservarse cuando exista una obligación legal o contractual. Su eliminación puede completarse gradualmente según los ciclos de respaldo.",
        },
      ],
    },
    {
      heading: "Tus derechos y cómo ejercerlos",
      blocks: [
        {
          type: "paragraph",
          text: "Podés solicitar información sobre tus datos personales y pedir su acceso, actualización, rectificación o supresión, de acuerdo con la normativa aplicable. Para verificar la identidad de quien hace el pedido, podremos solicitar información razonable. Si los datos forman parte de una cuenta empresarial de Fidel, coordinaremos el pedido con la empresa titular de esa cuenta cuando corresponda.",
        },
        {
          type: "link",
          lead: "Enviá tu solicitud a",
          label: "info@fidel.com.ar",
          href: "mailto:info@fidel.com.ar?subject=Privacidad%20y%20datos%20personales",
          tail: "indicando qué derecho querés ejercer y un medio para responderte.",
        },
        {
          type: "link",
          lead: "El texto actualizado de la Ley 25.326 está disponible en",
          label: "Argentina.gob.ar",
          href: "https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion",
          tail: ".",
        },
        {
          type: "link",
          lead: "La Agencia de Acceso a la Información Pública explica estos derechos y cómo reclamar ante la autoridad de control:",
          label: "derechos de las personas titulares de datos",
          href: "https://www.argentina.gob.ar/aaip/datospersonales/derechos",
        },
      ],
    },
    {
      heading: "Cambios y consultas",
      blocks: [
        {
          type: "paragraph",
          text: "Podemos actualizar esta política cuando cambien el sitio, el servicio o las normas aplicables. Publicaremos la versión vigente en esta página e indicaremos su fecha de actualización. Para consultas, escribinos a info@fidel.com.ar.",
        },
      ],
    },
  ],
};

export const cookiesPolicy: LegalDocument = {
  title: "Cookies y Seguimiento",
  summary: "Qué herramientas de medición usa este sitio y qué opciones tenés para gestionarlas.",
  opening:
    "Esta página informa qué tecnologías de seguimiento utiliza actualmente el sitio de Fidel. Los nombres y el funcionamiento de cookies de terceros pueden cambiar según la configuración del proveedor y de tu navegador.",
  updatedAt,
  sections: [
    {
      heading: "Qué son las cookies y tecnologías similares",
      blocks: [
        {
          type: "paragraph",
          text: "Son archivos o identificadores que un sitio o un proveedor externo puede guardar o leer en el navegador o dispositivo. Permiten recordar información técnica o medir cómo se usa una página. Un píxel es un fragmento de código que puede enviar información de navegación a un tercero.",
        },
      ],
    },
    {
      heading: "Meta Pixel",
      blocks: [
        {
          type: "paragraph",
          text: "El sitio carga Meta Pixel, de Meta Platforms, Inc., y envía el evento PageView cuando se visita una página. Lo usamos para conocer el alcance de las visitas y medir campañas de difusión. La herramienta puede tratar la URL visitada, información técnica del navegador o dispositivo, identificadores y datos de conexión, y puede usar cookies o tecnologías similares según la configuración de Meta.",
        },
        {
          type: "link",
          lead: "Podés consultar cómo Meta explica sus cookies y tecnologías similares en su",
          label: "Política de cookies",
          href: "https://www.facebook.com/privacy/policies/cookies",
          tail: ".",
        },
      ],
    },
    {
      heading: "Herramientas que no detectamos en este sitio",
      blocks: [
        {
          type: "paragraph",
          text: "La implementación actual del sitio no incluye Google Analytics ni el código de seguimiento de HubSpot. HubSpot sí recibe los datos que enviás en el formulario de contacto para gestionar la consulta; ese uso como sistema de contactos no equivale a instalar su herramienta de seguimiento web.",
        },
      ],
    },
    {
      heading: "Cómo gestionar las cookies",
      blocks: [
        {
          type: "paragraph",
          text: "Podés consultar, bloquear o eliminar cookies desde los ajustes de tu navegador. También podés revisar las opciones de privacidad y anuncios que ofrece Meta. Si bloqueás tecnologías de terceros, la medición de campañas puede dejar de funcionar o ser menos precisa.",
        },
        {
          type: "paragraph",
          text: "Actualmente el sitio no ofrece un panel propio para aceptar o rechazar categorías de cookies. Los controles del navegador y del proveedor externo son las opciones disponibles para limitar su uso.",
        },
      ],
    },
    {
      heading: "Actualizaciones y contacto",
      blocks: [
        {
          type: "paragraph",
          text: "Actualizaremos esta información si incorporamos o quitamos herramientas de medición. Si tenés dudas sobre seguimiento o privacidad, escribinos a info@fidel.com.ar.",
        },
      ],
    },
  ],
};

export const serviceTerms: LegalDocument = {
  title: "Términos del Servicio",
  summary: "Condiciones generales para contratar, usar y solicitar la baja de Fidel.",
  opening:
    "Estos términos describen las reglas generales del sitio y del sistema Fidel, ofrecido por AGENCIA PROGRAMARTE S.A.S. Los alcances, precios, plazos y condiciones particulares de cada cuenta se completan en la propuesta comercial y el contrato aceptados por el cliente.",
  updatedAt,
  sections: [
    {
      heading: "Quién presta el servicio",
      blocks: [
        {
          type: "paragraph",
          text: "Fidel es un sistema de gestión empresarial prestado por AGENCIA PROGRAMARTE S.A.S. (CUIT 30-71584333-8), con domicilio en San Luis 733, San Francisco, Provincia de Córdoba, Argentina. El servicio puede incluir acceso al software, implementación, configuración, soporte, mantenimiento, actualización, capacitación y asistencia, según lo acordado para cada cliente.",
        },
      ],
    },
    {
      heading: "Contratación y alcance",
      blocks: [
        {
          type: "paragraph",
          text: "Antes de activar el servicio, el cliente acepta una propuesta comercial, contrato u otro documento que identifica el plan, sus módulos, límites, cantidad de usuarios, servicios incluidos y fecha de inicio. La contratación queda sujeta a ese documento y a estos términos generales. Una consulta o demostración solicitada desde el sitio no activa por sí sola una suscripción.",
        },
        {
          type: "paragraph",
          text: "Si existe una diferencia entre estos términos y el contrato o propuesta aceptados, prevalecen las condiciones particulares para el plan, precio, pago, nivel de servicio y duración que hayan sido acordadas por escrito.",
        },
      ],
    },
    {
      heading: "Precio y pagos",
      blocks: [
        {
          type: "paragraph",
          text: "El valor, moneda, impuestos, periodicidad de facturación, medio de pago y vencimientos se informan antes de contratar y quedan establecidos en la propuesta o contrato aceptados. Los importes publicados en el sitio pueden describir planes de referencia; revisá la propuesta vigente para conocer el precio y alcance aplicables a tu cuenta.",
        },
        {
          type: "paragraph",
          text: "Los cambios de plan, ampliaciones de usuarios o servicios adicionales pueden modificar el precio y se informarán antes de su aplicación, de acuerdo con las condiciones comerciales aceptadas.",
        },
      ],
    },
    {
      heading: "Cuentas y uso permitido",
      blocks: [
        {
          type: "paragraph",
          text: "El cliente administra las cuentas, permisos y credenciales de sus usuarios. Debe mantenerlas bajo resguardo, informar incidentes y dar acceso solo a personas autorizadas. El sistema se usa para la actividad propia del cliente y dentro del plan contratado.",
        },
        {
          type: "list",
          items: [
            "No compartir credenciales ni permitir accesos no autorizados.",
            "No usar el servicio para infringir la ley, vulnerar derechos de terceros o intentar acceder a sistemas o datos ajenos.",
            "No copiar, revender, sublicenciar, descompilar ni interferir con el software, salvo autorización expresa o cuando la ley lo permita.",
            "Mantener información de contacto y datos de la cuenta actualizados.",
          ],
        },
      ],
    },
    {
      heading: "Información del cliente y propiedad intelectual",
      blocks: [
        {
          type: "paragraph",
          text: "El cliente conserva los derechos que le correspondan sobre la información que incorpora a Fidel y es responsable por contar con autorización para usarla. AGENCIA PROGRAMARTE S.A.S. trata esos datos para prestar y mantener el servicio, conforme al contrato y al Acuerdo de Confidencialidad.",
        },
        {
          type: "paragraph",
          text: "El software, su código, arquitectura, funcionalidades, diseños, marcas y documentación pertenecen a AGENCIA PROGRAMARTE S.A.S. o a sus titulares. La contratación otorga únicamente el derecho de uso necesario para operar el servicio durante la vigencia acordada.",
        },
      ],
    },
    {
      heading: "Disponibilidad, soporte y cambios",
      blocks: [
        {
          type: "paragraph",
          text: "Trabajamos para mantener el servicio disponible, seguro y actualizado. Puede haber tareas de mantenimiento, interrupciones de conectividad o incidentes técnicos. Los horarios de soporte, tiempos de respuesta y compromisos específicos de disponibilidad, si existen, se establecen en la propuesta o acuerdo de nivel de servicio correspondiente.",
        },
        {
          type: "paragraph",
          text: "Fidel puede evolucionar y actualizar sus funciones. Si un cambio afecta una condición esencial que haya sido acordada con el cliente, se aplicará el mecanismo previsto en el contrato y la normativa vigente.",
        },
      ],
    },
    {
      heading: "Baja y finalización",
      blocks: [
        {
          type: "paragraph",
          text: "Para solicitar la baja, el cliente puede escribir a info@fidel.com.ar o usar el canal de contratación que corresponda a su cuenta. La solicitud debe permitir identificar la empresa y el servicio; no es necesario incluir contraseñas. Cuando resulte aplicable la normativa de defensa del consumidor para contrataciones a distancia, la baja puede solicitarse por el mismo medio de contratación y se respetan los derechos legales de revocación. La fecha efectiva, los importes pendientes y cualquier otra condición de cierre se rigen por la propuesta o contrato aceptados y por la normativa aplicable.",
        },
        {
          type: "paragraph",
          text: "Antes del cierre, el cliente puede solicitar o realizar la exportación de su información mediante las funciones disponibles o pedir asistencia. Tras la finalización, algunos datos podrán conservarse temporalmente por obligaciones legales, reclamos, obligaciones pendientes o ciclos de respaldo; luego se eliminarán o anonimizarán según corresponda. La eliminación no necesariamente es inmediata en las copias de respaldo.",
        },
        {
          type: "link",
          lead: "Para iniciar una solicitud de baja por email, escribí a",
          label: "info@fidel.com.ar",
          href: "mailto:info@fidel.com.ar?subject=Solicitud%20de%20baja%20de%20Fidel",
          tail: "con el nombre de la empresa y el plan contratado.",
        },
      ],
    },
    {
      heading: "Normativa y consultas",
      blocks: [
        {
          type: "paragraph",
          text: "Estos términos se interpretan conforme a las leyes de la República Argentina. Las condiciones de jurisdicción, cuando corresponda, se rigen por el contrato principal y la normativa aplicable. Para consultas sobre el servicio o estos términos, contactá a info@fidel.com.ar.",
        },
        {
          type: "link",
          lead: "La normativa vigente sobre baja y arrepentimiento en contrataciones a distancia puede consultarse en la",
          label: "Disposición 954/2025",
          href: "https://www.argentina.gob.ar/normativa/nacional/norma-417152/texto",
          tail: ".",
        },
      ],
    },
  ],
};

export const dataSecurity: LegalDocument = {
  title: "Seguridad y Gestión de Datos",
  summary: "Cómo cuidamos la información, qué función cumplen los respaldos y qué pasa con tus datos.",
  opening:
    "Aplicamos medidas razonables para proteger la información que se encuentra bajo nuestra custodia y sostener la continuidad de Fidel. Las medidas técnicas concretas pueden evolucionar junto con el servicio y dependen de la infraestructura y los riesgos vigentes.",
  updatedAt,
  sections: [
    {
      heading: "Medidas de protección",
      blocks: [
        {
          type: "paragraph",
          text: "Adoptamos medidas técnicas y organizativas destinadas a reducir el riesgo de acceso, uso, modificación, pérdida o divulgación no autorizados. Limitamos el acceso de personal y colaboradores a quienes lo necesitan para realizar tareas de soporte, mantenimiento, seguridad o prestación del servicio, y procuramos que estén sujetos a obligaciones de confidencialidad.",
        },
        {
          type: "paragraph",
          text: "No publicamos en esta página detalles de infraestructura que puedan cambiar o comprometer la seguridad. Las características específicas pactadas para una cuenta se rigen por su contrato o acuerdo de nivel de servicio.",
        },
      ],
    },
    {
      heading: "Accesos y responsabilidades",
      blocks: [
        {
          type: "paragraph",
          text: "Cuando necesitamos acceder a información para dar soporte, diagnosticar un problema o mantener Fidel, procuramos limitar el acceso a lo necesario para esa tarea y utilizar personal autorizado. Cuando la tecnología lo permite, ciertas acciones pueden quedar asentadas en registros de actividad.",
        },
        {
          type: "paragraph",
          text: "Cada cliente debe resguardar sus credenciales, administrar usuarios y permisos, evitar compartir accesos e informar cuanto antes cualquier incidente que detecte. La seguridad también depende de los dispositivos, cuentas y conexiones que administra el cliente.",
        },
      ],
    },
    {
      heading: "Proveedores tecnológicos",
      blocks: [
        {
          type: "paragraph",
          text: "Fidel puede apoyarse en proveedores especializados de alojamiento, almacenamiento, conectividad, comunicaciones, monitoreo, seguridad y respaldo. Solo procuramos habilitar el acceso a información cuando resulta necesario para brindar, mantener o proteger el servicio, bajo obligaciones adecuadas de confidencialidad y seguridad.",
        },
      ],
    },
    {
      heading: "Copias de respaldo y recuperación",
      blocks: [
        {
          type: "paragraph",
          text: "Se realizan copias de respaldo periódicas para ayudar a recuperar información y sostener la continuidad del servicio ante fallas o incidentes. También pueden utilizarse mecanismos de replicación o redundancia. La frecuencia, retención y tiempos de recuperación pueden variar según la evolución del servicio; si se acuerdan parámetros específicos, se detallan en el contrato o SLA.",
        },
        {
          type: "paragraph",
          text: "Los respaldos reducen el impacto de ciertos incidentes, pero no garantizan que nunca haya interrupciones o pérdida de datos. Por eso recomendamos que cada cliente mantenga sus propias exportaciones cuando sean necesarias para su operación.",
        },
      ],
    },
    {
      heading: "Incidentes de seguridad",
      blocks: [
        {
          type: "paragraph",
          text: "Si tomamos conocimiento de un incidente significativo que afecte información de un cliente bajo nuestra custodia, procuraremos informarle tan pronto como sea razonablemente posible y compartir los datos disponibles que puedan ayudar a evaluar y gestionar la situación.",
        },
        {
          type: "link",
          lead: "Si detectás una actividad o acceso que te preocupe, comunicate con soporte o escribinos a",
          label: "info@fidel.com.ar",
          href: "mailto:info@fidel.com.ar?subject=Consulta%20de%20seguridad",
          tail: ".",
        },
      ],
    },
    {
      heading: "Exportación y eliminación de información",
      blocks: [
        {
          type: "paragraph",
          text: "Durante la vigencia del servicio, el cliente puede exportar la información que tenga disponible en Fidel o solicitar asistencia. Al terminar la relación, podremos conservar temporalmente algunos datos para cumplir obligaciones legales o contractuales, atender reclamos y completar los ciclos normales de rotación de respaldos. La eliminación o anonimización se realiza cuando dejan de existir esos motivos y conforme a la normativa aplicable.",
        },
      ],
    },
    {
      heading: "Límites y consultas",
      blocks: [
        {
          type: "paragraph",
          text: "Ningún sistema conectado a Internet puede garantizar una seguridad absoluta frente a toda amenaza. Aplicamos medidas razonables de acuerdo con la naturaleza del servicio y revisamos su funcionamiento a medida que Fidel evoluciona. Las consultas sobre el tratamiento de datos también pueden dirigirse a info@fidel.com.ar.",
        },
      ],
    },
  ],
};
