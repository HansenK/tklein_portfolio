import { posts } from "@/lib/velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | TKlein Portfolio",
  description: "Blog posts by Thiago Klein",
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPage = () => {
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-20 pb-12 px-4">
      <div className="w-full max-w-3xl">
        <Card className="pointer-events-auto relative z-10 backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl">Blog</CardTitle>
            <CardDescription>
              Thoughts, tutorials, and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-3">
            {publishedPosts.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No posts yet. Check back soon!
              </p>
            ) : (
              publishedPosts.map((post) => (
                <Link
                  key={post.slug}
                  className="group block"
                  href={`/blog/${post.slugAsParams}`}
                >
                  <Card className="transition-all hover:ring-primary/50 group-focus:ring-primary/50">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <HugeiconsIcon icon={Calendar02Icon} size={14} />
                        {formatDate(post.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p className="text-sm text-muted-foreground">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
