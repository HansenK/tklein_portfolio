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
              <div className="flex flex-col gap-6">
                {publishedProjects.map((project, index) => (
                  <Card
                    key={project.slug}
                    className="overflow-hidden group hover:ring-primary/50 transition-all"
                  >
                    <div
                      className={`flex flex-col md:flex-row ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Image Section */}
                      <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[200px] bg-muted overflow-hidden">
                        {project.cover ? (
                          <Image
                            fill
                            alt={project.title}
                            className="object-cover transition-transform group-hover:scale-105"
                            src={project.cover}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div
                        className={`flex flex-col justify-center w-full md:w-1/2 p-6 ${
                          index % 2 === 1 ? "md:text-right md:items-end" : ""
                        }`}
                      >
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        {project.blogPost && (
                          <Link
                            className={`flex items-center gap-1 text-sm text-primary hover:underline w-fit ${
                              index % 2 === 1 ? "flex-row-reverse" : ""
                            }`}
                            href={`/blog/${project.blogPost}`}
                          >
                            {index % 2 === 1 ? (
                              <>
                                Read more
                                <HugeiconsIcon
                                  icon={ArrowLeft01Icon}
                                  size={14}
                                />
                              </>
                            ) : (
                              <>
                                Read more
                                <HugeiconsIcon
                                  icon={ArrowRight01Icon}
                                  size={14}
                                />
                              </>
                            )}
                          </Link>
                        )}
                      </div>
                    </div>
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
