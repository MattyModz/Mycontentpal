import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/footer";
import Header from "../src/componants/Header/header";
// import client from "../lib/apollo";
// import { ApolloProvider } from "@apollo/client";
import ContextProvider from "../Context/Context";

// import ContextProvidermodal from "../Context/Contextmodal";

// import { hotjar } from "react-hotjar";
// import { useEffect } from "react";

// import { useRouter } from "next/router";
// import Loading from "../src/componants/Loading";

//  deconstructor router arument in app props.
function MyApp({ Component, pageProps, router }) {
  // const [loading, setLoading] = useState(true);
  // const [loadinginit, setLoadinginit] = useState(true);
  // const routers = useRouter();
  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== routers.pathname ? setLoading(true) : setLoading(false);
  //   };
  //   const handleComplete = (url) => setLoading(false);

  //   routers.events.on("routeChangeStart", handleStart);
  //   routers.events.on("routeChangeComplete", handleComplete);
  //   routers.events.on("routeChangeError", handleComplete);
  // }, [routers]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadinginit(false);
  //   }, 2300);
  // }, []);

  return (
    <>
      <div>
        <ContextProvider>
          <Header />

          <AnimatePresence exitBeforeEnter>
            {/* <Loading loading={loading} /> */}

            <Component {...pageProps} key={router.route} />
          </AnimatePresence>

          <Footer />
        </ContextProvider>
      </div>
    </>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
// <Loading loadinginit={loadinginit} />;
