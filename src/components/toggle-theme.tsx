"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setTheme(checked ? "light" : "dark");
  }, [checked]);

  return (
    <div className="flex items-center gap-1 transition-all">
      {checked ? <Sun size={20} /> : <Moon size={20} />}
      <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
  );
};

export default ToggleTheme;
