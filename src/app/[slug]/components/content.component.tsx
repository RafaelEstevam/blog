import Categories from "@/app/components/categories.component";
import { RelatedPost } from "../post.interface";
import PostRelatedPosts from "./relatedPosts.component";
import PostSidebar from "./sidebar.component";

interface PostContentProps {
    content: any,
    relatedPosts: RelatedPost[]
}

const PostContent = async ({content, relatedPosts}:PostContentProps) => {
    return (
        <div className="gap-8 w-full xl:w-full xl:flex xl:justify-center">
            <div className="hidden xl:block xl:w-1/6">
                <PostSidebar />
            </div>
            <div
            className={`
                content
                bg-slate-700 
                rounded-2xl 
                p-8
                xl:p-10
                xl:w-4/6
            `}
            dangerouslySetInnerHTML={{__html: content.html}} />
            <div className="flex-col gap-8 hidden mt-8 xl:mt-0 md:flex xl:w-1/6">
                <Categories />
                <PostRelatedPosts relatedPosts={relatedPosts} />
            </div>
        </div>
        
        
    )
};

export default PostContent;