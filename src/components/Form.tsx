'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Form() {
    const [isFormOpen, setIsFormOpen] = useState(true)
    const [shouldRender, setShouldRender] = useState(true)

    useEffect(() => {
        if (!isFormOpen) {
            const timer = setTimeout(() => {
                setShouldRender(false)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            setShouldRender(true)
        }
    }, [isFormOpen])

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
