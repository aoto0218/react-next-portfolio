import {notFound} from "next/navigation";
import { getDeliverablesDetail } from '@/app/_libs/microcms';
import DeliverablesArticle from "@/app/_components/DeliverablesArticle";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getDeliverablesDetail(params.slug).catch(notFound);
    return(
        <DeliverablesArticle data={data}/>
    );
}