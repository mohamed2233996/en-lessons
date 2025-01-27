"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
                <div className="flex flex-col items-center pt-8 pb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                        <p>Hello {userLogin?.userName}!</p>
                        <p className=" mt-2">Welcome to <span className='text-primary'>EN Lessons</span>!</p>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Page;
