"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./_componant/Loading";
import Navbar from "./_componant/Navbar";
import '@/i18n'; 

export default function ClientProvider({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [lastPathname, setLastPathname] = useState(pathname);

    useEffect(() => {
        if (pathname !== lastPathname) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
                setLastPathname(pathname);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname, lastPathname]);

    return (
        <>
            <Navbar />
            {loading ? <Loading visible={loading} /> : children}
        </>
    );
}
