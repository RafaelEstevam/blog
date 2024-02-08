interface PostCategoryProps {
    categories?: string[]
}

const PostCategory = ({categories}:PostCategoryProps) => {
    return (
        <div className='flex gap-4 pt-2'>
            {categories?.map((category: any) => (
                <p className='bg-slate-500 p-1 rounded-2xl text-xs' key={category}>{category}</p>
            ))}
        </div>
    )
};

export default PostCategory;