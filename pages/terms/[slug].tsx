import { GetStaticProps } from "next";
import { getClient, sanityClient } from "../../sanity";
import { Pheripheal } from "../../typings";
// import { motion } from "framer-motion";
import PortableText from "react-portable-text";

import { usePreviewSubscription } from "../../sanity";
function filterDataToSingleItem(data: Pheripheal, preview) {
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

function Pheripheal({ data, preview }) {
  console.log(data);
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return (
    <main className=" mx-auto bg-body-dark text-white h-screen">
      {/* {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>} */}
      <article className="container flex justify-center font-inter text-2xl lg:text-6xl py-8">
        {page?.title && <h1>{page.title}</h1>}
      </article>
      <PortableText
        className="p-24 container"
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
        content={page?.body}
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
    </main>
  );
}

export default Pheripheal;

export const getStaticPaths = async () => {
  const query = `*[_type == "pheripheal"]{
    _id,
    slug {
        current
    }
}`;

  const page = await sanityClient.fetch(query);

  const paths = page.map((pheripheal: Pheripheal) => ({
    params: {
      slug: pheripheal.slug.current,
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
  const query = `*[_type == "pheripheal" && slug.current == $slug]{
    _id,
 
    title,
  
 description,

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

  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      data: { page, query, queryParams },
    },
    revalidate: 60,
  };
};

//  urlFor;
