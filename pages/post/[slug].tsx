import { GetStaticProps } from "next";
import {
  getClient,
  sanityClient,
  urlFor,
  usePreviewSubscription,
} from "../../sanity";
import { Post } from "../../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import Link from "next/link";

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Post({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.post,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const post = filterDataToSingleItem(previewData, preview);

  return (
    <main className="p-5 mx-auto bg-body-dark text-white">
      {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>}
      <article className="container ">
        {" "}
        <motion.div
          className=""
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
          viewport={{ once: true }}
        >
          {post?.title && (
            <h1 className="text-3xl mt-10 mb-3 font-interr font-bold p-5 mx-auto">
              {post.title}
            </h1>
          )}

          {post?.description && (
            <h2 className="text-xl font-light text-gray-200 mb-2">
              {post.description}
            </h2>
          )}
          <div className="flex items-center space-x-2">
            {post?.author.image && (
              <img
                className="h-10 w-10 rounded-full"
                src={urlFor(post.author.image).url()!}
                alt=""
              />
            )}
            <p className="font-extralight text-sm">
              Blog post by{" "}
              {post?.author.name && (
                <span className="text-orange-600">{post?.author.name}</span>
              )}{" "}
              - published at {new Date(post?._createdAt).toLocaleDateString()}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
          viewport={{ once: true }}
        >
          <PortableText
            className="py-8"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-6xl font-bold my-5" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="text-4xl font-bold my-5" {...props} />
              ),
              h3: (props: any) => (
                <h2 className="text-3xl font-bold my-5" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc"> {children} </li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-400 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </motion.div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
}`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const query = `*[_type == "post" && slug.current == $slug]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image,
    },
 description,
 mainImage,
 slug,
 body
}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const post = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { post, query, queryParams },
    },
    revalidate: 60,
  };
};

//  urlFor;
