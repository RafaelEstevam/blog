const PostDetails = ({autor, createdAt}: any) => {
    return (
        <div className="w-full flex justify-between items-center">
            <p>Por <strong>{autor}</strong></p>
            <div>{createdAt}</div>
        </div>
    )
};

export default PostDetails;