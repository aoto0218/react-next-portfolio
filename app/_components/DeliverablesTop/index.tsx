import Link from "next/link";
import styles from "./index.module.css";
import { DeliverablesData } from "@/app/_libs/microcms";
import { TOP_DELIVERABLES_LIMIT } from "@/app/_constants";

type Props = {
    deliverables: DeliverablesData[];
};

export default function DeliverablesTop({ deliverables }: Props) {
    if (deliverables.length === 0) {
        return <p className={styles.empty}>まだ取得した資格はありません。</p>;
    }
    return (
        <div>
            {deliverables.slice(0,TOP_DELIVERABLES_LIMIT).map((article) => (
                <div key={article.id} className={styles.container}>
                    <Link href={`/deliverables/${article.id}`} className={styles.link}><p className={styles.content}>{article.name}</p></Link>
                </div>
            ))}
        </div>
    );
}