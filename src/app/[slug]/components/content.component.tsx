
const PostContent = ({content}:any) => {
    return (
        <div
            className={`
                content
                w-full 
                bg-slate-700 
                rounded-2xl 
                p-8
                xl:p-10
                xl:w-2/3
            `}
            dangerouslySetInnerHTML={{__html: content.html}} />
    )
};

export default PostContent;