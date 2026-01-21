"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BloggerIcon,
  Folder01Icon,
  Home01Icon,
  Moon02Icon,
  ShoppingBag01Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", icon: Home01Icon, label: "Home" },
  { href: "/products", icon: ShoppingBag01Icon, label: "Products" },
  { href: "/projects", icon: Folder01Icon, label: "Projects" },
  { href: "/blog", icon: BloggerIcon, label: "Blog" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Filter out the current page from the nav links
  const visibleLinks = navLinks.filter((link) => !isCurrentPage(link.href));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-auto fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-stretch gap-3">
      <nav
        className={cn(
          "flex items-center gap-1 px-4 py-2 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-md bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.15)] shadow-lg"
            : "backdrop-blur-sm bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]"
        )}
      >
        {visibleLinks.map((link, index) => (
          <div key={link.href} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="mx-2 text-muted-foreground">
                |
              </span>
            )}
            <Link
              className="flex items-center gap-1.5 text-sm transition-colors outline-none hover:text-primary focus:text-primary"
              href={link.href}
            >
              <HugeiconsIcon icon={link.icon} size={16} />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          </div>
        ))}
      </nav>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={!mounted}
            size="icon"
            variant="outline"
            className={cn(
              "h-auto w-10 transition-all duration-300 border-0",
              isScrolled
                ? "backdrop-blur-md bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.15)] shadow-lg"
                : "backdrop-blur-sm bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]"
            )}
            onClick={() => {
              const scrollY = window.scrollY;
              setTheme(theme === "dark" ? "light" : "dark");
              requestAnimationFrame(() => {
                window.scrollTo(0, scrollY);
              });
            }}
          >
            <HugeiconsIcon
              icon={!mounted || theme === "dark" ? Sun03Icon : Moon02Icon}
              size={16}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change to {theme === "light" ? "dark" : "light"} mode</p>
        </TooltipContent>
      </Tooltip>
    </header>
  );
};

export default Navbar;
