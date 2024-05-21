import Head from "next/head";
import React from "react";
import Heading from "../../components/global/Heading";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>Read Our Blogs</Head>
      <Heading margin={60}>Read Our Blogs</Heading>
      <section className="px-4 md:px-16 grid md:grid-cols-3 gap-16 cursor-pointer">
        {blogs?.map((blog, index) => (
          <Link key={index} href={`/blogs/${blog.slug}`}>
            <article key={index} className="border-2 p-4 rounded-lg">
              <img
                className="w-full mb-4"
                src={blog.meta.image}
                alt={blog.meta.title}
              />
              <p className="font-medium text-lg">{blog.meta.title}</p>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Blogs;


export async function getServerSideProps() {
  const blogDir = "pages/post";
  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
