import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className={styles.logo}
                />
            </Link>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <Link href="/" className={styles.nav_link}><span className={styles.mini}>ホーム</span><br/>Home</Link>
                    </li>
                    <li>
                        <Link href="/qualifications" className={styles.nav_link}><span className={styles.mini}>資格</span><br/>Qualifications</Link>
                    </li>
                    <li>
                        <Link href="/deliverables" className={styles.nav_link}><span className={styles.mini}>成果物</span><br/>Deliverables</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}