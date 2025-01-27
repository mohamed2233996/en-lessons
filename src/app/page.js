'use client'
import { useRouter } from "next/navigation";
import Landing from "./_componant/Landing";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      router.push('/dashboard');
      return null;
    }
  }, []);


  return (
    <div>
      <Landing />
    </div>
  );
}
