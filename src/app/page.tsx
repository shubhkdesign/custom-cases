/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-4 text-lg lg:pr-10 max-w-prose text-center lg:text-left md:text-wrap">
                Capture your favorite memories with your own{" "}
                <span className="font-semibold">One Of One</span> phone case.
                Custom-cases allows you to get... wait for it... Custom case for
                your phone and have your phone case match your style.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High Quality durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Five Year Print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Print color accuracy
                  </li>
                </div>
                <div className="mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <img
                      className="iniline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-1.png"
                      alt="userImage"
                    />
                    <img
                      className="iniline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-2.png"
                      alt="userImage"
                    />
                    <img
                      className="iniline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-3.png"
                      alt="userImage"
                    />
                    <img
                      className="iniline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-4.jpg"
                      alt="userImage"
                    />
                    <img
                      className="iniline-block h-10 object-cover w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-5.jpg"
                      alt="userImage"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    </div>
                    <p>
                      {" "}
                      <span className="font-bold">19,019</span> Happy Customers{" "}
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                alt="your image"
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="phone"
              />
              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Section for testimonials */}

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-grow items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our <span className="relative px-2">customers</span> say
            </h2>
            <img
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              alt="snake 2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-x-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8 ">
                <p className="">
                  "The case feels durable and the{" "}
                  <span className="bg-green-600">
                    print quality feels great
                  </span>
                  This case feels amazing to the touch and is made of premium materials.s
                  "
                </p>
              
              </div>
              <div className="flex gap-2 mt-2">
                  <img src="/users/user-1.png" className="rounded-full h-12 w-12 object cover" alt="testimonial image" />
                  <div className="flex flex-col ">
                    <p className="font-semibold">Shubham Khade</p>
                    <div className="flex gap-1.5 items-center ">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                      <p className="text-small">Verified purchase</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-x-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8 ">
                <p className="">
                  "The case feels durable and the{" "}
                  <span className="bg-green-600">
                    print quality feels great
                  </span>
                  This case feels amazing to the touch and is made of premium materials.s
                  "
                </p>
              
              </div>
              <div className="flex gap-2 mt-2">
                  <img src="/users/user-1.png" className="rounded-full h-12 w-12 object cover" alt="testimonial image" />
                  <div className="flex flex-col ">
                    <p className="font-semibold">Shubham Khade</p>
                    <div className="flex gap-1.5 items-center ">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                      <p className="text-small">Verified purchase</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
