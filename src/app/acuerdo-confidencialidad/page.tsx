import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import AgreementSidebar from "./agreement-sidebar";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "Acuerdo de confidencialidad y protección de datos | Fidel",
  description:
    "Acuerdo de confidencialidad y protección de datos de Fidel, prestado por Agencia Programarte S.A.S.",
};

const source = readFileSync(
  join(process.cwd(), "src/content/acuerdo-confidencialidad.txt"),
  "utf8",
);

const clausePattern =
  /^(?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|SÉPTIMA|OCTAVA|NOVENA|DÉCIMA(?:\s+(?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|SÉPTIMA|OCTAVA))?)\.\s+/;

type TextBlock = { kind: "paragraph"; text: string } | { kind: "list"; lines: string[] };

function collectLineGroups(lines: string[]) {
  const groups: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (!line.trim()) {
      if (current.length) groups.push(current);
      current = [];
      continue;
    }

    current.push(line.trim());
  }

  if (current.length) groups.push(current);

  return groups;
}

function collectBlocks(lines: string[]): TextBlock[] {
  const blocks: TextBlock[] = [];

  for (const group of collectLineGroups(lines)) {
    let index = 0;
    while (index < group.length) {
      if (/^[a-z]\)\s/.test(group[index])) {
        const listLines: string[] = [];
        while (index < group.length && /^[a-z]\)\s/.test(group[index])) {
          listLines.push(group[index]);
          index += 1;
        }
        blocks.push({ kind: "list", lines: listLines });
      } else {
        blocks.push({ kind: "paragraph", text: group[index] });
        index += 1;
      }
    }
  }

  return blocks;
}

const lines = source.replace(/\r/g, "").trim().split("\n");
const title = lines[0];
const firstClauseIndex = lines.findIndex((line) => clausePattern.test(line));
const closingIndex = lines.findIndex((line) =>
  line.startsWith("En prueba de conformidad,"),
);
const clausesEnd = closingIndex === -1 ? lines.length : closingIndex;

const introBlocks = collectBlocks(lines.slice(1, firstClauseIndex));
const clauseLines = lines.slice(firstClauseIndex, clausesEnd);
const clauses: { heading: string; blocks: TextBlock[] }[] = [];
let currentHeading = "";
let currentBody: string[] = [];

for (const line of clauseLines) {
  if (clausePattern.test(line)) {
    if (currentHeading) {
      clauses.push({ heading: currentHeading, blocks: collectBlocks(currentBody) });
    }
    currentHeading = line.trim();
    currentBody = [];
  } else {
    currentBody.push(line);
  }
}

if (currentHeading) {
  clauses.push({ heading: currentHeading, blocks: collectBlocks(currentBody) });
}

const closingText = closingIndex === -1 ? "" : lines[closingIndex].trim();
const signatureGroups =
  closingIndex === -1
    ? []
    : collectLineGroups(lines.slice(closingIndex + 1)).map((group) => ({
      text: group.join(" "),
    }));

