import PostList from './postList/postList.component';
import { getPosts } from '../queries/posts';

const PostGallery = async () => {

    const posts = await getPosts(1,0,10);

    return (
        <div className="w-full flex flex-wrap gap-10">
            <PostList postsList={posts} heading='H2' />
        </div>
    )
};

export default PostGallery;