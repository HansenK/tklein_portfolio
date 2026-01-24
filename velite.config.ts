import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      cover: s.string().optional(),
      tags: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      cover: s.string().optional(),
      blogPost: s.string().optional(),
      published: s.boolean().default(true),
    })
    .transform(computedFields),
});

const products = defineCollection({
  name: "Product",
  pattern: "products/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      cover: s.string().optional(),
      blogPost: s.string().optional(),
      published: s.boolean().default(true),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: "lib/velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: false,
  },
  collections: { posts, projects, products },
});
