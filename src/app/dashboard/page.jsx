"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Coverbg from "@/imges/cover.jpg"
import Image from 'next/image';
import Books from '../_componant/books';
import Trick from '../_componant/trick';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Synonym from '../_componant/synonym';
import ExamCard from '../_componant/ExamCard';

const Page = () => {
    const router = useRouter();
    const [userLogin, setUserLogin] = useState(null);
    const { t } = useTranslation()


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
        <>
            <div className='pb-20 pt-40 bg-white dark:bg-dark dark:text-white'>
                <div className="absolute bottom-0 left-0 right-0 top-0 pointer-events-none bg-[linear-gradient(to_right,#de94942e_1px,transparent_1px),linear-gradient(to_bottom,#de94942e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <div className="container m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                        <div className="flex flex-col lg:items-start items-center pt-8 pb-12">
                            <h1 className="text-gray-900 dark:text-white text-center lg:text-start">
                                <p className='text-5xl font-bold'>{t('helloUser')} {userLogin?.userName}!</p>
                                <p className=" mt-4 text-4xl">{t('welcomeTo')} <span className='text-primary'>{t('siteName')}</span>!</p>
                            </h1>
                            <p className='text-xl text-gray-600 text-center sm:text-start dark:text-gray-300 mt-10'>{t('startBrowsing')}</p>
                            <div className="flex justify-center sm:flex-row flex-col gap-4 mt-8">
                                <a href="#books" className="text-primary text-center transition-all border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full ">{t('startBrowsingBtn')}</a>
                                <Link href="/About" className="sm:ml-4 text-primary text-center transition-all border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full ">{t('learnMoreBtn')}</Link>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-xl'>
                            <Image src={Coverbg} alt="..." width={1440} height={320} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[linear-gradient(225deg,_rgba(254,49,48,1),_rgba(246,15,119,0.7)_66%,_rgba(229,30,209,0.7))] py-20 px-4'>
                <h2 className='text-4xl font-bold text-white dark:text-dark text-center mb-8'>{t('mainFeatures')}</h2>
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <ExamCard />
                    <Trick />
                    <Synonym />
                </div>
            </div>
            <Books />
        </>
    );
}

export default Page;
