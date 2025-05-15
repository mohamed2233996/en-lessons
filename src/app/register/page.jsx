'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);  // حالة لإظهار/إخفاء كلمة المرور

    // التبديل بين إظهار وإخفاء كلمة المرور
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();

        // جلب البيانات الحالية من localStorage (إذا كانت موجودة)
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // إضافة المستخدم الجديد إلى القائمة
        const newUser = { userName, email, password };
        existingUsers.push(newUser);

        // تخزين القائمة المعدلة في localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));
        router.push('/login');
    }



    return (
        <div className='py-20 bg-white dark:bg-dark dark:text-white'>
            <div className="container m-auto">
                <div className="flex flex-col items-center pt-16 pb-12">
                    <a href="/" className="flex items-end space-x-2 rtl:space-x-reverse text-2xl font-bold mb-6">
                        <span className='text-primary md:text-5xl text-2xl'>EN</span>
                        <span className="self-center dark:text-white">Lessons</span>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="userName" id="userName"
                                        value={userName}
                                        onChange={(e) => setuserName(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className='relative'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}  // إذا كانت حالة showPassword true، نعرض النص بدلاً من كلمة المرور المخفية
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        <span
                                            onClick={togglePasswordVisibility}  // عند الضغط على الأيقونة نقوم بتبديل حالة إظهار كلمة المرور
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {showPassword ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                                    <path d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke="currentColor" strokeWidth="1.5" />
                                                </svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                                    <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-dark dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-primary border border-primary font-bold hover:text-white hover:bg-primary md:p-4 p-2 rounded-full">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link href='/login'>
                                        <span className="font-medium text-primary-600 hover:underline dark:text-primary">Login here</span>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
