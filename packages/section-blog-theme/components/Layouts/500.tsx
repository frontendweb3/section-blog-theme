import { NextSeo } from "next-seo";
import Link from "next/link";

export function Error500() {
  return (
    <>
      <NextSeo
        title="500 Error"
        description="Something went wrong, sorry, we couldn't find this page."
        noindex={true}
      />
       <section className="nx-flex nx-items-center nx-h-full nx-p-16 nx-container nx-text-center  nx-flex-col nx-justify-center nx-px-5 nx-mx-auto nx-my-8">
        <h2 className="nx-mb-8 nx-font-extrabold nx-text-9xl ">
          <span className="nx-sr-only">Error</span>500
        </h2>

        <p className="nx-text-1xl nx-font-semibold md:nx-text-3xl">
          Sorry, we couldn't find this page.
        </p>

        <p className="nx-text-md md:nx-text-xl nx-mt-4 nx-mb-8 ">
          But dont worry, you can find plenty of other things on our
          homepage.
        </p>

        <Link href="/" className="nx-px-8 nx-py-3 nx-font-semibold nx-rounded nx-bg-secondary nx-text-secondary-foreground">
          Back to homepage
        </Link>
      </section>
    </>
  );
}
