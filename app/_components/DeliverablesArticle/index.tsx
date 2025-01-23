import Link from "next/link";
import Image from "next/image";
import type {DeliverablesData} from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";
import {Fragment} from "react";

type Props = {
    data: DeliverablesData;
};

export default function DeliverablesArticle({ data }: Props) {
    return (
        <main className={styles.container}>
            <div className={styles.button_container}>
                <h1 className={styles.name}>{data.name}</h1>
                <Link href="/deliverables" className={styles.button}>一覧に戻る</Link>
            </div>
            {data.thumbnail && (
            <Image
                src={data.thumbnail.url}
                alt=""
                className={styles.thumbnail}
                width={data.thumbnail.width}
                height={data.thumbnail.height}
            />
            )}
            {data.detail && <p className={styles.detail}>
                {data.detail.split("\n").map((line,index)=>(
                    <Fragment key={index}>
                        {line}
                        <br />
                    </Fragment>
                ))}
            </p>}
            {data.images && data.images.length > 0 && (
                <>
                    <h2 className={styles.imagesTitle}>画像</h2>
                    <div className={styles.imageContainer}>
                    {data.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            className={styles.image}
                            width={image.width}
                            height={image.height}
                        />
                    ))}
                    </div>
                </>
            )}
            {data.file && (
            <div className={styles.file}>
                <a href={data.file} className={styles.filelink} target="_blank">
                実際の成果物はこちら
                </a>
            </div>
            )}

            <p className={styles.date}>取得日: <Date date={data.date} /></p>
        </main>
    );
}