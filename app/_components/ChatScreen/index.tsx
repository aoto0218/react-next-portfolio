"use client";
import { useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import AgeCalculator from "@/app/_components/AgeCalculator";

export default function ChatScreen() {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${styles.balloon_right}, .${styles.balloon_left}, .${styles.shiga}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.show);
                    }
                });
            },
            { 
                threshold: 0.5,
                rootMargin: "0px 0px -20% 0px"
            }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    

    return (
        <div className={styles.chat}>
            <div className={styles.balloon_right}>
                <p>名前は？</p>
            </div>
            <div className={styles.balloon_left}>
                <p>「早苗 碧大」です。</p>
            </div>
            <div className={styles.balloon_left}>
                <p>「さなえ あおと」と読みます</p>
            </div>
            <div className={styles.balloon_right}>
                <p>年齢は？</p>
            </div>
            <div className={styles.balloon_left}>
                <AgeCalculator birthDate={new Date(2006, 2, 18)} />
            </div>
            <div className={styles.balloon_right}>
                <p>誕生日は？</p>
            </div>
            <div className={styles.balloon_left}>
                <p>2月18日です。</p>
            </div>
            <div className={styles.balloon_right}>
                <p>出身地は？</p>
            </div>
            <div className={styles.balloon_left}>
                <p>滋賀県の米原市です。<br />今は、京都で一人暮らしをしています。</p>
            </div>
            <Image
                src="/shiga.png"
                alt="滋賀県の地図"
                width={400}
                height={646}
                className={styles.shiga}
            />
        </div>
    );
}
