'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import userImgDark from "@/imges/user.png"
import userImg from "@/imges/user-image-with-black-background.png"

const Navbar = () => {

    const [theme, setTheme] = useState('light')
    const [usermenuOpen, setusermenuOpen] = useState(false);
    const [userLogin, setUserLogin] = useState(null);
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);


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
    }

    const toggleMeun = () => {
        setusermenuOpen(!usermenuOpen);
    }

    useEffect(() => {
        if (isLoggedIn) {
            const userLogin = JSON.parse(localStorage.getItem('userLogin'));
            setUserLogin(userLogin);
            console.log(userLogin)
        }
    }, []);

    return (
        // Navbar
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-end space-x-2 rtl:space-x-reverse text-2xl font-bold">
                    <span className='text-primary md:text-5xl text-2xl'>EN</span>
                    <span className="self-center dark:text-white">Lessons</span>
                </a>
                <div className='flex items-center gap-6'>
                    <a href="#" className="text-primary border border-primary font-bold hover:text-white hover:bg-primary md:p-4 p-2 rounded-full ">Start Learning</a>
                    {isLoggedIn ?
                        <div className="relative">
                            <button type="button" onClick={toggleMeun} className="flex text-smrounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <Image className="w-8 h-8 rounded-full" src={
                                    theme === 'dark' ? userImgDark : userImg
                                } alt="user photo" />
                            </button>
                            {usermenuOpen ?
                                <div className="z-50 absolute right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{userLogin.userName}</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userLogin.email}</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={
                                                () => {
                                                    localStorage.removeItem('isLoggedIn');
                                                    window.location.href = '/';
                                                }
                                            } className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                                : ''}
                        </div>
                        : ""}
                    {/*toggel btn dark */}
                    <button
                        type="button"
                        className="text-black dark:text-white" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
