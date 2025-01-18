import { getQualificationsList} from "@/app/_libs/microcms";
import { QUALIFICATIONS_LIST_LIMIT } from "@/app/_constants";
import Image from "next/image";
import styles from "./index.module.css";

type Qualification = {
    id: string;
    name: string;
    thumbnail?: {
        url: string;
        width: number;
        height: number;
    };
    detail: string;
    date: string;
};

type QualificationsProps = Qualification[];

export default function Qualifications({
    data
}:{
    data: QualificationsProps;
}){

    return(
        <div className={styles.container}>
            {data.length===0?(
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ):(
                <ul>
                    {data.map((qualifications)=>(
                        <li key={qualifications.id} className={styles.list}>
                            <p className={styles.name}>{qualifications.name}</p>
                            <Image
                                src={qualifications.thumbnail?.url || "/no-image.png"}
                                alt={qualifications.name}
                                width={qualifications.thumbnail?.width || 640}
                                height={qualifications.thumbnail?.height || 360}
                                className={styles.thumbnail}
                            />
                            <p className={styles.detail}>{qualifications.detail}</p>
                            <p className={styles.date}>{qualifications.date}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}