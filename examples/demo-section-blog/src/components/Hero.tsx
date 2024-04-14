import Image from 'next/image'
import React from 'react'
export function Hero() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">

          <div className="max-w-[720px] lg:max-w-[842px]">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">The Website You Want Without The
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">
                Dev Time
              </span>
            </h1>
            <p className="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            <a href="#" className="mb-6 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mb-10 lg:mb-12">Get Started</a>

            <div className="mb-4 flex w-full max-w-xs items-center">
              <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" height={724} width={1224} alt="exmple image"
                className="inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]" />
              <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905435069fb009d43abbb1_Ellipse-2.jpg" height={724} width={1224} alt="" className="relative -left-4 -z-[1] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]" />
              <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390542e809b5c72a0cdcb99_Ellipse.jpg" height={724} width={1224} alt="" className="relative -left-8 -z-[2] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]" />
              <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390543797156ee437ef0425_Ellipse-1.jpg" height={724} width={1224} alt="" className="relative -left-12 -z-[3] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]" />
              <div className="relative bottom-0 left-[-80px] right-auto top-auto -z-[4] rounded-[29.25px] bg-[#1353fe] py-2 pl-10 pr-5 text-center text-white [box-shadow:rgb(0,_0,_0)_0px_6px]">
                <p className="text-sm">
                  <span className="font-bold"> 100k+ </span>Customers
                </p>
              </div>
            </div>
          </div>

          <div className="relative left-4 h-full max-h-[562px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" height={724} width={1224} alt="" className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover" />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
            <a href="#" className="absolute bottom-auto left-[50%] right-auto top-1/2 inline-block max-w-full object-contain font-bold text-[#1353fe] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 md:bottom-[-48px] md:left-[-48px] md:right-auto md:top-auto">
              <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639058b0726dee9a8efa473f_Frame%20427322569.svg" height={724} width={60} alt="" className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
