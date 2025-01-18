import Image from "next/image";
import type {QualificationsData} from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";

type Props={
    data:QualificationsData;
};

export default function Article({data}:Props){
    return(
        <main>
            <h1 className={styles.name}>{data.name}</h1>
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