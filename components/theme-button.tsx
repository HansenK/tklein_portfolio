"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration error by checking if the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="outline"
        className="absolute top-4 right-4"
        disabled
      >
        <HugeiconsIcon icon={Sun03Icon} />
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className="absolute top-4 right-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <HugeiconsIcon icon={theme === "dark" ? Moon02Icon : Sun03Icon} />
    </Button>
  );
};

export default ThemeButton;
