import React from 'react'

function Experience() {
    const expData = [{
        value: "FCC",
        title: "Certified"
    }, {
        value: 31,
        title: "Projects Done"
    }, {
        value: "2+",
        title: "Years Of Ex."
    },]
    return (
        <>
            <div className='w-full h-[25vh] mt-16 flex items-center justify-center'>
                {expData.map((innerobj, index) => {
                    return (
                        <div id='exp-div' className='w-[300px] h-[200px]  mx-6 flex items-center justify-center flex-col' key={index}>
                            <h1 className='text-4xl text-[#168181]'>{innerobj.value}</h1>
                            <h1>{innerobj.title}</h1>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Experience