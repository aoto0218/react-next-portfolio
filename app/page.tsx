import Image from "next/image";
import styles from "./page.module.css";
import {getDeliverablesList,getQualificationsList} from "@/app/_libs/microcms";
import QualificationsTop from "./_components/QualificationsTop";
import {DELIVERABLES_LIST_LIMIT, QUALIFICATIONS_LIST_LIMIT} from "@/app/_constants";
import DeliverablesTop from "./_components/DeliverablesTop";
import ChatScreen from "./_components/ChatScreen";
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
            <ChatScreen />
        </main>
    );
}