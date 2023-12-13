import { GridItemInterface } from "@/config/grid-items";
import GridItemButton from "../grid-item-button";
import Link from "next/link";
import Icon from "../icon";

const Social = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Icon icon={item.icon ?? { default: "" }} />
        {item.layout === "2x2" && item.buttonTitle && (
          <Link href={item.buttonLink ?? ""} target="_blank">
            <GridItemButton text={item.buttonTitle ?? ""} color={item.color} />
          </Link>
        )}
      </div>
      <div className="mt-2">
        <div className="text-lg font-semibold">{item.title}</div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          {item.username}
        </div>
        {item.description && (
          <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
            {item.description}
          </div>
        )}
        {item.layout === "1x2" && (
          <div className="mt-2">
            <Link href={item.buttonLink ?? ""} target="_blank">
              <GridItemButton
                text={item.buttonTitle ?? ""}
                color={item.color}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
