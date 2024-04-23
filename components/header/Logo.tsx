"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Logo = () => {
    //update the size of the logo when the size of the screen changes
    const [width, setWidth] = useState(0);

    const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    return (
        <>
            <Link href="/">
                <div className="flex items-center">
                    {/* <Image
                        priority={true}
                        src="/images/logo.png"
                        alt="Logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className={`h-auto relative ${styles.logoWidth}`}
                    /> */}
                    <h2>ESND-UI-Walkthrough Phase 2</h2>
                </div>
            </Link>
        </>
    );
}

export default Logo;