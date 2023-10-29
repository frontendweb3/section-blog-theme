import { X } from 'lucide-react';

export function Banner({ message, hideBanner }: { message: string; hideBanner: () => void }) {
    return (
        <div className="print:hidden flex flex-row justify-around bg-primary/80 text-primary-foreground px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
            
            {/* Message */}
            <div className="text-primary-foreground order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm sm:order-none sm:mb-0 sm:w-auto md:text-base" dangerouslySetInnerHTML={{
                __html: message
            }}>
            </div>

            {/* Exit Button */}
            <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
                <button onClick={hideBanner} type="button" className=" text-primary-foreground transition duration-100">
                    <X width={20} height={20} />
                </button>
            </div>
        </div>
    )
}