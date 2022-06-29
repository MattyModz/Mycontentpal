import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";
interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <div className="  test s:h-screen bg-body-dark text-white mb-8 ">
      <section className="mx:auto s:h-full   px-8 container lg:w-3/4 s:w-full lg:text-8xl text-5xl font-inter -mt-40 pt-64 pb-32 text-center">
        <div className="font-inter  ">
          High-quality content{" "}
          <span className="text-orange-500">that doesnt break the bank</span>
        </div>
        <p className="relative font-interr justify-center flex z-20  mt-6 text-base text-white xl:text-xl  sm:text-center lg:text-center ">
          Content researched prepped and delievered faster than you can say
          surfer SEO
        </p>
        <div className="relative justify-center flex mt-4">
          <a
            href="#_"
            className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow lg:py-4 hover:bg-[#169CF9] focus:outline-none focus:border-[#169CF9] focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <a
            href="#_"
            className="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-[#169CF9] focus:outline-none md:text-lg xl:text-xl"
          >
            <svg
              className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-[#169CF9]">How It Works</span>
          </a>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <div className="flex flex-row space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-90deg-up"
              viewBox="0 0 16 16"
              transform="rotate(-10 50 100)"
            >
              <path
                fillRule="evenodd"
                d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
              />
            </svg>

            <p className="container  font-writing -rotate-6 text-xl">
              Get better content
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`} passHref>
            <div className="">
              <img
                src={urlFor(post.mainImage).url()!}
                alt=""
                width={500}
                height={500}
              />
              <div>
                <p>{post.title}</p>
                <p>
                  {post.description} by {post.author.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,

  author -> {
  name,
  image
},
description,
mainImage,
slug
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
