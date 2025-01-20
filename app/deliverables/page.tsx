import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getDeliverablesList } from "../_libs/microcms";
import { DELIVERABLES_LIST_LIMIT } from "../_constants";

export default async function deliverables() {
    const data = await getDeliverablesList({limit:DELIVERABLES_LIST_LIMIT});
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>取得資格</h1>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ) : (
                <ul>
                    {data.contents.map((deliverables) => (
                        <li key={deliverables.id} className={styles.item}>
                            <Link href={`/deliverables/${deliverables.id}`} className={styles.list}>
                                {deliverables.thumbnail?(
                                    <Image
                                        src={qualifications.thumbnail.url}
                                        alt={qualifications.name}
                                        className={styles.thumbnail}
                                        width={qualifications.thumbnail.width}
                                        height={qualifications.thumbnail.height}
                                    />
                                ):(
                                    <Image
                                        className={styles.thumbnail}
                                        src="/no-image.png"
                                        alt="No Image"
                                        width={192}
                                        height={108}
                                    />
                                )}
                                <p className={styles.name}>{qualifications.name}</p>
                                <p className={styles.date}>取得日:<Date date={qualifications.date} /></p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}