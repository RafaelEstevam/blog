import type { Metadata, ResolvingMetadata } from 'next'

import {gql_client} from '../services';
import query from './query';
import PostComponent, { PostProps } from "./components/post.component";
import Page404 from '../404';
 
export async function generateMetadata({ params }: any, parent: ResolvingMetadata): Promise<Metadata> {
  const {slug} = params;
  const variables = { slug };
  const {posts}:any = await gql_client.request(query, variables);
 
  return {
    title: posts[0].title,
    description: posts[0].shortText,
    openGraph: {
      images: [posts[0].gallery[0]?.url],
    },
  }
}

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = { slug };
    const {posts}:any = await gql_client.request(query, variables);
    const post:PostProps = posts[0];

    return posts[0] ? (
        <PostComponent {...post} />
    ) : (
        <Page404 />
    );
};

export default Page
