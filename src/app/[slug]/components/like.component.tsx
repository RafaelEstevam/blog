"use client"

import { IncreaseLikeByPost } from "@/app/queries/posts";
import { RiThumbUpFill } from "@remixicon/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { PostContext } from "../context";
import {LoadingIcon} from "@/app/components/loading.component";

const PostLike = () => {

    const {id, likes}: any = useContext(PostContext);
    const [count, setCount] = useState<number>(likes);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSetStates = (updatePost:any) => {
        setCount(updatePost.likes);
        setDisabled(true);
        setLoading(false);
    }

    const handleIncrease = useCallback(async () => {
        setLoading(true);
        const variables = {id: id, likes: likes + 1}
        const {updatePost} = await IncreaseLikeByPost(variables);
        handleSetStates(updatePost);
    }, [count]);

    return (
        <div className="w-full flex gap-8 items-center mt-8">
            {loading ? (
                <LoadingIcon />
            ) : (
                <>
                    <button id="like" disabled={disabled} onClick={() => handleIncrease()} className={`border-2 border-blue-700 px-10 py-5 rounded-xl ${disabled && 'opacity-50'}`}>
                        <RiThumbUpFill />
                    </button>
                    <p>
                        {count}
                    </p>
                </>
            )}
        </div>
        
    )
};

export default PostLike;