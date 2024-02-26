import Image from 'next/image'
const data = [
    {
        ImageUrl: "/people/person1.svg",
        h2: "Tony Fred Editor-in-chief",
        p: "Our team is dedicated to bringing you the best in fashion and style. Discover what sets us apart."
    },
    {
        ImageUrl: "/people/person2.svg",
        h2: "Mich Stark Sports Reporter",
        p: "Mich's dedication to his craft and his commitment to excellence make him an invaluable member of our team."
    },
    {
        ImageUrl: "/people/person1.svg",
        h2: "Aline Turner Photograph",
        p: "Aline's passion for photography and fashion shines through in her work, bringing a fresh perspective to our team."
    },
    {
        ImageUrl: "/people/person2.svg",
        h2: "Iris Joe Political Reporter",
        p: "With her international experience, Iris brings a unique perspective to our team. Her determination and professional acumen drive our success and take us to the next level."
    },
]

const Below = () => {
    return (
        <div>
            <div className='p-8 lg:p-12 mb-12' >
                <div className='flex flex-col items-center justify-center gap-y-16 lg:grid lg:grid-cols-2 lg:gap-x-4' >
                    {
                        data.map((item, index) => (
                            <div className='flex flex-col items-center justify-center md:flex-row md:px-16 md:gap-x-4 lg:px-0' key={index}>
                                <Image src={item.ImageUrl} alt='person' height={300} width={300} className='h-48 w-48 mb-4 faz:h-56 faz:w-56 md:h-64 md:w-64 md:flex-shrink-0 lg:h-40 lg:w-40 xl:h-48 xl:w-48 2xl:h-72 2xl:w-72' />
                                <div className='md:flex-1'>
                                    <h2 className='font-bold text-2xl text-center tzz:text-left md:text-3xl lg:text-xl 2xl:text-3xl'>{item.h2}</h2>
                                    <p className='text-gray-300 text-sm text-center tzz:text-left faz:px-8 sm:px-16 pt-4 md:px-0 xl:pr-8 2xl:pr-20 lg:pr-8'>{item.p}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='tzz:grid tzz:grid-cols-2'>
                <Image src="/showcase/website.s_masonry_block_default_image_1.jpg" height={400} priority width={400} alt='green sheet' className='w-full ' />
                <div className='tzz:grid tzz:grid-cols-2 '>
                    <div className='bg-[#F0F5F4] p-2 py-[43px] tzz:flex tzz:flex-col tzz:justify-center '>
                        <h2 className='pb-3 text-5xl xl:text-4xl lg:text-3xl 2xl:text-5xl font-bold text-center'>A great title</h2>
                        <p className='text-center text-xl lg:text-sm'>And a great subtitle</p>
                    </div>
                    <div className='bg-[#B04A68] p-2 py-[43px] tzz:flex tzz:flex-col tzz:justify-center '>
                        <h2 className='pb-3 text-5xl xl:text-4xl lg:text-3xl 2xl:text-5xl font-bold text-center'>A great title</h2>
                        <p className='text-center text-xl lg:text-sm'>And a great subtitle</p>
                    </div>
                    <div className='bg-[#79DFC1] p-2 py-[43px] tzz:flex tzz:flex-col tzz:justify-center '>
                        <h2 className='pb-3 text-5xl xl:text-4xl lg:text-3xl 2xl:text-5xl font-bold text-center'>A great title</h2>
                        <p className='text-center text-xl lg:text-sm'>And a great subtitle</p>
                    </div>
                    <div className='bg-[#F0F5F4] p-2 py-[43px] tzz:flex tzz:flex-col tzz:justify-center '>
                        <h2 className='pb-3 text-5xl xl:text-4xl lg:text-3xl 2xl:text-5xl font-bold text-center'>A great title</h2>
                        <p className='text-center text-xl lg:text-sm'>And a great subtitle</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Below