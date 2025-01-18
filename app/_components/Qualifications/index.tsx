import styles from "./index.module.css";

export default function Deliverables() {
    return (
        <ul className={styles.container}>{/*HOME画面用テスト*/}
            <li className={styles.content}>Python TypingGame</li>
            <li className={styles.content}>WEB基礎 AboutMe</li>
            <li className={styles.content}>Nuxt3 Portfolio</li>
        </ul>
    );
}