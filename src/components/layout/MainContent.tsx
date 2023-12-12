import { gridItems } from "@/config/grid-items";
import React from "react";
import GridItem from "../GridItem";
import SocialItem from "../GridItems/SocialItem";
import ExperienceItem from "../GridItems/ExperienceItem";
import ProjectItem from "../GridItems/ProjectItem";
import SkillItem from "../GridItems/SkillItem";

const MainContent = () => {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-none scrollbar-thumb-neutral-500 scrollbar-track-gray-100 p-6 grid grid-cols-4 auto-rows-[76px] gap-6">
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

export default MainContent;
