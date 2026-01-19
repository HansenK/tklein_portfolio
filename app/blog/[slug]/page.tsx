import { posts } from "@/lib/velite";
import { MDXContent } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slugAsParams === slug);
};

export const generateStaticParams = async () => {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
};

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | TKlein Portfolio",
    };
  }

  return {
    title: `${post.title} | TKlein Portfolio`,
    description: post.description,
  };
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4">
      <div className="w-full max-w-3xl">
        <Card className="pointer-events-auto relative z-10 backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
          <CardHeader className="border-b">
            <div className="flex flex-col gap-4">
              <Link
                className="flex items-center gap-2 text-sm transition-colors outline-none hover:text-primary focus:text-primary w-fit"
                href="/blog"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
                Back to Blog
              </Link>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-2xl md:text-3xl">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <HugeiconsIcon icon={Calendar02Icon} size={14} />
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <article className="prose prose-sm dark:prose-invert max-w-none">
              <MDXContent code={post.body} />
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostPage;
