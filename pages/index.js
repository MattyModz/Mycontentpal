import Hero from "../src/componants/Hero/index";
import Tweets from "../src/componants/Testamonial/tweets";
import Product from "../src/componants/Product";
import Body from "../src/componants/body";
import Cards from "../src/componants/Cards";
import CTA from "../src/componants/Layout/CTA";
import Blogcard from "../src/componants/Blog";
import { sanityClient } from "../sanity";
// import TLBHome from "../src/componants/TLBhome";
// import TLBHhome from "../src/componants/TLBhome";
export default function Home({ posts }) {
  return (
    <>
      <Hero />

      <Body />
      <CTA />
      <Product />

      <Tweets />
      <Cards />

      <Blogcard posts={posts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"][0..0]{
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
