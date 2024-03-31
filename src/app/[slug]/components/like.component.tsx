"use client"

import { IncreaseLikeByPost, getLikesByPost } from "@/app/queries/posts";
import { RiThumbUpFill } from "@remixicon/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { PostContext } from "../context";
import {LoadingIcon} from "@/app/components/loading.component";

interface PostLikeProps {
    id?: string,
    // disabledButton: boolean,
    offline?: boolean
}

const PostLike = ({id, offline}:PostLikeProps) => {

    const [likes, setLikes] = useState<number>(0);
    const [count, setCount] = useState<number>(likes);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    const handleSetStates = (updatePost:any) => {
        setCount(updatePost.likes);
        setLikes(updatePost.likes);
        setLoading(false);
    }

    const handleIncrease = useCallback(async () => {
        setLoading(true);
        const variables = {id: id, likes: likes + 1}
        const {updatePost} = await IncreaseLikeByPost(variables);
        handleSetStates(updatePost);
        setDisabled(true);
    }, [count]);

    const handleGetLikes = async () => {
        setLoading(true);
        const variables = {id}
        const post:any = id && await getLikesByPost(variables);
        handleSetStates(post);
    }

    useEffect(() => {
        handleGetLikes();
    }, [])

    return !offline ? (
        <div className="flex gap-8 items-center mt-8">
            {loading && (<LoadingIcon />)}

            <button id="like" disabled={disabled} onClick={() => handleIncrease()} className={`text-white border-2 border-blue-700 px-10 py-5 rounded-xl ${disabled && 'opacity-30'}`}>
                <RiThumbUpFill />
            </button>

            <p className="text-white">{count}</p>
            
        </div>
    ) : (
        <div className='flex items-center gap-4 text-white'>
            {loading ? (<LoadingIcon />) : (<RiThumbUpFill />)}
            {likes}
        </div>
    );

};

export default PostLike;