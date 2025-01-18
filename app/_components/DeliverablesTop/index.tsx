import { getDeliverablesList} from "@/app/_libs/microcms";
import { TOP_DELIVERABLES_LIMIT } from "@/app/_constants";
import styles from "./index.module.css";

export default async function DeliverablesTop(){
    const data=await getDeliverablesList({limit:TOP_DELIVERABLES_LIMIT});
    return(
        <div>
            {data.contents.length===0?(
                <p className={styles.empty}>まだ作成した成果物はありません。</p>
            ):(
                <div className={styles.container}>
                    {data.contents.map((deliverables)=>(
                        <div key={deliverables.id}>
                            <p className={styles.content}>{deliverables.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}