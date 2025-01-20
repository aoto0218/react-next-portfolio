import Link from "next/link";
import styles from "./index.module.css";
import { DeliverablesData } from "@/app/_libs/microcms";

type Props = {
    deliverables: DeliverablesData[];
};

export default function DeliverablesTop({ deliverables }: Props) {
    if (deliverables.length === 0) {
        return <p className={styles.empty}>まだ取得した資格はありません。</p>;
    }
    return (
        <div>
            {deliverables.map((article) => (
                <div key={article.id} className={styles.container}>
                    <Link href={`/deliverables/${article.id}`} className={styles.link}><p className={styles.content}>{article.name}</p></Link>
                </div>
            ))}
        </div>
    );
}