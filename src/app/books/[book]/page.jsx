'use client'
import BooksBox from '@/app/_componant/Books Box';
import BooksData from '@/app/_Data/books';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const Book = () => {
    const [bookData, setBookData] = useState()
    const book = useParams().book.toString()

    if (!book) return <div className='text-center font-bold mt-8'>Book not found.</div>

    useEffect(() => {
        const bookData = BooksData?.find((b) => b.title.toLowerCase() === book.toLowerCase())
        console.log(bookData)
        setBookData(bookData)
    }, [book]);

    if (!bookData) return <div>Book not found.</div>
    console.log(bookData)

    return (
        <div className='py-20 bg-white dark:bg-dark dark:text-white'>
            <div className="container m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col items-center">
                        <img src={bookData?.image.src} alt={bookData?.title} className="object-cover w-[80%] rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <h1 className="text-5xl font-bold mb-4">{bookData?.title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Description: {bookData?.discrpation}</p>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Author: {bookData?.author}</p>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Price: $ {bookData?.price}</p>
                        <a href="#" className="text-primary w-full text-center mb-2 border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full mt-4">Add to Cart</a>
                        <a href={bookData?.bookDrive} target='_blank' className="w-full text-center font-bold text-white bg-primary p-4 hover:shadow-2xl rounded-full">Read</a>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className='text-4xl font-bold'>Similar books</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {BooksData.filter(b => b.title !== bookData.title).map((similarBook) => (
                            <BooksBox
                                key={similarBook.id}
                                title={similarBook.title}
                                ImgSrc={similarBook.image}
                                author={similarBook.author}
                                link={similarBook.link}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Book;
