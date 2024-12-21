import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.header}>
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
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <Link href="/" className={styles.nav_link}><p className={styles.mini}>ホーム</p><p>Home</p></Link>
                    </li>
                    <li>
                        <Link href="/qualifications" className={styles.nav_link}><p className={styles.mini}>資格</p><p>Qualifications</p></Link>
                    </li>
                    <li>
                        <Link href="/deliverables" className={styles.nav_link}><p className={styles.mini}>成果物</p><p>Deliverables</p></Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.gradient}></div>
        </header>
    )
}