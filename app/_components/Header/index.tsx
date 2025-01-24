"use client";

import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menu = document.querySelector(`.${styles.nav_container}`);
            const hamburger = document.querySelector(`.${styles.hamburger}`);
            if (menu && hamburger && 
                !menu.contains(event.target) && 
                !hamburger.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.icon}>
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
                    className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.hamburger_line}></span>
                    <span className={styles.hamburger_line}></span>
                    <span className={styles.hamburger_line}></span>
                </button>
            </div>
            <nav 
                className={`${styles.nav_container} ${isMenuOpen ? styles.show : ''}`}
                aria-hidden={!isMenuOpen}
            >
                <ul className={styles.nav}>
                    <li className={styles.nav_item}>
                        <Link href="/" className={styles.nav_link} onClick={toggleMenu}>
                            <p className={styles.mini}>ホーム</p>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/qualifications" className={styles.nav_link} onClick={toggleMenu}>
                            <p className={styles.mini}>資格</p>
                            <p>Qualifications</p>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/deliverables" className={styles.nav_link} onClick={toggleMenu}>
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