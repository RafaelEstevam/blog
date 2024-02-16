import PostCardV2 from './postCard.v2.component';

const PostListV2 = ({postsList, list}:any) => {
    return (
        <div className='w-full flex flex-col xl:grid xl:grid-cols-3 gap-10'>
            {postsList.map((post:any, index:number) => (
                <>
                    <PostCardV2 
                        post={post} 
                        isList={list} 
                        size={index === 0 ? 'lg' : 'md'} 
                        title={index === 0 ? 'H2' : 'H3'} 
                        key={post.title} 
                        showShort={index === 0 ? true : false} 
                    />
                </>
                
            ))}
        </div>
    )
};

export default PostListV2;