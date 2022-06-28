import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";
interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
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
