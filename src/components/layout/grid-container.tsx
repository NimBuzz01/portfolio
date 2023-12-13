import { gridItems } from "@/config/grid-items";
import GridItem from "../grid-item";
import Social from "../grid-items/social";
import Experience from "../grid-items/experience";
import Project from "../grid-items/project";
import Skill from "../grid-items/skill";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const GridContainer = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0,
  });

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope]);

  return (
    <div
      ref={scope}
      className="w-full h-full overflow-y-scroll scrollbar-none scrollbar-thumb-neutral-500 scrollbar-track-gray-100 p-4 sm:p-6 grid grid-cols-4 auto-rows-[76px] gap-3 sm:gap-6"
    >
      {gridItems.map((item, index) => {
        return (
          <GridItem key={item.title + index} size={item.layout}>
            {item.type === "social" ? (
              <Social item={item} />
            ) : item.type === "experience" ? (
              <Experience item={item} />
            ) : item.type === "project" ? (
              <Project item={item} />
            ) : item.type === "skill" ? (
              <Skill item={item} />
            ) : (
              <div>Need to create new component type.</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default GridContainer;
