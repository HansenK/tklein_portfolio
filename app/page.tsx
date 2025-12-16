import ThemeButton from "@/components/theme-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-gray-950 relative">
      <Card className="min-w-[600px] min-h-[250px] backdrop-blur-xs shadow-2x bg-[rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-800 dark:bg-[rgba(255,255,255,0.05)] rounded-sm">
        <CardContent className="grow flex flex-row gap-14 items-center">
          <Avatar className="rounded-full size-52 border-2 border-gray-300 dark:border-gray-800">
            <AvatarImage src="/profile.jpg" />
          </Avatar>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold">Thiago Klein</h1>
              <p className="text-xl text-primary">Software Engineer</p>
            </div>

            <div className="flex gap-3 items-center">
              <Link href="/about" className="text-sm">
                About
              </Link>
              <p>|</p>
              <Link href="/products" className="text-sm">
                Products
              </Link>
              <p>|</p>
              <Link href="/projects" className="text-sm">
                Projects
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <ThemeButton />
    </div>
  );
};

export default Page;
