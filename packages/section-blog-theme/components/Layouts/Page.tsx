import { Article } from "@/components/Article/Article"
import * as React from "react";

export function Page({children}:{ children : React.ReactNode}){
return ( <Article> { children} </Article>)
}
