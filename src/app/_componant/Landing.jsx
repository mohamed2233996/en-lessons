"use client"
import React, { useEffect } from 'react';
import HeroImg from "@/imges/layer-slider-model.png"
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Landing = () => {

    const { t } = useTranslation();
    const router = useRouter();
    const handleStartLearning = () => {
        // التحقق من حالة تسجيل الدخول من localStorage
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            Swal.fire({
                title: t('landing.alert.title'),
                text: t('landing.alert.text'),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#fe3130",
                cancelButtonColor: "#dadada",
                confirmButtonText: t('landing.alert.confirm')
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            });
        } else {
            router.push('/dashboard');
        }
    }


    return (
        <div className='py-20 bg-white dark:bg-dark dark:text-white relative'>
            <div className="container m-auto">
                <div className="flex items-center flex-col justify-center lg:flex-row gap-6">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <h1 className="text-5xl font-bold mb-8">{t('landing.title')} <br /> <span className='text-primary'>{t('landing.brand')}</span></h1>
                        <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
                            {t('landing.description')}
                        </p>
                        <button onClick={handleStartLearning}
                            className="transition-all duration-300 text-primary border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full">  {t('landing.button')}
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full px-2 relative">
                        <div className='z-10 relative'>
                            <Image className="w-full h-auto z-10" src={HeroImg} alt="Hero Image" />
                        </div>
                        <span className='absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%]  bg-primary rounded-2xl rotate-12'></span>
                        <svg width="280" height="280" className='absolute -top-4 -right-4' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="red-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="2" fill="#FF3B30" />
                                </pattern>
                            </defs>
                            <rect width="200" height="200" fill="url(#red-dots)" />
                        </svg>
                    </div>
                </div>
                <div className='text-center flex flex-col items-center gap-4 pt-20'>
                    <h2 className='text-4xl font-bold'>{t('landing.whyTitle')} <span className='text-primary'>{t('landing.brand')}</span>{t("landing.qutation")}</h2>
                    <ul className='text-lg text-gray-600 dark:text-gray-300'>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-primary' fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t('landing.feature1')}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-primary' fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t('landing.feature2')}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-primary' fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t('landing.feature3')}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-primary' fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t('landing.feature4')}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-primary' fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t('landing.feature5')}</span>
                        </li>
                    </ul>
                    <div className='flex justify-center items-center mt-12'>
                        <Link href='/register'>
                            <span className='text-xl font-bold text-primary hover:text-hprimary'>{t("GetStarted")}</span>
                        </Link>
                        <div className='mx-4'>{t("or")}</div>
                        <Link href='/login'>
                            <span className='text-xl font-bold text-primary hover:text-hprimary'>{t("Login")}</span>
                        </Link>
                    </div>
                    <div>
                        <p className='text-center text-gray-600 dark:text-gray-300'>
                            {t("haveAccount")} <Link href='/login'>{t("Login")}</Link>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <p className='font-bold'>{t('footer.sponsor')} <span className='text-primary'>Menna Elshemy❤️️</span></p>
                        <p className='font-bold'>{t('footer.programmer')} <span className='text-primary'>Mohamed Gamal❤️️</span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='ml-4'>
                            <span href='/faq'>{t('footer.faq')}</span>
                        </div>
                        <div className='ml-4'>
                            <span href='/terms'>{t('footer.terms')}</span>
                        </div>
                        <div className='ml-4'>
                            <span href='/privacy'>{t('footer.privacy')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
