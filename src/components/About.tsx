import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <>
            <Hero />
        </>
    )
}

function Hero() {
    return (
        <section className="w-full relative overflow-x-hidden md:px-20 md:py-16 px-8 py-10">
            <div className="w-full relative ">

                {/* <div className="w-full relative h-full flex items-center lg:justify-start justify-center">
                    <Image
                        src="/main-02.png"
                        width={500}
                        height={500}
                        alt="Hero Image"
                    />
                </div> */}

                <div
                    className="w-full relative h-full flex flex-col justify-center"
                >
                    <h2 className="md:text-5xl text-3xl font-medium text-primary ">
                        About Dr. Payal Bajaj
                    </h2>

                    <p className="mt-10 text-2xl leading-[1.1] font-medium text-maroon-800">
                        She is Medical Director And Senior IVF Consultant
                    </p>
                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.
                    </span>

                    <h3 className="mt-3 text-2xl text-maroon-800 font-bold leading-[1.1]">
                        Dr. Payal Bajaj Creating Miracles Personalized IVF Solutions for Growing Families.
                    </h3>

                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
                    </span>

                    <h3 className="mt-3 text-2xl text-maroon-800 font-bold leading-[1.1]">
                        20 years of experience
                    </h3>

                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr Payal Bajaj has won various academic awards all through her academic career. She is expert at stimulating following up ovarian cycles in different types of infertile patients and is a strong believer in an individualized management of infertility. She sticks to evidence-based protocols and strives to provide competent, rational, ethical, and transparent clinical care to the infertile couple.
                    </span>
                </div>

            </div>
        </section>
    )
}
