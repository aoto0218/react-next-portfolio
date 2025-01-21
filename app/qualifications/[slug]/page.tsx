import {notFound} from "next/navigation";
import { getQualificationsDetail } from '@/app/_libs/microcms';
import QualificationsArticle from "@/app/_components/QualificationsArticle";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getQualificationsDetail(params.slug).catch(notFound);
    return(
        <QualificationsArticle data={data}/>
    );
}