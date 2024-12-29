import Image from "next/image";
import styles from "./page.module.css";
import Qualifications from "./_components/Qualifications";
import Deliverables from "./_components/Deliverables";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.content_feeld}>
                    <h2 className={styles.h2}>最近取得した資格</h2>
                    <Qualifications />
                    <Link href="/qualifications" className={styles.content_link}>詳しく見る</Link>
                </div>
                <div className={styles.content_feeld}>
                    <h2 className={styles.h2}>最近の成果物</h2>
                    <Deliverables />
                    <Link href="/deliverables" className={styles.content_link}>詳しく見る</Link>
                </div>
            </div>
            <div className={styles.s_title}>
                <h1 className={styles.s_title_h1}>自己紹介</h1>
                <h2 className={styles.s_title_h2}>About Me</h2>
            </div>
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
                    <p>18歳です。</p>
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
        </main>
    );
}