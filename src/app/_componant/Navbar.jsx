'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import userImgDark from "@/imges/user.png"
import userImg from "@/imges/user-image-with-black-background.png"
import logo from "@/imges/logo.svg"
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [usermenuOpen, setusermenuOpen] = useState(false);
    const [userLogin, setUserLogin] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    const toggleMeun = () => {
        setusermenuOpen(!usermenuOpen);
    };

    useEffect(() => {
        const logged = localStorage.getItem('isLoggedIn');
        if (logged) {
            setisLoggedIn(true);
            const userLogin = JSON.parse(localStorage.getItem('userLogin'));
            setUserLogin(userLogin);
        }
    }, []);

    const handleStartLearning = () => {
        if (!isLoggedIn) {
            Swal.fire({
                title: t("navbar.alertTitle"),
                text: t("navbar.alertText"),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#fe3130",
                cancelButtonColor: "#dadada",
                confirmButtonText: t("navbar.login")
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            });
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-dark fixed top-0 z-[1000] w-full shadow">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image src={logo} alt="logo" width={60} height={60} priority />
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={handleStartLearning}
                        className="text-primary border border-primary font-bold hover:text-white hover:bg-primary px-4 py-2 rounded-full">
                        {t('navbar.startLearning')}
                    </button>

                    {isLoggedIn && (
                        <div className="relative">
                            <button type="button" onClick={toggleMeun} className="flex items-center">
                                <Image
                                    className="w-8 h-8 rounded-full"
                                    src={theme === 'dark' ? userImgDark : userImg}
                                    alt="user photo"
                                />
                            </button>
                            {usermenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark rounded-lg shadow">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm font-medium">{userLogin?.userName}</span>
                                        <span className="block text-xs text-gray-500">{userLogin?.email}</span>
                                    </div>
                                    <ul className="py-2">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.settings')}</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.earnings')}</a></li>
                                        <li><a href="#" onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href = '/' }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.signout')}</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Dark mode + Language */}
                    <button onClick={toggleTheme} className="text-black text-lg dark:text-white">
                        {theme === 'dark' ? "🌞" : "🌙"}
                    </button>
                    <LanguageSwitcher />
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-black dark:text-white">
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-dark shadow px-4 py-6 space-y-4">
                    <button
                        onClick={handleStartLearning}
                        className="block w-full text-center text-primary border border-primary font-bold hover:text-white hover:bg-primary px-4 py-2 rounded-full">
                        {t('navbar.startLearning')}
                    </button>

                    {isLoggedIn && (
                        <div className="space-y-2">
                            <div className="flex flex-col items-center">
                                <Image className="w-10 h-10 rounded-full" src={theme === 'dark' ? userImgDark : userImg} alt="user photo" />
                                <span className="font-medium">{userLogin?.userName}</span>
                                <span className="text-sm text-gray-500">{userLogin?.email}</span>
                            </div>
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.settings')}</a>
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.earnings')}</a>
                            <a href="#" onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.href = '/' }} className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{t('navbar.signout')}</a>
                        </div>
                    )}

                    <div className="flex justify-center gap-6">
                        <button onClick={toggleTheme} className="text-black text-lg dark:text-white">
                            {theme === 'dark' ? "🌞" : "🌙"}
                        </button>
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
