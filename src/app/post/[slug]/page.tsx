import { queryPost } from "../../[slug]/query";
import { gql_client } from "../../services";

const Page = async ({params}:any) => {

    const {slug} = params;
    const variables = {slug}
    const {post}:any = await gql_client.request(queryPost, variables);

    return (
        <>{post.title}</>
    )
};

export default Page;