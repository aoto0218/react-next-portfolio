import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type QualificationsData={
    name: string;
    thumbnail: MicroCMSImage;
    detail: string;
    date:string;
}& MicroCMSListContent;

export type DeliverablesData={
    name: string;
    thumbnail: MicroCMSImage;
    detail: string;
    image: MicroCMSImage;
    date:string;
    file:string;
}& MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getQualificationsList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<QualificationsData>({
            endpoint: "qualifications",
            queries,
        });
    return listData;
};

export const getDeliverablesList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<DeliverablesData>({
            endpoint: "deliverables",
            queries,
        });
    return listData;
};

export const getQualificationsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
    ) => {
    const detailData = await client.getListDetail<QualificationsData>({
        endpoint: 'qualifications',
        contentId,
        queries,
        customRequestInit:{
            next:{
                revalidate:queries?.draftKey===undefined?60:0,
            },
        },
    });
    return detailData;
};

export const getDeliverablesDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
    ) => {
    const detailData = await client.getListDetail<DeliverablesData>({
        endpoint: 'deliverables',
        contentId,
        queries,
        customRequestInit:{
            next:{
                revalidate:queries?.draftKey===undefined?60:0,
            },
        },
    });
    return detailData;
};