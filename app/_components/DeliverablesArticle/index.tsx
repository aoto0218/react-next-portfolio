import Image from "next/image";
import type {DeliverablesData} from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
    data: DeliverablesData;
};

export default function DeliverablesArticle({ data }: Props) {
    return (
    <main className={styles.container}>
        <h1 className={styles.name}>{data.name}</h1>

        {data.thumbnail && (
        <Image
            src={data.thumbnail.url}
            alt=""
            className={styles.thumbnail}
            width={data.thumbnail.width}
            height={data.thumbnail.height}
        />
        )}

        {data.detail && <p className={styles.detail}>{data.detail}</p>}
        {data.images && data.images.length > 0 && (
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
        )}

        {data.file && (
        <div className={styles.file}>
            <a href={data.file} className={styles.filelink} target="_blank" rel="noopener noreferrer">
            実際の成果物はこちら
            </a>
        </div>
        )}

        <p className={styles.date}>取得日: <Date date={data.date} /></p>
    </main>
    );
}