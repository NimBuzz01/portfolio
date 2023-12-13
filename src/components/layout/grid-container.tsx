import { gridItems } from "@/config/grid-items";
import GridItem from "../grid-item";
import SocialItem from "../grid-items/social-item";
import ExperienceItem from "../grid-items/experience-item";
import ProjectItem from "../grid-items/project-item";
import SkillItem from "../grid-items/skill-item";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const GridContainer = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  // ANIMATION
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
              <SocialItem item={item} />
            ) : item.type === "experience" ? (
              <ExperienceItem item={item} />
            ) : item.type === "project" ? (
              <ProjectItem item={item} />
            ) : item.type === "skill" ? (
              <SkillItem item={item} />
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
