import Image from "next/image";
import styles from "./page.module.css";
import {getDeliverablesList,getQualificationsList} from "@/app/_libs/microcms";
import QualificationsTop from "./_components/QualificationsTop";
import {DELIVERABLES_LIST_LIMIT, QUALIFICATIONS_LIST_LIMIT} from "@/app/_constants";
import DeliverablesTop from "./_components/DeliverablesTop";
import AgeCalculator from "./_components/AgeCalculator";
import Link from "next/link";

export default async function Home() {
    const {contents:qualifications} = await getQualificationsList({
        limit:QUALIFICATIONS_LIST_LIMIT
    });
    const {contents:deliverables} = await getDeliverablesList({
        limit:DELIVERABLES_LIST_LIMIT
    });
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.content_feeld}>
                    <h2 className={styles.h2}>最近取得した資格</h2>
                    <QualificationsTop qualifications={qualifications}/>
                    <Link href="/qualifications" className={styles.content_link}>詳しく見る</Link>
                </div>
                <div className={styles.content_feeld}>
                    <h2 className={styles.h2}>最近の成果物</h2>
                    <DeliverablesTop deliverables={deliverables}/>
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
        </main>
    );
}