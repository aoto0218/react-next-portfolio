import styles from "./index.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.gradient}></div>
            <p className={styles.copylight}>© 2024 by Aoto Sanae</p>
        </footer>
    )
}