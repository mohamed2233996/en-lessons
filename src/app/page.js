'use client'
import { useRouter } from "next/navigation";
import Landing from "./_componant/Landing";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // تأكد من أن الكود يعمل في المتصفح فقط
    setIsClient(true);

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [router]);

  // قم بالعرض فقط عندما نكون في بيئة المتصفح
  if (!isClient) {
    return null; // تجنب عرض المحتوى على الخادم أثناء مرحلة SSR
  }

  return (
    <div>
      <Landing />
    </div>
  );
}
