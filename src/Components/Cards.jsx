
import { motion, useTransform } from 'framer-motion';
import React from 'react';

const Cards = ({ title, description, link, color, src, i, targetScale, progress, range }) => {
    const scale = useTransform(progress, range, [1, targetScale])
    return (
        <div id='card-con' className='h-[100vh] flex items-center justify-center sticky top-0'>
            <motion.div style={{ scale, top: `calc(-10% + ${i * 35}px)` }} className='w-[1200px] h-[600px] relative rounded-3xl flex items-center justify-center' id='card'>


                <div id="lower-most" className='w-1/2 mt-20'>
                    <div id="title" className=' h-[100px] flex items-center ml-10'>
                        <h1 className='text-5xl font-extrabold text-black'>{title}</h1>
                    </div>
                    <div id="description" className='w-full h-[500px] px-10 '>
                        <p className='text-black w-full h-[15%]'>{description}</p>
                        <a href={link} className='text-white px-5 py-3 mt-5 bg-black'>Visit {title}</a>
                    </div>

                </div>
                <div id='img-area' className='w-1/2 flex items-center justify-center'>
                    <img src={src} alt="" className='rounded-lg h-[300px]' />
                </div>
            </motion.div>
        </div>
    );
};

export default Cards;
