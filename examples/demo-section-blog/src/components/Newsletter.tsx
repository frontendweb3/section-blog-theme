import React from "react";

export function Newsletter() {
  return (
    <section className="bg-blue-400 my-16 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      
      <div className="mx-auto max-w-screen-md sm:text-center">
        
        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl !text-black">
          Sign up for Our Newsletter
        </h2>
        
        <p className="mx-auto mb-8 max-w-2xl font-light  md:mb-12 sm:text-xl text-black">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>

        <div className="items-center justify-between mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium"
            >
              Email address
            </label>
            <input
              className="block p-3 pl-10 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your email"
              type="email"
              id="email"
            />
          </div>
          <div className="mx-2">
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg border border-primary-600 sm:rounded-none sm:rounded-r-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-3 mx-auto max-w-screen-sm text-sm text-center text-gray-00 newsletter-form-footer dark:text-black">
          We care about the protection of your data.{" "}
          <a
            href="#"
            className="font-medium text-primary-600 dark:!text-black hover:underline"
          >
            Read our Privacy Policy
          </a>.
        </div>
      </div>
    </section>
  );
}
