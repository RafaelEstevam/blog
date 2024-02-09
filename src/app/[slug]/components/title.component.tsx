import PostCategory from "../../components/postCategory.component";

const PostTitle = ({title, categories}:any) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <h1 className="font-bold text-5xl text-left w-full">{title}</h1>
            {categories.length > 0 && <PostCategory {...{categories}} />}
        </div>
    )
};

export default PostTitle;