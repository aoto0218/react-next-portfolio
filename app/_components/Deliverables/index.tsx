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
                    {data.map((deliverables)=>(
                        <li key={deliverables.id} className={styles.list}>
                            <Image
                                src={deliverables.thumbnail?.url || "/no-image.png"}
                                alt={deliverables.name}
                                width={deliverables.thumbnail?.width || 1920}
                                height={deliverables.thumbnail?.height || 1080}
                                className={styles.thumbnail}
                            />
                            <p className={styles.name}>{deliverables.name}</p>
                            <p className={styles.date}>{deliverables.date}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}