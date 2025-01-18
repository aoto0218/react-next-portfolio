import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

type Deliverables = {
    id: string;
    name: string;
    thumbnail?: {
        url: string;
        width: number;
        height: number;
    };
    detail: string;
    image?: {
        url: string;
        width: number;
        height: number;
    };
    date: string;
    file: string;
};

type DeliverablesProps = Deliverables[];

export default function Deliverables({
    data
}:{
    data: DeliverablesProps;
}){

    return(
        <div className={styles.container}>
            {data.length===0?(
                <p className={styles.empty}>まだ作成した成果物はありません。</p>
            ):(
                <ul>
                    {data.map((daliverables)=>(
                        <li key={daliverables.id} className={styles.list}>
                            <p className={styles.name}>{daliverables.name}</p>
                            <Image
                                src={daliverables.thumbnail?.url || "/no-image.png"}
                                alt={daliverables.name}
                                width={daliverables.thumbnail?.width || 640}
                                height={daliverables.thumbnail?.height || 360}
                                className={styles.thumbnail}
                            />
                            <p className={styles.detail}>{daliverables.detail}</p>
                            <Image
                                src={daliverables.image?.url || "/no-image.png"}
                                alt={daliverables.name}
                                width={daliverables.image?.width || 640}
                                height={daliverables.image?.height || 360}
                                className={styles.image}
                            />
                            <p className={styles.date}>{daliverables.date}</p>
                            {/* <Link href={daliverables.file} className={styles.file}>実際の成果物はこちら</Link> */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}