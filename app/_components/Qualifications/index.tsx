import styles from "./index.module.css";

export default function Qualifications() {
    return (
        <ul className={styles.container}>{/*HOME画面用テスト*/}
            <li className={styles.content}>AI900</li>
            <li className={styles.content}>MOS PowerPoint</li>
            <li className={styles.content}>MOS Excel</li>
        </ul>
    );
}