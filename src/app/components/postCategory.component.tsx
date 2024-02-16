interface PostCategoryProps {
    categories?: string[]
}

const PostCategory = ({categories}:PostCategoryProps) => {
    return (
        <div className='flex gap-4'>
            {categories?.map((category: any) => (
                <p className='bg-blue-600 py-1 px-2 rounded-2xl text-xs text-white' key={category}>{category}</p>
            ))}
        </div>
    )
};

export default PostCategory;