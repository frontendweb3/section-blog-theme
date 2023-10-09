import { Button } from "@/components/ui/button"
import { X } from 'lucide-react';
import { useBannerCookies } from "@/utility/useCookies";
import { Card, CardTitle } from "@/components/ui/card";
export function Banner({ message }: { message: string; }) {

    const { banner, hideBanner } = useBannerCookies();

    return (
        <Card className="flex w-full sm:h-16 rounded-none b-0 bg-primary text-primary-foreground justify-center py-4">
            <div className="relative flex w-[90%] max-w-[960px] justify-center items-center text-primary-foreground rounded-xl">

                <div className="flex max-w-[400px] flex-col justify-center items-center gap-x-44 text-center sm:flex-row">

                    <CardTitle className="text-sm" dangerouslySetInnerHTML={{
                        __html: message
                    }}></CardTitle>

                    {/* Exit Button*/}
                    <Button onClick={hideBanner} className="m-1" variant="ghost" size="icon">
                        <X width={20} height={20} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
