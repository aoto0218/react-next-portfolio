import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getDeliverablesList } from "../_libs/microcms";
import { DELIVERABLES_LIST_LIMIT } from "../_constants";
import Date from "@/app/_components/Date";

export default async function deliverables() {
    const data = await getDeliverablesList({limit:DELIVERABLES_LIST_LIMIT});
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>成果物</h1>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>まだ作成した成果物はありません。</p>
            ) : (
                <div>
                    {data.contents.map((deliverables) => (
                        <div key={deliverables.id} className={styles.item}>
                            <Link href={`/deliverables/${deliverables.id}`} className={styles.list}>
                                {deliverables.thumbnail?(
                                    <Image
                                        src={deliverables.thumbnail.url}
                                        alt={deliverables.name}
                                        className={styles.thumbnail}
                                        width={deliverables.thumbnail.width}
                                        height={deliverables.thumbnail.height}
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
                                <p className={styles.name}>{deliverables.name}</p>
                                <p className={styles.date}>作成日:<Date date={deliverables.date} /></p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}