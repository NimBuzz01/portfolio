import { GridItemInterface } from "@/config/grid-items";
import Link from "next/link";
import React from "react";
import Icon from "../Icon";
import GridItemButton from "../GridItemButton";

const ProjectItem = ({ item }: { item: GridItemInterface }) => {
  return (
    <>
      {item.layout === "2x1" ? (
        <Link
          className="flex items-center gap-3"
          target="_blank"
          href={item.buttonLink ?? ""}
        >
          <Icon icon={item.icon ?? ""} />
          <div className="w-full text-lg font-semibold">{item.title}</div>
        </Link>
      ) : item.layout === "2x2" ? (
        <div>
          <div className="flex items-center justify-between">
            <Icon icon={item.icon ?? ""} />
            {item.layout === "2x2" && item.buttonTitle && (
              <Link href={item.buttonLink ?? ""} target="_blank">
                <GridItemButton
                  text={item.buttonTitle ?? ""}
                  color={item.color}
                />
              </Link>
            )}
          </div>
          <div className="mt-2">
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-neutral-500">{item.username}</div>
            {item.description && (
              <div className="mt-1 text-sm text-neutral-500 line-clamp-2">
                {item.description}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Need to create new component type.</div>
      )}
    </>
  );
};

export default ProjectItem;