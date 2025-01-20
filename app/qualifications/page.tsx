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
            <h1 className={styles.title}>取得資格</h1>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ) : (
                <ul>
                    {data.contents.map((qualifications) => (
                        <li key={qualifications.id} className={styles.item}>
                            <Link href={`/qualifications/${qualifications.id}`} className={styles.list}>
                                {qualifications.thumbnail?(
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