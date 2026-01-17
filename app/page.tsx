import ThemeButton from "@/components/theme-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  User03Icon,
  ShoppingBag01Icon,
  Folder01Icon,
  BloggerIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <ThemeButton />
      <div className="flex justify-center items-center h-screen relative">
        <Card className="pointer-events-auto relative z-10 w-[90vw] max-w-fit min-h-fit backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
          <CardContent className="grow flex flex-col md:flex-row gap-6 md:gap-14 items-center text-center md:text-left">
            <Avatar className="rounded-full size-32 md:size-52">
              <AvatarImage src="/profile.jpg" />
            </Avatar>

            <div className="flex flex-col gap-6 md:gap-10 w-full items-center md:items-start">
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold">Thiago Klein</h1>
                <p className="text-xl text-primary">Software Engineer</p>
              </div>

              <nav className="flex flex-col md:flex-row justify-center md:justify-start gap-3 items-center">
                <Link
                  className="flex items-center gap-1.5 text-sm transition-colors outline-none hover:text-primary focus:text-primary active:text-primary active:brightness-125"
                  href="/about"
                >
                  <HugeiconsIcon icon={User03Icon} size={16} />
                  About
                </Link>
                <span aria-hidden="true" className="hidden md:block">
                  |
                </span>
                <Link
                  className="flex items-center gap-1.5 text-sm transition-colors outline-none hover:text-primary focus:text-primary active:text-primary active:brightness-125"
                  href="/products"
                >
                  <HugeiconsIcon icon={ShoppingBag01Icon} size={16} />
                  Products
                </Link>
                <span aria-hidden="true" className="hidden md:block">
                  |
                </span>
                <Link
                  className="flex items-center gap-1.5 text-sm transition-colors outline-none hover:text-primary focus:text-primary active:text-primary active:brightness-125"
                  href="/projects"
                >
                  <HugeiconsIcon icon={Folder01Icon} size={16} />
                  Projects
                </Link>
                <span aria-hidden="true" className="hidden md:block">
                  |
                </span>
                <Link
                  className="flex items-center gap-1.5 text-sm transition-colors outline-none hover:text-primary focus:text-primary active:text-primary active:brightness-125"
                  href="/blog"
                >
                  <HugeiconsIcon icon={BloggerIcon} size={16} />
                  Blog
                </Link>
              </nav>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
