import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Accordian from '../components/global/Accordian'
import Heading from '../components/global/Heading'
const Home = ({ posts }) => {
  return (
    <>
      <div className='flex justify-center'>
        <div className="sm:w-4/5 md:w-3/5 mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-3 ">
          {posts.map((post, index) => (
            <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="card cursor-pointer max-w-[250px]">
                <div className="">
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    width={250}
                    height={250}
                    objectFit="cover"
                  />
                </div>
                <div className="card-body p-5">
                  <h5 className="text-xl font-semibold">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div >
      <Heading>Frequently Asked Questions</Heading>
      <Accordian />
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home
