import PostSidebar from "./sidebar.component";

const PostContent = async ({content}:any) => {

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
            <div className="hidden xl:block xl:w-1/6">
            </div>
        </div>
        
        
    )
};

export default PostContent;