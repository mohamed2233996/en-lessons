import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksBox = (prop) => {
    return (
        <div key={prop.key} className="MainBox relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='overflow-hidden'>
                <Image className="rounded-t-lg" src={prop.ImgSrc} alt="" />
            </div>
            <div className="p-5 shadow-lg overflow-hidden infoBox absolute bottom-0 h-1/2 bg-white dark:bg-black bg-opacity-80 transition-all opacity-0 text-center flex flex-col justify-around">
                <Link href={prop.link}>
                    <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.title}</h5>
                </Link>
                <p className="mb-3 text-sm lg:text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <p className="mb-3 text-sm lg:text-base text-gray-700 dark:text-gray-400">By <span className='font-bold'>{prop.author}</span></p>
                <Link href={prop.link} className="inline-flex justify-center items-center text-primary text-center border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full">
                    Discover Book
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default BooksBox;

