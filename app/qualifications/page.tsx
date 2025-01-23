import Image from "next/image";
import Link from "next/link";
import { getQualificationsList } from "../_libs/microcms";
import { QUALIFICATIONS_LIST_LIMIT } from "../_constants";
import Date from "@/app/_components/Date";
import styles from "./page.module.css";

export default async function Page() {
    const data = await getQualificationsList({limit:QUALIFICATIONS_LIST_LIMIT});
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>資格</h1>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ) : (
                <div>
                    {data.contents.map((article) => (
                        <div key={article.id} className={styles.item}>
                            <Link href={`/qualifications/${article.id}`} className={styles.list}>
                                {article.thumbnail?(
                                    <Image
                                        src={article.thumbnail.url}
                                        alt={article.name}
                                        className={styles.thumbnail}
                                        width={article.thumbnail.width}
                                        height={article.thumbnail.height}
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
                                <p className={styles.name}>{article.name}</p>
                                <p className={styles.date}>取得日:<Date date={article.date} /></p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}