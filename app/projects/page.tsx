import { projects } from "@/lib/velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Folder01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | TKlein Portfolio",
  description: "Projects by Thiago Klein",
};

const ProjectsPage = () => {
  const publishedProjects = projects.filter((project) => project.published);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-20 pb-12 px-4">
        <div className="w-full max-w-4xl">
          <Card className="pointer-events-auto relative z-10 backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-2xl">Projects</CardTitle>
              <CardDescription>
                A collection of my personal and professional projects
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-3">
              {publishedProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={Folder01Icon}
                      size={32}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No projects yet</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Projects will appear here once they are published. Check
                    back soon for updates!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 pt-1">
                  {publishedProjects.map((project, index) => (
                    <Card
                      key={project.slug}
                      className="overflow-hidden group hover:ring-primary/50 transition-all mx-1"
                    >
                      <div
                        className={`flex flex-col md:flex-row ${
                          index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Image Section */}
                        <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[200px] bg-muted overflow-hidden m-2 rounded-sm">
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
    </>
  );
};

export default ProjectsPage;
