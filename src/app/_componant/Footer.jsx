// components/Footer.js
'use client';

import React from 'react';
import logo from "@/imges/logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="min-h-[150px] bg-white rounded-lg shadow-sm dark:bg-dark m-4 pt-16 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center min-w-[80px] min-h-[80px]">
                        <Image src={logo} alt="logo" width={80} height={80} priority />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-dark sm:mb-0 dark:text-white">
                        <li>
                            <Link href="/About" className="hover:underline me-4 md:me-6">{t('footer.about')}</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">{t('footer.privacy')}</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">{t('footer.licensing')}</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">{t('footer.contact')}</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="https://en-lessons.vercel.app/" className="hover:underline hover:text-primary transition-all">En Tips &Tricks™</a>. {t('footer.rights')}
                </span>
            </div>
        </footer>
    );
};

export default Footer;
