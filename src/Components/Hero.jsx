import { motion } from "framer-motion";
import React from "react";
import Button from './Button'
import { FaBook } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div id="hero" className="mt-20 w-full flex justify-center items-center flex-col">
                <div
                    id="heroText"
                    className=" flex items-center justify-center flex-col overflow-hidden"
                >
                    <div id="upper-text" className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "900px", opacity: 0 }}
                            animate={{ y: "0px", opacity: 1 }}
                            transition={{ duration: 1, delay: 7 }}
                            className="text-[70px] text-center leading-none  font-light"
                        >
                            Hello, I'm <span id="logo">Zuhayer,</span>
                        </motion.h1>
                    </div>
                    <motion.h1
                        initial={{ y: "900px", opacity: 0 }}
                        animate={{ y: "0px", opacity: 1 }}
                        transition={{ duration: 1, delay: 7 }}
                        className="text-[70px] text-center leading-none font-light"
                    >
                        A Web Developer
                    </motion.h1>
                </div>
                <div id="hero-desc" className="w-2/5 h-[10vh] flex items-center justify-center">
                    <p className="text-center">Passionate web developer crafting digital experiences with code. Transforming ideas into seamless, user-centric websites. Let's build something extraordinary together.</p>
                </div>
                <div className="h-[5vh] flex items-center justify-center overflow-hidden">
                    <Button passedText={"Learn More"} icon={false} overSize={true} />
                </div>

            </div>
        </>
    );
};

export default Hero;
