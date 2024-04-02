interface PostCategoryProps {
    categories?: string[]
}

const PostCategory = ({categories}:PostCategoryProps) => {
    return (
        <div className='flex gap-4'>
            {categories?.map((category: any) => (
                <p className='rounded-2xl text-sm text-white' key={category}>#{category}</p>
            ))}
        </div>
    )
};

export default PostCategory;