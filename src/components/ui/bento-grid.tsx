import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[15rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  description,
  href,
  cta,
  index,
  totalProjects,
}: {
  name: string;
  description: string;
  href: string;
  cta: string;
  index: number;
  totalProjects: number;
}) => {
  const positionInGroup = index % 3;
  const groupNumber = Math.floor(index / 3);
  const isLastCard = index === totalProjects - 1;
  const isLastCardInIncompleteGroup = isLastCard && positionInGroup !== 2;
  
  const gridClasses = totalProjects < 3 
    ? {
        0: totalProjects === 1 
          ? "md:col-span-3 md:row-span-1" 
          : "md:col-span-2 md:row-span-1",
        1: "md:col-span-1 md:row-span-1",
      }[index]
    : {
        0: groupNumber % 2 === 0 
          ? "md:col-span-2 md:row-span-1"   // Even groups: wide rectangle first
          : "md:col-span-1 md:row-span-1",  // Odd groups: normal rectangle first
        1: groupNumber % 2 === 0 
          ? "md:col-span-1 md:row-span-1"   // Even groups: normal rectangle second
          : "md:col-span-2 md:row-span-1",  // Odd groups: wide rectangle second
        2: "md:col-span-3 md:row-span-1",   // Always full width last
      }[positionInGroup];

  // Override grid classes if it's the last card in an incomplete group
  const finalGridClasses = isLastCardInIncompleteGroup 
    ? "md:col-span-3 md:row-span-1" 
    : gridClasses;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-xl",
        "bg-background border-border border-2",
        finalGridClasses
      )}
    >
      <div className="pointer-events-none  flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:translate-y-[-2rem]">
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-[100%] transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };
