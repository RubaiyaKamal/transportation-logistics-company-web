import type { NewsBlock } from "@/content/news";

export function NewsBody({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="mt-4 text-2xl font-bold tracking-tight"
              >
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="flex flex-col gap-2 text-body">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-brand-300 pl-5 text-lg text-ink italic"
              >
                {block.text}
              </blockquote>
            );
          default:
            return (
              <p key={index} className="text-lg text-body">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
