'use client'
import { useRouter } from "next/navigation";
import Landing from "./_componant/Landing";
import { useEffect, useState } from "react";
import Loading from "./_componant/Loading";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    
    // تأكد من أن الكود يعمل في المتصفح فقط
    setIsClient(true);

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      router.push('/dashboard');
    }
    setLoading(false); // إذا لم يكن مسجل دخول، أظهر الصفحة الرئيسية

  }, [router]);

  // // قم بالعرض فقط عندما نكون في بيئة المتصفح
  // if (!isClient) {
  //   return null; // تجنب عرض المحتوى على الخادم أثناء مرحلة SSR
  // }

    // إذا لا يزال يتحقق من الحالة، أظهر شاشة تحميل
    if (loading) {
      return <Loading />;
    }

  return (
    <div>
      <Landing />
    </div>
  );
}
