export interface PostProps {
    id?: string,
    title: string,
    content: any,
    gallery: any[],
    slug: string,
    categories?: string[],
    shortText?: string,
    createdBy: {
        name: string,
    },
    createdAt: string,
    updatedAt: string,
    likes?: number,
};