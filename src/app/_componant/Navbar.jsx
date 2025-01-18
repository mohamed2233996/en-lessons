'use client'
import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState('light')

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
    return (
        // Navbar
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-end space-x-2 rtl:space-x-reverse text-2xl font-bold">
                    <span className='text-primary md:text-5xl text-2xl'>EN</span>
                    <span class="self-center dark:text-white">Lessons</span>
                </a>
                <div className='flex items-center gap-6'>
                    <a href="#" className="text-primary border border-primary font-bold hover:text-white hover:bg-primary p-4 rounded-full ">Start Learning</a>
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
