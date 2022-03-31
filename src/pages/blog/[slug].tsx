import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, Blog } from "contentlayer/generated";

interface Props {
  blog: Blog;
}

const Blog = ({ blog }: Props) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <>
      <div>{JSON.stringify(blog, null, 2)}</div>
      <MDXContent />
    </>
  );
};
export const getStaticPaths = async () => {
  const paths = allBlogs.map((b) => ({ params: { slug: b.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const blog = allBlogs.find((b) => b.slug === params.slug);
  return { props: { blog } };
};
