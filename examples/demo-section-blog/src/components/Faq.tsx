import React from 'react'

export  function Faq() {
  return (
  <div className="bg-[darkslategray] justify-center mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-24 lg:py-32">

    <div className="mx-auto flex max-w-[550px] flex-col items-center justify-center px-6 text-center lg:max-w-[800px] lg:px-10">
      <p className="font-inter mb-2 text-center text-sm font-medium">FAQs</p>
      <h1 className="mx-auto text-center font-bold text-black lg: text-3xl lg:text-4xl">Frequently Asked Questions</h1>
      <p className="font-inter mt-4 max-w-[600px] px-5 text-center text-base font-light text-white lg:max-w-[500px] lg:">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
    </div>
  
    <div className="mt-10 flex w-full flex-col">
      
      <div className="relative my-3 w-full rounded-md px-12 py-8">
        <div className="max-w-[700px]">
          <h2 className="font-bold text-black text-xl">How this theme is different from others in market?</h2>
          <p className="font-inter mt-4 text-base font-bold text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
        </div>
        <a href="#" className="absolute right-5 top-9">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"></circle>
            <path d="M7.04688 11.9999H16.9469" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
      <div className="mx-12 border border-gray-200"></div>
    
      <div className="relative my-3 w-full rounded-md px-12 py-8">
        <div className="max-w-[700px]">
          <h2 className="font-bold text-black text-xl">What is your policy on distribution of Devjoy assets?</h2>
        </div>
        <a href="#" className="absolute right-5 top-9">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"></circle>
            <path d="M7.05078 12H16.9508" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 7.05005V16.95" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
      <div className="mx-12 border border-gray-200"></div>
      
      <div className="relative my-3 w-full rounded-md px-12 py-8">
        <div className="max-w-[700px]">
          <h2 className="font-bold text-black text-xl">How can I contribute to Devjoy?</h2>
        </div>
        <a href="#" className="absolute right-5 top-9">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"></circle>
            <path d="M7.05078 12H16.9508" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 7.05005V16.95" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
      <div className="mx-12 border border-gray-200"></div>
      
      <div className="relative my-3 w-full rounded-md px-12 py-8">
        <div className="max-w-[700px]">
          <h2 className="font-bold text-black text-xl">What other themes do you have?</h2>
        </div>
        <a href="#" className="absolute right-5 top-9">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"></circle>
            <path d="M7.05078 12H16.9508" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 7.05005V16.95" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
    <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500"> Can’t find the answer you’re looking for? Reach out to our 
      <a href="#" className="text-[black]">
        customer support team.
      </a>
    </p>
  </div>
  )
}
