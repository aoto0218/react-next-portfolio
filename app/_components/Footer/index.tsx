import Link from "next/link";
import styles from "./index.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.gradient}></div>
            <div className={styles.links}>
                <Link href="/" className={styles.link_content}><p className={styles.mini}>ホーム</p><p>Home</p></Link>
                <Link href="/qualifications" className={styles.link_content}><p className={styles.mini}>資格</p><p>Qualifications</p></Link>
                <Link href="/deliverables" className={styles.link_content}><p className={styles.mini}>成果物</p><p>Deliverables</p></Link>
            </div>
            <p className={styles.copylight}>© 2024 by Aoto Sanae</p>
        </footer>
    )
}