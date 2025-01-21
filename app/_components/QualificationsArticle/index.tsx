import Link from "next/link";
import Image from "next/image";
import type {QualificationsData} from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";

type Props={
    data:QualificationsData;
};

export default function QualificationsArticle({data}:Props){
    return(
        <main className={styles.container}>
            <div className={styles.button_container}>
                <h1 className={styles.name}>{data.name}</h1>
                <Link href="/qualifications" className={styles.button}>一覧に戻る</Link>
            </div>
            {data.thumbnail&&(
                <Image
                    src={data.thumbnail.url}
                    alt=""
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            <p className={styles.detail}>{data.detail}</p>
            <p className={styles.date}>取得日:<Date date={data.date} /></p>
        </main>
    );
}