function markPlaceholders(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, index) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <mark
        className="rounded-[3px] bg-[#eff9e9] px-[0.16em] text-[#315a2b] print:bg-transparent print:font-semibold print:text-[#111]"
        key={`${index}-${part}`}
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function ClauseBody({ blocks }: { blocks: TextBlock[] }) {
  return (
    <div className="text-[15px] leading-[1.8] text-[#4f5852] sm:text-base print:text-[10.5pt] print:leading-[1.55] print:text-[#111]">
      {blocks.map((block, index) =>
        block.kind === "list" ? (
          <ul className="my-3 grid list-none gap-[0.65rem] p-0" key={`list-${index}`}>
            {block.lines.map((line, lineIndex) => (
              <li className="print:break-inside-avoid" key={`${lineIndex}-${line}`}>
                {markPlaceholders(line)}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="mb-4 last:mb-0 print:break-inside-avoid"
            key={`paragraph-${index}`}
          >
            {markPlaceholders(block.text)}
          </p>
        ),
      )}
    </div>
  );
}

function headingParts(heading: string) {
  const divider = heading.indexOf(". ");
  return {
    ordinal: heading.slice(0, divider + 1),
    label: heading.slice(divider + 2),
  };
}

const indexItems = clauses.map((clause, index) => ({
  id: `clausula-${index + 1}`,
  label: `${index + 1}. ${headingParts(clause.heading).label}`,
}));

export default function ConfidencialidadPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-28 text-[#202722] sm:px-6 sm:pt-16 lg:px-8 print:min-h-0 print:bg-white print:p-0 print:text-[#111]">
      <div className="mx-auto max-w-[1240px]">
        <div className="border-b border-[#dfe5dc] pb-8 sm:pb-10 print:hidden">
          <h1 className="max-w-[790px] font-satoshi text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#202722] sm:text-5xl lg:text-[3.6rem]">
            Contrato de Confidencialidad
          </h1>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[670px] text-sm leading-6 text-[#657068] sm:text-base">
              Entre AGENCIA PROGRAMARTE S.A.S. y EL CLIENTE.
              <span className="block italic">
                El documento conserva los campos que deben completarse antes de la firma.
              </span>
            </p>
            <PrintButton />
          </div>
        </div>

        <details className="mt-6 rounded-xl border border-[#dfe5dc] bg-white px-4 py-3 md:hidden print:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-[#263229] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b8c40] focus-visible:outline-offset-4">
            Índice del acuerdo
            <span className="ml-2 font-normal text-[#78827a]">
              {clauses.length} cláusulas
            </span>
          </summary>
          <nav aria-label="Índice del acuerdo" className="pt-3">
            <ul className="grid gap-1 border-t border-[#edf0eb] pt-3">
              {indexItems.map((item) => (
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
          <AgreementSidebar items={indexItems} />

          <article className="min-w-0 rounded-[18px] border border-[#e5e9e2] bg-white px-5 py-7 shadow-[0_16px_50px_-38px_rgba(34,51,37,0.28)] sm:px-9 sm:py-10 lg:px-14 lg:py-14 print:rounded-none print:border-0 print:px-0 print:py-0 print:shadow-none">
            <div className="mb-9 border-b border-[#edf0eb] pb-7 sm:mb-11 sm:pb-9">
              <h2 className="mb-4 font-satoshi text-xl font-semibold tracking-[-0.02em] text-[#202722] sm:text-2xl">
                {title}
              </h2>
              <ClauseBody blocks={introBlocks} />
            </div>

            <div className="space-y-9 sm:space-y-11">
              {clauses.map((clause, index) => {
                const { label } = headingParts(clause.heading);
                return (
                  <section
                    aria-labelledby={`clausula-titulo-${index + 1}`}
                    className="scroll-mt-28 rounded-xl transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none print:!bg-transparent print:!shadow-none"
                    id={`clausula-${index + 1}`}
                    key={clause.heading}
                  >
                    <h2
                      className="mb-3 flex flex-wrap items-baseline gap-x-2 font-satoshi text-lg font-semibold leading-snug tracking-[-0.02em] text-[#263229] sm:text-xl print:break-after-avoid print:text-[#111]"
                      id={`clausula-titulo-${index + 1}`}
                    >
                      <span className="text-sm font-semibold text-black sm:text-base">
                        {index + 1}.
                      </span>
                      <span>{label}</span>
                    </h2>
                    <ClauseBody blocks={clause.blocks} />
                  </section>
                );
              })}
            </div>

            {closingText && (
              <p className="mt-10 border-t border-[#edf0eb] pt-8 text-[15px] leading-[1.8] text-[#4f5852] sm:mt-12 sm:text-base print:break-inside-avoid print:text-[10.5pt] print:leading-[1.55] print:text-[#111]">
                {markPlaceholders(closingText)}
              </p>
            )}

            {signatureGroups.length > 0 && (
              <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10">
                {signatureGroups.map((group, index) => (
                  <div
                    className="break-inside-avoid border-t border-[#9da69e] pt-4 text-sm leading-7 text-[#4f5852] print:text-[10pt] print:text-[#111]"
                    key={`${index}-${group.text}`}
                  >
                    {group.text.split(" ").length > 1 ? (
                      <SignatureText text={group.text} />
                    ) : (
                      group.text
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      </div>
    </main>
  );
}

function SignatureText({ text }: { text: string }) {
  const lines = text.split(
    /(?=\s(?:AGENCIA PROGRAMARTE|CUIT(?:\/DNI)?:|Firma:|Nombre:|DNI:|Cargo:|\[NOMBRE))/g,
  );

  return (
    <>
      {lines.map((line, index) => (
        <span className="block" key={`${index}-${line}`}>
          {markPlaceholders(line.trim())}
        </span>
      ))}
    </>
  );
}
