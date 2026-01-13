import { Card, CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Settings02Icon, Home01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <Card className="pointer-events-auto relative z-10 w-[90vw] max-w-md backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
        <CardContent className="flex flex-col gap-6 items-center text-center py-8">
          <HugeiconsIcon
            className="text-primary animate-[spin_3s_linear_infinite]"
            icon={Settings02Icon}
            size={80}
            strokeWidth={1.5}
          />

          <h1 className="text-3xl font-bold">Under Construction</h1>

          <p className="text-sm text-muted-foreground max-w-xs">
            This page is currently being built. Check back soon for updates!
          </p>

          <Link
            className="flex items-center gap-2 text-sm transition-colors outline-none hover:text-primary focus:text-primary active:text-primary active:brightness-125 mt-2"
            href="/"
          >
            <HugeiconsIcon icon={Home01Icon} size={18} />
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnderConstruction;
