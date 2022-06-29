import Hero from "../src/componants/Hero/index";
import Tweets from "../src/componants/Testamonial/tweets";
import Product from "../src/componants/Product";
import Body from "../src/componants/body";
import Cards from "../src/componants/Cards";
// import Test from "../src/componants/Testamonial/Testamonial";
// import TLBHhome from "../src/componants/TLBhome";
export default function Home() {
  return (
    <>
      <Hero />

      <Body />
      {/* <Test /> */}
      <Product />
      <Tweets />
      <Cards />

      {/* <div className="">
        <Reviews reviews={customerreview} />
      </div>
      <div className="px-4">
  
      </div> */}
      {/* 
      <FAQ /> */}
      {/* 
      <Container>
        <h3 className="mt-16  bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600   justify-center  pb-5 text-5xl font-extrabold  text-transparent sm:text-5xl sm:text-6xl md:text-7xl ">
          Keep Upto date
        </h3>
        <Bcomp1 posts={posts} />
      </Container> */}
    </>
  );
}

// export async function getStaticProps() {
//   const { data: review } = await client.query({
//     query: REVIEWS,
//   });
//   const { data: post } = await client.query({
//     query: BLOG_COMP,
//   });

//   return {
//     props: {
//       customerreview: review.reviews.nodes,
//       posts: post.posts.nodes,
//     },
//     revalidate: 10,
//   };
// }

//  <Container className="">
//    <Charting />
//  </Container>;

// <h1>React Accordion Demo</h1>
//     <div className="accordion text-white">
//       {accordionData.map(({ title, content }) => (
//         <Accordion title={title} content={content} />
//       ))}
//     </div>
