'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <main className='relative w-full md:px-20 pt-32 pb-10 px-8 overflow-hidden'>
            <section className='relative h-full w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>

                <div className='w-full h-full relative flex flex-col justify-center'>
                    <h1 className='lg:text-5xl md:text-3xl text-3xl font-pt font-bold text-primary leading-[1.2]'>
                        Personalized IVF care with compassion and expertise from  Dr. Payal Bajaj
                        {/* <span className='text-4xl inline-block text-white bg-primary px-4 py-3 rounded-lg mt-2'>
                            Dr. Payal Bajaj
                        </span> */}
                    </h1>

                    <button className='mt-10 flex w-max bg-primary px-7 py-4 rounded text-white font-semibold text-xl cursor-pointer hover:bg-red-950' onClick={() => setIsFormOpen(true)}>
                        Book Consultation
                    </button>
                    <div className='mt-5'>
                        <p className='mt-5 flex gap-2'>
                            <Link href='https://www.instagram.com/dr_payalbajaj/' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.facebook.com/DoctorPayalbajaj' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-linkedin-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.youtube.com/@DrPayalBajaj' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='w-full h-full relative flex items-center justify-center'>
                    <Image src="/main.png" width={1000} height={1000} alt='Dr. Payal Bajaj' />
                </div>
            </section>
            <Form isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </main>
    )
}

type FormProps = {
    isFormOpen: boolean;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Form({ isFormOpen, setIsFormOpen }: FormProps) {

    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsFormOpen(true)
            setShouldRender(true)
        }, 3000)

        return () => clearTimeout(showTimer)
    }, [])

    useEffect(() => {
        if (!isFormOpen) {
            const closeTimer = setTimeout(() => {
                setShouldRender(false)
            }, 300)
            return () => clearTimeout(closeTimer)
        } else {
            setShouldRender(true)
        }
    }, [isFormOpen])

    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isFormOpen]);

    if (!shouldRender) return null

    return (
        <section
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out 
            ${isFormOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none backdrop-blur-0'}
        `}>
            <div className='w-full h-full p-10 flex items-center justify-center'>
                <div
                    className={`transform transition-all duration-300 ease-in-out 
                    ${isFormOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 -translate-y-10 opacity-0'}
                    max-w-[500px] w-full rounded-xl p-5 bg-primary`}
                >

                    <div className='w-full relative'>

                        <div className='w-full flex items-center justify-between'>
                            <span className='text-2xl text-white font-bold'>Book Consultation</span>
                            <div
                                className='w-12 h-12 rounded-full border border-white cursor-pointer flex justify-center items-center'
                                onClick={() => setIsFormOpen(false)}
                            >
                                <Image src="/close-btn.svg" width={30} height={30} alt='Close Btn' />
                            </div>
                        </div>

                        <div className='mt-10 w-full relative flex flex-col gap-5'>
                            {['Name', 'Email', 'Phone No.', 'Location'].map((placeholder, i) => (
                                <div key={i} className='w-full bg-zinc-100 rounded px-3 py-3'>
                                    <input
                                        type={placeholder === 'Email' ? 'email' : placeholder === 'Phone No.' ? 'tel' : 'text'}
                                        required
                                        placeholder={placeholder}
                                        className='bg-transparent w-full h-full text-lg outline-none border-none'
                                    />
                                </div>
                            ))}
                            <div className='w-full bg-zinc-100 rounded px-3 py-3'>
                                <textarea required placeholder='Message' className='bg-transparent w-full h-full text-lg outline-none border-none' />
                            </div>
                        </div>

                        <div className='mt-8 w-full'>
                            <button className='w-full px-6 py-2 bg-white text-primary font-bold text-lg rounded cursor-pointer hover:bg-red-950 hover:text-white'>
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}