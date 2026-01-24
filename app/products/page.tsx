import { products } from "@/lib/velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ShoppingBag01Icon } from "@hugeicons/core-free-icons";
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
            <CardHeader className="border-b border-border">
              <CardTitle className="text-2xl">Products</CardTitle>
              <CardDescription>
                Tools and applications I&apos;ve built
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-3">
              {publishedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={ShoppingBag01Icon}
                      size={32}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No products yet</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Products will appear here once they are published. Check
                    back soon for updates!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {publishedProducts.map((product) => (
                    <Card
                      key={product.slug}
                      className="overflow-hidden group hover:ring-primary/50 transition-all mx-1"
                    >
                      {product.cover && (
                        <div className="relative aspect-video bg-muted overflow-hidden m-2 rounded-sm">
                          <Image
                            fill
                            alt={product.title}
                            className="object-cover transition-transform group-hover:scale-105"
                            src={product.cover}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {product.title}
                        </CardTitle>
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
