import { motion } from "framer-motion";
import React from "react";
import { FaGamepad } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = (props) => {

    return (
        <>

            {props.overSize === true ? (
                <motion.div
                    id="btn"
                    initial={{ y: "-500px" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 6, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="px-10 py-10 bg-black rounded-none cursor-pointer flex items-center justify-center"
                >
                    <h1 className="text-white mr-2">{props.passedText} </h1>
                    {props.icon ? (
                        <FaGamepad color="white" size="30px" />
                    ) : (
                        <FaArrowRightLong color="white" size="15px" />
                    )}
                </motion.div>
            ) : (
                <motion.div
                    id="btn"
                    initial={{ y: "-500px" }}

                    animate={{ y: 0 }}
                    transition={{ delay: 6, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="px-3 py-2 bg-black rounded-full cursor-pointer flex items-center justify-center"
                >
                    {props.icon ? (
                        <FaGamepad color="white" size="30px" />
                    ) : (
                        <FaArrowRightLong color="white" size="15px" />
                    )}
                    <h1 className="text-white mx-2 ">{props.passedText} </h1>

                </motion.div>
            )}
        </>
    );
};

export default Button;
