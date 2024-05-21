import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Heading from "../../components/global/Heading";
import Footer from "../../components/global/Footer";
import Accordian from "../../components/global/Accordian";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("pages/post"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markdownFile = fs.readFileSync(
    path.join("pages/post", params.slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};

const BlogPost = ({ frontMatter, mdxSource }) => {
  return ( <> 
    <div className="flex justify-center">
      <div className="lg:w-[60%]">
        <Heading margin={60}>{frontMatter.title}</Heading>
        <div className="mx-auto p-6">
          <div className="prose prose-sm md:prose-base lg:prose-lg">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
      </div>
    </div>
    <Heading margin={2}>Frequently Asked Questions</Heading>
    <Accordian />
    <Footer/>
    </>
  );
};

export default BlogPost;
