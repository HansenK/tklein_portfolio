import { projects } from "@/lib/velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | TKlein Portfolio",
  description: "Projects by Thiago Klein",
};

const ProjectsPage = () => {
  const publishedProjects = projects.filter((project) => project.published);

  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4">
      <div className="w-full max-w-4xl">
        <Card className="pointer-events-auto relative z-10 backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
          <CardHeader className="border-b">
            <div className="flex items-center gap-4">
              <Link
                className="flex items-center gap-2 text-sm transition-colors outline-none hover:text-primary focus:text-primary"
                href="/"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
              </Link>
              <div>
                <CardTitle className="text-2xl">Projects</CardTitle>
                <CardDescription>
                  A collection of my personal and professional projects
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {publishedProjects.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No projects yet. Check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {publishedProjects.map((project) => (
                  <Card
                    key={project.slug}
                    className="overflow-hidden group hover:ring-primary/50 transition-all"
                  >
                    {project.cover && (
                      <div className="relative aspect-video bg-muted overflow-hidden">
                        <Image
                          fill
                          alt={project.title}
                          className="object-cover transition-transform group-hover:scale-105"
                          src={project.cover}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      {project.blogPost && (
                        <Link
                          className="flex items-center gap-1 text-sm text-primary hover:underline w-fit"
                          href={`/blog/${project.blogPost}`}
                        >
                          Read more
                          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
