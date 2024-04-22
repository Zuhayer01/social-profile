// import React from "react";
// import { motion } from "framer-motion";

// const Loader = (props) => {
//   return (
//     <>
//       <motion.div
//         id="loader"
//         initial={{ x: "0%" }}
//         animate={{ x: "-100%" }}
//         transition={{ duration: 2, delay: 4, ease: [0.76, 0, 0.24, 1] }}
//         className="w-full h-[100vh] flex items-center absolute justify-center bg-white overflow-hidden"
//       >
//         <motion.div
//           id="loader"
//           initial={{ x: "100%" }}
//           animate={{ x: "0%" }}
//           transition={{ duration: 2, delay: 0, ease: [0.76, 0, 0.24, 1] }}
//           className="w-full h-[100vh] flex items-center justify-center flex-col bg-black"
//         >
//           <motion.h1 className="text-white text-4xl overflow-hidden">
//             {props.loaderText.split("").map((item, index) => {
//               return (
//                 <motion.span
//                   className="inline-block mx-1 "
//                   initial={{ y: "-100%", opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{
//                     delay: 2 + index * 0.03,
//                     ease: [0.33, 1, 0.68, 1],
//                   }}
//                   key={index}
//                 >
//                   {item}
//                 </motion.span>
//               );
//             })}
//             <h2 className="text-sm">Showing Off My skills**</h2>
//           </motion.h1>
//           <div id="Outloader" className="w-1/4 h-[5px] mt-6 bg-white">
//             <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ delay: 1.3, ease: [0.76, 0, 0.24, 1], duration: 2 }} id="inloader" className="w-[80%] h-[5px] bg-black" ></motion.div>
//           </div>
//         </motion.div >
//       </motion.div >
//     </>
//   );
// };

// export default Loader;

import React from "react";
import { motion } from "framer-motion";

const Loader = (props) => {
  return (
    <>
      <motion.div
        id="loader"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, delay: 4, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-[100vh] flex items-center absolute justify-center bg-white overflow-hidden"
      >
        <motion.div
          id="loader"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, delay: 0, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-[100vh] flex items-center justify-center flex-col bg-black"
        >
          <motion.h1 className="text-white text-4xl overflow-hidden">
            {props.loaderText.split("").map((item, index) => {
              return (
                <motion.span
                  className="inline-block mx-1 "
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 2 + index * 0.03,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </motion.h1>
          <h2 className="text-sm text-white text-left w-[200px]">Showing Off My skills**</h2>
          <div id="Outloader" className="w-1/4 h-[5px] mt-6 bg-white">
            <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ delay: 1.3, ease: [0.76, 0, 0.24, 1], duration: 2 }} id="inloader" className="w-[80%] h-[5px] bg-black" ></motion.div>
          </div>
        </motion.div >
      </motion.div >
    </>
  );
};

export default Loader;
