"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { animate, AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const variants = cva(
  "shadow-md rounded-xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{
          scale: 0.2,
          y: 120,
          opacity: 0,
        }}
        onClick={() => setOpen(true)}
        className={cn(
          variants({
            size,
            className:
              "hover:dark:bg-neutral-800 hover:bg-slate-50 duration-75 transition-all hover:cursor-pointer ease-in-out",
          })
        )}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl dark:bg-neutral-900 dark:text-neutral-100 w-full sm:w-2/3 h-full sm:h-2/3 p-8 z-50"
          >
            {children}
            <motion.button onClick={() => setOpen(false)}>
              <Button size="icon" className="rounded-full" variant={"outline"}>
                <X />
              </Button>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GridItem;
