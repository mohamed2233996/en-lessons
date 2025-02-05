"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Coverbg from "@/imges/cover.jpg"
import Image from 'next/image';
import BooksData from '../_Data/books';
import BooksBox from '../_componant/Books Box';

const Page = () => {
    const router = useRouter();
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        // التحقق من حالة تسجيل الدخول من localStorage
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            // إذا لم يكن المستخدم مسجلاً، يتم إعادة توجيهه إلى صفحة تسجيل الدخول
            router.push('/login');
        } else {
            const userLogin = JSON.parse(localStorage.getItem('userLogin'));
            setUserLogin(userLogin);
            console.log(userLogin)
        }
    }, []);

    return (
        <div className='py-20 bg-white dark:bg-gray-900 dark:text-white'>
            <div className="container m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col lg:items-start items-center pt-8 pb-12">
                        <h1 className="text-gray-900 dark:text-white text-center lg:text-start">
                            <p className='text-5xl font-bold'>Hello {userLogin?.userName}!</p>
                            <p className=" mt-4 text-4xl">Welcome to <span className='text-primary'>EN Lessons</span>!</p>
                        </h1>
                        <p className='text-xl text-gray-600 text-center sm:text-start dark:text-gray-300 mt-10'>Start browsing our exciting libraries and discover the books available</p>
                        <div className="flex justify-center sm:flex-row flex-col gap-4 mt-8">
                            <a href="#books" className="text-primary text-center border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full ">Start Browsing</a>
                            <a href="/about" className="sm:ml-4 text-primary text-center border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full ">Learn More</a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-xl'>
                        <Image src={Coverbg} alt="..." width={1440} height={320} />
                    </div>
                </div>
                <div className='mt-20' id='books'>
                    <h2 className='text-4xl font-bold text-gray-900 dark:text-white text-center'>Popular Books</h2>
                    <p className='text-xl text-gray-600 text-center dark:text-gray-300 mt-10'>Discover the latest and greatest books in English language</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 mt-20'>
                        {BooksData?.map(book=>{
                            return(
                                <BooksBox 
                                key={book.id}
                                title={book.title}
                                ImgSrc={book.image}
                                author={book.author}
                                link={book.link}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
