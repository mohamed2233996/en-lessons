'use client'
import { useRouter } from "next/navigation";
import Landing from "./_componant/Landing";

export default function Home() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
      const router = useRouter();

  if (isLoggedIn) {
    router.push('/dashboard');
    return null;
  }
  return (
    <div>
      <Landing />
    </div>
  );
}
