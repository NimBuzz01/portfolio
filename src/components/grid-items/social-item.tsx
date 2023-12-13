import { GridItemInterface } from "@/config/grid-items";
import Icon from "../icon";
import GridItemButton from "../grid-item-button";
import Link from "next/link";

const SocialItem = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Icon icon={item.icon ?? ""} />
        {item.layout === "2x2" && item.buttonTitle && (
          <Link href={item.buttonLink ?? ""} target="_blank">
            <GridItemButton text={item.buttonTitle ?? ""} color={item.color} />
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

export default SocialItem;
