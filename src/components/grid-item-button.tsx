import { Button } from "./ui/button";

const GridItemButton = ({
  text,
  color = "#070707",
}: {
  text: string;
  color?: string;
}) => {
  return (
    <Button variant="outline" size="xs">
      {text}
    </Button>
  );
};

export default GridItemButton;
