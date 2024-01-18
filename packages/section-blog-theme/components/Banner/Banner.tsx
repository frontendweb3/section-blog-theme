import { X } from "lucide-react";

export function Banner({
  message,
  hideBanner,
}: {
  message: string;
  hideBanner: () => void;
}) {
  return (
    <div className="print:nx-hidden nx-flex nx-flex-row nx-justify-around nx-bg-primary/80 nx-text-primary-foreground nx-px-4 nx-py-3 sm:nx-flex-nowrap sm:items-center sm:nx-justify-center sm:nx-gap-3 sm:nx-pr-8 md:nx-px-8">
      {/* Message */}
      <div
        className="nx-text-primary-foreground nx-order-1 nx-mb-2 nx-inline-block nx-w-11/12 nx-text-sm sm:nx-order-none sm:nx-mb-0 sm:nx-w-auto md:nx-text-base"
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      ></div>

      {/* Exit Button */}
      <div className="nx-order-2 nx-flex nx-w-1/12 nx-items-start nx-justify-end sm:nx-absolute sm:nx-right-0 sm:nx-order-none sm:nx-mr-1 sm:nx-w-auto xl:nx-mr-3">
        <button
          aria-label="close banner"
          onClick={hideBanner}
          type="button"
          className="nx-text-primary-foreground nx-transition nx-duration-100"
        >
          <X width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
