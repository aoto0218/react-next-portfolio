import Qualifications from "@/app/_components/Qualifications";
import styles from "./page.module.css";
import { getQualificationsList } from "../_libs/microcms";
import { QUALIFICATIONS_LIST_LIMIT } from "../_constants";

export default async function qualifications() {
    const data = await getQualificationsList({limit:QUALIFICATIONS_LIST_LIMIT});

    return (
        
        <>
            <p className={styles.title}>取得資格</p>
            <Qualifications
                data={data.contents.map(item => ({
                    ...item,
                    thumbnail: item.thumbnail ? {
                        ...item.thumbnail,
                        width: item.thumbnail.width ?? 0,
                        height: item.thumbnail.height ?? 0
                    } : undefined
                }))}
            />
        </>
    );
}