// "use client";
// import { cn } from "@/lib/utils";
// import { cva, type VariantProps } from "class-variance-authority";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import { X } from "lucide-react";

// const variants = cva(
//   "shadow-md rounded-xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
//   {
//     variants: {
//       size: {
//         "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
//         "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
//         "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
//         "2x4":
//           "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
//       },
//     },
//     defaultVariants: {
//       size: "1x2",
//     },
//   }
// );

// export type GridItemProps = { children: React.ReactNode } & VariantProps<
//   typeof variants
// > & { index: string };

// const GridItem = ({ size, children, index }: GridItemProps) => {
//   const [open, setOpen] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   const states = [
//     {
//       scale: 0.2,
//       y: 120,
//       opacity: 0,
//     },
//     {
//       scale: 1,
//       opacity: 1,
//     },
//   ];

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <>
//       <motion.div
//         layoutId={index}
//         initial={states[loaded ? 1 : 0]}
//         onClick={() => setOpen(true)}
//         className={cn(
//           variants({
//             size,
//             className:
//               "hover:dark:bg-neutral-800 hover:bg-slate-50 duration-75 transition-all hover:cursor-pointer ease-in-out",
//           })
//         )}
//       >
//         {children}
//       </motion.div>
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               layoutId={index}
//               key="modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="z-50 absolute inset-0 h-screen flex justify-center items-center bg-black/30 backdrop:blur-xl"
//             >
//               <div className="flex relative justify-center items-center h-full w-full max-w-7xl max-h-[700px] bg-white rounded-lg">
//                 {children}
//                 <motion.button onClick={() => setOpen(false)}>
//                   <Button
//                     size="icon"
//                     className="rounded-full absolute top-4 right-4"
//                     variant={"outline"}
//                   >
//                     <X />
//                   </Button>
//                 </motion.button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default GridItem;
