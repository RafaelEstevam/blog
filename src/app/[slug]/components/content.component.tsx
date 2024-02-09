const PostContent = ({content}:any) => {
    return (
        <div className="w-full bg-slate-700 rounded-2xl p-4 xl:p-10" dangerouslySetInnerHTML={{__html: content.html}} />
    )
};

export default PostContent;