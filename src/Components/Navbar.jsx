import React from 'react'
import Button from './Button'
import { motion } from "framer-motion";
const Navbar = (props) => {
    const home = "Home"
    const about = "About Me"
    const ptf = "Portfolio"
    return (
        <>
            <div id='nav-container' className='w-full h-[12vh] flex items-center justify-center '>
                <motion.div initial={{ width: "0" }} animate={{ width: "700px" }} transition={{ delay: 5.6, duration: 1.2 }} id="wrapper" className='w-[700px] h-[7vh] flex items-center justify-around overflow-hidden sticky'>
                    <h1 id='logo' className='text-xl mt-3'> {props.logoText.split("").map((item, index) => {
                        return (
                            <motion.span
                                id='logo'
                                className="inline-block cursor-pointer"
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 7 + index * 0.03,
                                    ease: [0.33, 1, 0.68, 1],
                                }}
                                key={index}
                            >
                                {item}
                            </motion.span>
                        );
                    })} </h1>

                    <ul className='overflow-hidden'>
                        <motion.li initial={{ y: "500px" }} animate={{ y: "0%" }} transition={{ delay: 7.2, duration: 0.5 }} className='inline-block mx-3'><a href="">Home</a></motion.li>
                        <motion.li initial={{ y: "500px" }} animate={{ y: "0%" }} transition={{ delay: 7.3, duration: 0.5 }} className='inline-block mx-3'><a href="">About Me</a></motion.li>
                        <motion.li initial={{ y: "500px" }} animate={{ y: "0%" }} transition={{ delay: 7.4, duration: 0.5 }} className='inline-block mx-3'><a href="">Projects</a></motion.li>

                    </ul>
                    <Button passedText={"Playground"} icon={true} overSize={false} />
                </motion.div>
            </div>
        </>
    )
}

export default Navbar