import Link from "next/link";
import styles from "./index.module.css";
import { QualificationsData } from "@/app/_libs/microcms";
import { TOP_QUALIFICATIONS_LIMIT } from "@/app/_constants";

type Props = {
    qualifications: QualificationsData[];
};

export default function QualificationsTop({ qualifications }: Props) {
    if (qualifications.length === 0) {
        return <p className={styles.empty}>まだ取得した資格はありません。</p>;
    }
    return (
        <div>
            {qualifications.slice(0,TOP_QUALIFICATIONS_LIMIT).map((article) => (
                <div key={article.id} className={styles.container}>
                    <Link href={`/qualifications/${article.id}`} className={styles.link}><p className={styles.content}>{article.name}</p></Link>
                </div>
            ))}
        </div>
    );
}