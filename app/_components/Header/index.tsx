"use client";

import { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
            <div>
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="logo"
                    className={styles.logo}
                />
            </Link>
            <p className={styles.name}>早苗 碧大</p>
            </div>
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            </div>
            <nav className={`${styles.nav_container} ${isMenuOpen ? styles.show : ""}`}>
                <ul className={styles.nav}>
                    <li className={styles.nav_item}>
                        <Link href="/" className={styles.nav_link}>
                            <p className={styles.mini}>ホーム</p>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/qualifications" className={styles.nav_link}>
                            <p className={styles.mini}>資格</p>
                            <p>Qualifications</p>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/deliverables" className={styles.nav_link}>
                            <p className={styles.mini}>成果物</p>
                            <p>Deliverables</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.gradient}></div>
        </header>
    );
}
