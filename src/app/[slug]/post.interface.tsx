export interface RelatedPost {
    id: string,
    title: string,
    slug: string,
    shortText: string
}

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
    relatedPosts?: RelatedPost[]
};