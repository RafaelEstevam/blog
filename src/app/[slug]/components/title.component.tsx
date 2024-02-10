import PostCategory from "../../components/postCategory.component";

const PostTitle = async ({title, categories}:any) => {
    return (
        <div className="w-full flex flex-col gap-4 xl:items-center">
            <h1 className="font-bold text-5xl text-left w-full xl:text-center text-white">{title}</h1>
            {categories.length > 0 && <PostCategory {...{categories}} />}
        </div>
    )
};

export default PostTitle;