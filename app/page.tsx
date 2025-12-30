import ParticleNetworkBackground from "@/components/particle-network-background";
import ThemeButton from "@/components/theme-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <ParticleNetworkBackground
        numberOfParticles={150}
        gridCellSize={25}
        mouseConnectionRange={150}
      />
      <Card className="min-w-[650px] min-h-[250px] backdrop-blur-sm shadow-2x bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
        <CardContent className="grow flex flex-row gap-14 items-center">
          <Avatar className="rounded-full size-52">
            <AvatarImage src="/profile.jpg" />
          </Avatar>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold">Thiago Klein</h1>
              <p className="text-xl text-primary">Software Engineer</p>
            </div>

            <div className="flex gap-3 items-center">
              <Link href="/about" className="text-sm line-through">
                About
              </Link>
              <p>|</p>
              <Link href="/products" className="text-sm line-through">
                Products
              </Link>
              <p>|</p>
              <Link href="/projects" className="text-sm line-through">
                Projects
              </Link>
              <p>|</p>
              <Link href="/blog" className="text-sm line-through">
                Blog
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
