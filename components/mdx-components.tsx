/* eslint-disable react-hooks/static-components */
import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const Heading1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="text-3xl font-bold mt-6 mb-4 text-primary" {...props} />
);

const Heading2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />
);

const Heading3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="text-xl font-semibold mt-5 mb-2 text-foreground" {...props} />
);

const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="mb-4 leading-relaxed text-foreground/85" {...props} />
);

const UnorderedList = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="mb-4 space-y-2 list-disc list-inside" {...props} />
);

const OrderedList = (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className="mb-4 space-y-2 list-decimal list-inside" {...props} />
);

const ListItem = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="text-foreground/85" {...props} />
);

const Anchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="text-primary hover:underline transition-all"
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  />
);

const Code = (props: React.HTMLAttributes<HTMLElement>) => (
  <code
    className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
    {...props}
  />
);

const Pre = (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
    className="bg-muted border border-border p-4 rounded-md overflow-x-auto mb-4 text-sm"
    {...props}
  />
);

const Blockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className="border-l-4 border-muted-foreground pl-4 italic my-4 text-foreground/70"
    {...props}
  />
);

const Strong = (props: React.HTMLAttributes<HTMLElement>) => (
  <strong className="font-semibold text-foreground" {...props} />
);

const HorizontalRule = () => <hr className="my-6 border-border" />;

const components = {
  a: Anchor,
  blockquote: Blockquote,
  code: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  hr: HorizontalRule,
  li: ListItem,
  ol: OrderedList,
  p: Paragraph,
  pre: Pre,
  strong: Strong,
  ul: UnorderedList,
};

interface MDXContentProps {
  code: string;
}

export const MDXContent = ({ code }: MDXContentProps) => {
  // This pattern is necessary for MDX content rendering
  // The component is memoized and only recreated when code changes
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
};
