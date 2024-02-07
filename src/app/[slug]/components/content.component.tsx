const PostContent = ({content}:any) => {
    return (
        <div className="w-full" dangerouslySetInnerHTML={{__html: content.html}} />
    )
};

export default PostContent;