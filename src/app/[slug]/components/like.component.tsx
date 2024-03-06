"use client"

import { RiThumbUpFill } from "@remixicon/react";
import { useCallback, useState } from "react";

const PostLike = () => {

    const [count, setCount] = useState<number>(0);
    const [disabled, setDisabled] = useState(false);

    // return ancorsPostList.length > 0 ? (
    //     <div className={`xl:relative`} style={{top: margin}}>
    //         <div className={`bg-slate-700 rounded-2xl overflow-hidden`}>
    //             <ul>
    //                 {ancorsPostList.length > 0 && ancorsPostList.map((item) => (
    //                     <li key={item.id}>
    //                         <a className="block p-4 hover:bg-[#00000030]" href={`#${item.id}`}>{item.text}</a>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    // ) : (
    //     <div className="w-full flex justify-center">
    //         <LoadingIcon />
    //     </div>
    // );

    const handleIncrease = useCallback(() => {
        setCount(count + 1);
        setDisabled(true)

    }, [count])

    return (
        <div className="w-full flex gap-8 items-center mt-8">
            <button id="like" disabled={disabled} onClick={() => handleIncrease()} className={`border-2 border-blue-700 px-10 py-5 rounded-xl ${disabled && 'opacity-50'}`}>
                <RiThumbUpFill />
            </button>
            <p>
                {count}
            </p>
        </div>
        
    )
};

export default PostLike;