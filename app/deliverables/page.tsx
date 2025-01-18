import Deliverables from "@/app/_components/Deliverables";
import styles from "./page.module.css";
import { getDeliverablesList } from "../_libs/microcms";
import { DELIVERABLES_LIST_LIMIT } from "../_constants";

export default async function deliverables() {
    const data = await getDeliverablesList({limit:DELIVERABLES_LIST_LIMIT});

    return (
        <>
            <p className={styles.title}>成果物</p>
            <Deliverables
                data={data.contents.map(item => ({
                    ...item,
                    thmbnail: item.thmbnail ? {
                        ...item.thmbnail,
                        width: item.thmbnail.width ?? 0,
                        height: item.thmbnail.height ?? 0
                    } : undefined,
                    image: item.image ? {
                        ...item.image,
                        width: item.image.width ?? 0,
                        height: item.image.height ?? 0
                    } : undefined
                }))}
            />
        </>
    );
}