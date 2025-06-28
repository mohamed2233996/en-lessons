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
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // توجيه المستخدم مباشرة حسب حالته
    if (isLoggedIn) {
      router.replace("/dashboard");
    } else {
      router.replace("/landing");
    }
  }, [router]);

  return (
  <div>
    <Loading />
  </div>
  );

}
