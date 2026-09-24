import AgreementSidebar from "@/app/acuerdo-confidencialidad/agreement-sidebar";
import PrintButton from "@/app/acuerdo-confidencialidad/print-button";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; lead: string; label: string; href: string; tail?: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  opening: string;
  sidebarTitle?: string;
  updatedAt: string;
  sections: LegalSection[];
};

function DocumentBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="text-[15px] leading-[1.8] text-[#4f5852] sm:text-base print:text-[10.5pt] print:leading-[1.55] print:text-[#111]">
      {blocks.map((block, index) => {
        if (block.type === "list") {
          return (
            <ul className="my-3 grid list-none gap-[0.65rem] p-0" key={`list-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li className="print:break-inside-avoid" key={`${itemIndex}-${item}`}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "link") {
          return (
            <p className="mb-4 last:mb-0" key={`link-${index}`}>
              {block.lead}{" "}
              <a
                className="font-medium text-[#315a2b] underline decoration-[#9cb998] underline-offset-4 hover:text-[#203f1c]"
                href={block.href}
                rel={block.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={block.href.startsWith("http") ? "_blank" : undefined}
              >
                {block.label}
              </a>
              {block.tail ? ` ${block.tail}` : null}
            </p>
          );
        }

        return (
          <p className="mb-4 last:mb-0" key={`paragraph-${index}`}>
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function LegalDocumentPage({ document }: { document: LegalDocument }) {
  const sidebarTitle = document.sidebarTitle ?? "En esta página";
  const items = document.sections.map((section, index) => ({
    id: `documento-seccion-${index + 1}`,
    label: `${index + 1}. ${section.heading}`,
  }));

  return (
    <main className="min-h-screen px-4 pb-20 pt-28 text-[#202722] sm:px-6 sm:pt-16 lg:px-8 print:min-h-0 print:bg-white print:p-0 print:text-[#111]">
      <div className="mx-auto max-w-[1240px]">
        <div className="border-b border-[#dfe5dc] pb-8 sm:pb-10 print:hidden">
          <h1 className="max-w-[790px] font-satoshi text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#202722] sm:text-5xl lg:text-[3.6rem]">
            {document.title}
          </h1>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[670px] text-sm leading-6 text-[#657068] sm:text-base">
              {document.summary}
            </p>
            <PrintButton />
          </div>
        </div>

        <details className="mt-6 rounded-xl border border-[#dfe5dc] bg-white px-4 py-3 md:hidden print:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-[#263229] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b8c40] focus-visible:outline-offset-4">
            Índice del documento
            <span className="ml-2 font-normal text-[#78827a]">
              {document.sections.length} secciones
            </span>
          </summary>
          <nav aria-label="Índice del documento" className="pt-3">
            <ul className="grid gap-1 border-t border-[#edf0eb] pt-3">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    className="block rounded-lg px-2 py-2 text-sm leading-5 text-[#566159] hover:bg-[#f3f7f0] hover:text-[#315a2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b8c40] focus-visible:outline-offset-4"
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>

        <div className="mt-6 grid gap-8 md:mt-10 md:grid-cols-[230px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14 print:!mt-0 print:!block">
          <AgreementSidebar items={items} title={sidebarTitle} />

          <article className="min-w-0 rounded-[18px] border border-[#e5e9e2] bg-white px-5 py-7 shadow-[0_16px_50px_-38px_rgba(34,51,37,0.28)] sm:px-9 sm:py-10 lg:px-14 lg:py-14 print:rounded-none print:border-0 print:px-0 print:py-0 print:shadow-none">
            <div className="mb-9 border-b border-[#edf0eb] pb-7 sm:mb-11 sm:pb-9">
              <h2 className="mb-4 font-satoshi text-xl font-semibold tracking-[-0.02em] text-[#202722] sm:text-2xl">
                {document.title}
              </h2>
              <div className="text-[15px] leading-[1.8] text-[#4f5852] sm:text-base print:text-[10.5pt] print:leading-[1.55] print:text-[#111]">
                <p>{document.opening}</p>
              </div>
            </div>

            <div className="space-y-9 sm:space-y-11">
              {document.sections.map((section, index) => (
                <section
                  aria-labelledby={`documento-seccion-titulo-${index + 1}`}
                  className="scroll-mt-28 rounded-xl transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none print:!bg-transparent print:!shadow-none"
                  id={`documento-seccion-${index + 1}`}
                  key={section.heading}
                >
                  <h2
                    className="mb-3 flex flex-wrap items-baseline gap-x-2 font-satoshi text-lg font-semibold leading-snug tracking-[-0.02em] text-[#263229] sm:text-xl print:break-after-avoid print:text-[#111]"
                    id={`documento-seccion-titulo-${index + 1}`}
                  >
                    <span className="text-sm font-semibold text-black sm:text-base">
                      {index + 1}.
                    </span>
                    <span>{section.heading}</span>
                  </h2>
                  <DocumentBlocks blocks={section.blocks} />
                </section>
              ))}
            </div>

            <p className="mt-10 border-t border-[#edf0eb] pt-8 text-sm leading-6 text-[#657068] sm:mt-12 print:text-[9pt] print:text-[#111]">
              Última actualización: {document.updatedAt}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
