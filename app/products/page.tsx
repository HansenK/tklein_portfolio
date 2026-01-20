import { products } from "@/lib/velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | TKlein Portfolio",
  description: "Products by Thiago Klein",
};

const ProductsPage = () => {
  const publishedProducts = products.filter((product) => product.published);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-20 pb-12 px-4">
        <div className="w-full max-w-4xl">
          <Card className="pointer-events-auto relative z-10 backdrop-blur-sm shadow-2xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] rounded-md">
            <CardHeader className="border-b">
              <CardTitle className="text-2xl">Products</CardTitle>
              <CardDescription>
                Tools and applications I&apos;ve built
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-3">
            {publishedProducts.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No products yet. Check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {publishedProducts.map((product) => (
                  <Card
                    key={product.slug}
                    className="overflow-hidden group hover:ring-primary/50 transition-all"
                  >
                    {product.cover && (
                      <div className="relative aspect-video bg-muted overflow-hidden">
                        <Image
                          fill
                          alt={product.title}
                          className="object-cover transition-transform group-hover:scale-105"
                          src={product.cover}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      {product.blogPost && (
                        <Link
                          className="flex items-center gap-1 text-sm text-primary hover:underline w-fit"
                          href={`/blog/${product.blogPost}`}
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
    </>
  );
};

export default ProductsPage;
