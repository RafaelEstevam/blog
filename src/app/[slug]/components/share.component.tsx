'use client'

import { PostProps } from "./post.component";

const PostShare = (post: PostProps) => {

    const handleShareOnLinkedin = () => {

        const data = {
            author: "urn:li:person:<your Linkedin personID>",
            lifecycleState: "PUBLISHED",
            specificContent: {
                "com.linkedin.ugc.ShareContent": {
                    "shareCommentary": {
                        "text": "Hello World! This is my first Share on LinkedIn!"
                    },
                    "shareMediaCategory": "NONE"
                }
            },
            visibility: {
                "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
            }
        }

        fetch('https://api.linkedin.com/v2/ugcPosts', {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_LINKEDIN_ACCESS_TOKEN_DRJ_2}`,
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            console.log('Terminou')
        })
    }

    return (
        <button onClick={() => handleShareOnLinkedin()}>Compartilhar</button>
    )
};

export default PostShare;