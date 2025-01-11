import styles from "./index.module.css";
import { getQualificationsList } from "@/app/_libs/microcms";

export default async function Qualifications() {
    const data=await getQualificationsList();
    return (
        {data.contents.length===0?(
            <p className={styles.empty}>メンバーが登録されていません。</p>
        ):(
            <ul>
                {data.contents.map((qualifications)=>(
                    <li key={qualifications.id} className={styles.list}>
                        <dl>
                            <dd className={styles.position}>{qualifications.name}</dd>
                        </dl>
                    </li>
                ))}
            </ul>
        )}
    );
}