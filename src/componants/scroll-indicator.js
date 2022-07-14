// import { useEffect, useState } from "react";

// const useReadingProgress = () => {
//   const [completion, setCompletion] = useState(0);

//   useEffect(() => {
//     const updateScrollCompletion = () => {
//       const currentProgress = window.scrollY;
//       const scrollHeight = document.body.scrollHeight - window.innerHeight;
//       if (scrollHeight) {
//         setCompletion(
//           Number((currentProgress / scrollHeight).toFixed(2)) * 100
//         );
//       }
//     };

//     window.addEventListener("scroll", updateScrollCompletion);

//     return () => {
//       window.removeEventListener("scroll", updateScrollCompletion);
//     };
//   }, []);

//   return completion;
// };

// export default useReadingProgress;

//        <span
//          style={{ transform: `translateX(${completion - 100}%)` }}
// //          className="absolute bg-gradient-to-br from-[#FB8753] to-[#FB7877] h-0.5 w-full bottom-0"
// //        />;

//   const completion = useReadingProgress();
