import PostCard from './postCard.component';

const PostList = ({postsList, list}:any) => {
    const grid = 4;
    return (
        <>
            {postsList.map((post:any, index:number) => (
                <>
                    {
                        (index == 0 || index % grid == 0) && !list &&(
                            <PostCard post={post} size='lg' title='H2' key={post.title} showShort />
                        )
                    }

                    {
                        (index != 0 && index % grid != 0) && !list && (
                            <PostCard post={post} size='md' title='H3' key={post.title} />
                        )
                    }

                    {list && (
                        <PostCard post={post} size='md' title='H3' key={post.title} isList />
                    )}
                </>
            ))}
        </>
    )
};

export default PostList;