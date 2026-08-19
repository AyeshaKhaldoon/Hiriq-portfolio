type FAQItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details
          key={faq.q}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 open:border-cyan-300 open:bg-cyan-50/30"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold text-slate-900">
            <span>{faq.q}</span>
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-600 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 pr-8 leading-relaxed text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
