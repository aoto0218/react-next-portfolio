import Image from "next/image";
import Link from "next/link";
import Date from "../Date";
import styles from "./index.module.css";

type Qualification = {
    id: string;
    name: string;
    thumbnail?: {
        url: string;
        width: number;
        height: number;
    };
    detail?: string;
    date: string;
};

type QualificationsProps = Qualification[];

export default function Qualifications({
    data
}: {
    data: QualificationsProps;
}) {

    return (
        <div className={styles.container}>
            {data.length === 0 ? (
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ) : (
                <ul>
                    {data.map((qualifications) => (
                        <li key={qualifications.id} className={styles.item}>
                            <Link href={`/qualifications/${qualifications.id}`} className={styles.list}>
                                <Image
                                    src={qualifications.thumbnail?.url || "/no-image.png"}
                                    alt={qualifications.name}
                                    width={qualifications.thumbnail?.width || 1920}
                                    height={qualifications.thumbnail?.height || 1080}
                                    className={styles.thumbnail}
                                />
                                <p className={styles.name}>{qualifications.name}</p>
                                <p className={styles.date}>取得日:<Date date={qualifications.date} /></p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}