import { spaceType } from "@/src/types";

export function Space({h}:{h: spaceType}) {
    if ( h === "xs" ) {
        return (<div className="h-16 h-max-16  w-full"></div>)
    }

    if ( h === "sm" ) {
        return (<div className="h-20 h-max-20  w-full"></div>)
    }

    if ( h === "md" ) {
        return (<div className="h-24 h-max-24  w-full"></div>)
    }

    if ( h === "lg" ) {
        return (<div className="h-28 h-max-28  w-full"></div>)
    }

    if ( h === "xl" ) {
        return (<div className="h-32 h-max-32  w-full"></div>)
    }
    if ( h === "2xl" ) {
        return (<div className="h-40 h-max-40  w-full"></div>)
    }
    else {
        return (<div className="h-12 h-max-12  w-full"></div>)
    }

}