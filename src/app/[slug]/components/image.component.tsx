
const PostImage = async ({image, title}:any) => {
    return (
        <div className="w-full bg-slate-800 rounded-2xl min-h-80 max-h-80 overflow-hidden flex flex-row items-center">
            {image.length > 0 && image?.map((img:any) => (
                <img src={img.url} alt={title} title={title} className="h-fit" key={img.url}/>
            ))}
        </div>
    )
};

export default PostImage;