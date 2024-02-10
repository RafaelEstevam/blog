import { queryAllPosts } from "../../[slug]/query";
import { gql_client } from "../../services";

const Page = async () => {

    const {post}:any = await gql_client.request(queryAllPosts);

    return (
        <>teste</>
    )
};

export default Page;