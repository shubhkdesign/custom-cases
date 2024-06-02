/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const PHONES = [
    "/testimonials/1.jpg",
    "/testimonials/2.jpg",
    "/testimonials/3.jpg",
    "/testimonials/4.jpg",
    "/testimonials/5.jpg",
];

function splitArray <T>(array: Array<T>, numParts: number) {
    const result:  Array<Array<T>> = []

    for(let index=0; index<array.length; index++) {
        const element = index % numParts;
        if(!result[element]){
            result[element] = [];
        }
        result[element].push(array[index])
    }
    return result;
}

function ReviewColumn({reviews, className, reviewClassName, msPerPixel}:{reviews:string[], className? :string, reviewClassName? : (reviewIndex: number)=> string, msPerPixel? : number}) {
    const columnRef = useRef<HTMLDivElement | null>(null)
    
    return <div ref={columnRef} className={cn("animate-marquee space-y-8 py-4", className)} style={{'--marquee-duration': duration}as React.CSSProperties}>

    </div>
}

function ReviewsGrid() {
    
    const containerRef = useRef<HTMLDivElement | null>(null)
    
    const isInView = useInView(containerRef, {once: true, amount: 0})

    const columns = splitArray(PHONES, 3)

    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = splitArray(columns[2], 2)
    
    return <div ref={containerRef} className="relative -mx-4 mt-16 grid h-[49] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3" > {isInView ? <>
    <ReviewColumn /></> : null}</div>
}

export function Reviews () {
    return <MaxWidthWrapper className="relative max-w-5xl">
        <img aria-hidden="true" className="absolute select-none hidden xl:block -left-32 top-1/3"  src="/what-people-are-buying.png" alt="people" /> </MaxWidthWrapper>
}