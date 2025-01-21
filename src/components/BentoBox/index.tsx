// Define the BentoInfo interface
export interface BentoInfo {
  title: string;
  description: string;
  image: string;  // Image URL or path
  link: string;   // Link to more details
}

interface BentoBoxProps {
  items: BentoInfo[];  // Array of Bento items to display
}

// BentoBox component
export function BentoBox({ items }: BentoBoxProps) {
  return (
    <div className="bento-box grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {items.map((item, index) => {
        // Determine the span for each item: larger or smaller based on index parity
        const isLarge = index % 4 === 0 || index % 4 === 3;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bento-item block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 ${
              isLarge ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <div className="p-4">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-md text-text mt-2">{item.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
