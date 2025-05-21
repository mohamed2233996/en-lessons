import React from 'react';
import BooksBox from './Books Box';
import BooksData from '../_Data/books';
import { useTranslation } from 'react-i18next';

const Books = () => {
        const { t } = useTranslation();

    return (
        <div className='py-20 bg-white dark:bg-dark dark:text-white'>
            <div className="container m-auto">
                <div id='books'>
                    <h2 className='text-4xl font-bold text-gray-900 dark:text-white text-center'>{t('popularBooks')}</h2>
                    <p className='text-xl text-gray-600 text-center dark:text-gray-300 mt-10'>{t('booksDescription')}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center justify-items-center gap-8 mt-20 px-4'>
                        {BooksData?.map(book => {
                            return (
                                <BooksBox
                                    key={book.id}
                                    title={book.title}
                                    ImgSrc={book.image}
                                    author={book.author}
                                    link={book.link}
                                    describe={book.discrpation}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;
