import Image from 'next/legacy/image';
import React from 'react';
import Button from './Button';

const Landing = () => {
    return (
        <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
            <div className='space-y-8'>
                <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                    <span className='block cursor-default bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent'>
                        Powered
                    </span>
                    <span className='block cursor-default'>By Intellect</span>
                    <span className='block cursor-default'>
                        Driven by Values
                    </span>
                </h1>

                <div className='space-x-8'>
                    <Button title='Buy Now' />
                    <a className='link'>Learn More</a>
                </div>
            </div>
            <div
                className='relative hidden h-[450px] w-[450px] transition-all
            duration-500 md:inline lg:h-[650px] lg:w-[600px]'
            >
                <Image
                    src='/iphone.png'
                    layout='fill'
                    objectFit='contain'
                    alt=''
                />
            </div>
        </section>
    );
};

export default Landing;
