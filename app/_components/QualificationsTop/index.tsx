import { getQualificationsList} from "@/app/_libs/microcms";
import { TOP_QUALIFICATIONS_LIMIT } from "@/app/_constants";
import styles from "./index.module.css";

export default async function QualificationsTop(){
    const data=await getQualificationsList({limit:TOP_QUALIFICATIONS_LIMIT});
    return(
        <div>
            {data.contents.length===0?(
                <p className={styles.empty}>まだ取得した資格はありません。</p>
            ):(
                <div className={styles.container}>
                    {data.contents.map((qualifications)=>(
                        <div key={qualifications.id}>
                            <p className={styles.content}>{qualifications.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}