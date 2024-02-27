import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='' >
          <div className='md:h-[65vh] grid mb-20 tzz:mb-0 tzz:grid-cols-2 2xl:grid-cols-12 tzz:gap-x-8 xl:gap-x-0 faz:mb-20 xl:px-24 px-6 pso:px-6 md:px-16 md:mb-64 sm:px-10 tzz:mt-20  2xl:px-0 max-w-7xl mx-auto 2xl:mb-56 '>
            <div className=' mt-10 2xl:col-span-5'>
              <div className='flex items-center gap-x-3 tzz:inline-block  '>
                <h1 className='text-4xl faz:text-5xl pso:text-5xl lg:text-5xl 2xl:text-7xl xl:text-7xl font-light tracking-wide tzz:mb-2' >Sell Online.</h1>
                <h2 className='text-4xl faz:text-5xl pso:text-5xl xl:text-7xl lg:text-5xl'>Easily.</h2>
              </div>
                <p className='text-base mt-3 text-gray-400 font-light'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <div className='border-b my-2 '></div>
                <button className='flex items-center greenButton w-44 text-lg justify-center gap-x-2'>Start Now 
                  <Image src="/header/chevron-down copy.svg" alt='down' height={132} width={132} className='h-6 w-6 -rotate-90' />
                </button>
            </div>
            <div className=' mt-8 tzz:mt-0 rounded-sm 2xl:col-span-7 md:flex md:items-center md:justify-center tzz:inline-block'>
                <Image src="/hero/imagep1.jpg" alt='pic' height={132} width={132} className='h-[280px] w-[425px] faz:h-[400px] faz:w-[495px] pso:h-[450px] pso:w-[540px] sm:w-[750px] tzz:w-[430px] tzz:hidden' />
                <Image src="/hero/yeh waliiiii.png" alt='pic' height={1800} width={1800} className='hidden tzz:flex tzz:w-[740px] tzz:mt-0 xl:ml-8 xl:w-[1100px] xl:-mt-16 lg:mt-0 2xl:-mt-28 -mt-20 2xl:flex 2xl:w-[1000px] md:ml-10' />
                
            </div>
          </div>
            <div className=''>
              <div className='tzz:grid tzz:grid-cols-2 lg::h-[400px] '>

              <div className='py-32 2xl:py-40 px-12 faz:px-16 faz:w-full lg:h-full md:h-[430px] md:py-16 lg:py-20 bg-[#79DfC1] tzz:w-full'>
                <h2 className='text-right text-5xl font-extralight md:text-6xl xl:text-8xl'>The next summer collection</h2>
                <p className='text-right text-base mt-5 font-light '>Get ahead of the trends with our color forecast for the upcoming summer season.</p>
                <div className='float-right mt-4'>
                <button className='text-white bg-black rounded-full px-6 py-3 '>Discover it</button>
                </div >
              </div>
                <Image src="/hero/imagep22.jpg" alt='roll clothes' width={900} height={900} className='hidden tzz:w-full tzz:h-full tzz:flex h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-96 md:w-[500px] ' />
              </div>
              <div className='grid sm:grid-cols-2 xl:grid-cols-3'>
              {/* <Image src="/hero/imagep22.jpg" alt='roll clothes' width={900} height={900} className='tzz:hidden h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px]' /> */}
              <Image src="/hero/grid3.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              <Image src="/hero/grid1.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              <Image src="/hero/grid4.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              <Image src="/hero/imagep22.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              <Image src="/hero/grid5.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              <Image src="/hero/clothes.jpg" alt='roll clothes' width={900} height={900} className='h-72 w-[480px] faz:h-[340px] faz:w-[640px] sm:h-64 sm:w-96 md:h-72 md:w-[500px] tzz:w-full lg:h-96 xl:h-[300px] 2xl:h-[370px]' />
              </div>
            </div>
        </div>
            <div className='max-w-7xl mx-auto pb-2'>
                  <div className='pt-10'>
                    <h2 className='font-bold text-3xl text-center md:text-4xl'>Shop our top brands for quality and style.</h2>
                    <p className='text-center pt-3'>Every style for everybody.</p>
                  </div>
                  <div className='flex flex-col items-center pt-8 gap-y-4 tzz:flex-row tzz:justify-center '>
                    <Image src="/advertisement/part1.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                    <Image src="/advertisement/part2.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                    <Image src="/advertisement/part3.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                    <Image src="/advertisement/part5.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                    <Image src="/advertisement/part6.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                    <Image src="/advertisement/part7.png" height={132} width={132} alt='logos' className='h-48 w-96 tzz:h-24 tzz:w-[160px] lg:w-[170px] lg:h-[100px] xl:h-32 xl:w-52 2xl:h-36 2xl:w-64 '/>
                  </div>
            </div >
            <div className='bg-[#142E26] md:py-20 md:pb-10  ' >
                
                <div className=' md:flex items-center gap-x-3 mx-auto tzz:px-6 lg:px-10 md:pb-8 pt-14 md:pt-0 flex flex-col justify-center tzz:flex-row xl:px-14'>
                  <Image src="/showcase/composition_square_1.svg" alt='movingpic1' height={600} width={600} className='h-72 w-[410px] faz:w-[430px] faz:h-[340px] md:h-[390px] md:w-[650px] 2xl:h-[440px]'/>
                    <div className='mt-4 tzz:p-8 p-10 text-white faz:w-[482px] md:h-56 md:w-[650px]'>
                      <h2 className='text-2xl xl:text-4xl font-bold faz:font-extrabold mb-3'>World{"'"}s top Hidden gems</h2>
                      <p className='text-sm tzz:text-[12px] font-medium'>Explore new and exciting places with our ultimate guide to the best-kept secret spots.</p>
                      <button className='text-[#A2E9D4] pt-4'>Discover more</button>
                    </div>
                </div>
                <div className=' md:flex items-center gap-x-3 mx-auto tzz:px-6 lg:px-10 pt-14 md:pt-0 flex flex-col justify-center tzz:flex-row-reverse xl:px-14'>
                  <Image src="/showcase/composition_square_3.svg" alt='movingpic1' height={600} width={600} className='h-72 w-[410px] faz:w-[430px] faz:h-[340px] md:h-[390px] md:w-[650px] 2xl:h-[440px]'/>
                    <div className='mt-4 tzz:p-8 p-10  text-white faz:w-[482px] md:h-56 md:w-[650px]'>
                      <h2 className='text-2xl xl:text-4xl font-bold faz:font-extrabold mb-3'>Summer Essentials</h2>
                      <p className='text-sm tzz:text-[12px] font-medium'>Make the most of summer with our selection of essentials for everyday wear.</p>
                      <button className='text-[#A2E9D4] pt-4'>Read more</button>
                    </div>
                </div>
                </div>
            </div>
   
  )
}

export default Hero