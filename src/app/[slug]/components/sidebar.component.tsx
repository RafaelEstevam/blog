"use client"

import {LoadingIcon} from "@/app/components/loading.component";
import { getNodeIndex } from "@/app/services";
import { useEffect, useState } from "react";
import PostLike from "./like.component";

const PostSidebar = ({likes, id}:any) => {

    const [ancorsPost, setAncorsPost] = useState<any[]>([]);
    const [ancorsPostList, setAncorsPostList] = useState<any[]>([]);
    const [margin, setMargin] = useState(0);

    const handleAddAnchors = () => {
        const content = document.getElementsByClassName('content')[0];

        const headers = Array.from([document.getElementById("title")])
        .concat(Array.from(content.querySelectorAll('h2')))
        .concat(Array.from(content.querySelectorAll('h3')))
        .concat(Array.from(content.querySelectorAll('h4')))
        .concat(Array.from(content.querySelectorAll('h5')))
        .concat(Array.from(content.querySelectorAll('h6')));
        
        let ancors = Array.from(headers);

        ancors.sort(function(a, b) {
            return getNodeIndex(a) - getNodeIndex(b);
        });

        ancors.map((item, index) => {
            if(index > 0){
                item?.setAttribute('id', index.toString());
            }
            return item;
        });
        setAncorsPost(ancors);
    };

    const handleScroll = () => {
        const content:any = document.getElementsByClassName('content')[0];
        window.addEventListener('scroll', () => {

            if(window.scrollY - 600 < 0) {
                setMargin(0);
            }

            if(window.scrollY >= 600){
                setMargin(window.scrollY - 600);
            }

            if(window.scrollY - 600 > content.offsetHeight - 600){
                setMargin(content.offsetHeight - 600);
            } 

        })
    }

    useEffect(() => {
        let ancors:any[] = [];
        ancorsPost.map((item:any) => {
            ancors.push({id: item.id, text: item.innerText})
        });
        setAncorsPostList(ancors);
    }, [ancorsPost])

    useEffect(() => {
        handleAddAnchors();
        handleScroll();
    }, []);

    return ancorsPostList.length > 0 ? (
        <div className={`xl:relative`} style={{top: margin}}>
            <div className={`bg-slate-700 rounded-2xl overflow-hidden`}>
                <ul>
                    {ancorsPostList.length > 0 && ancorsPostList.map((item) => (
                        <li key={item.id}>
                            <a className="block p-4 hover:bg-[#00000030]" href={`#${item.id}`}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <PostLike {...{likes, id}} />
        </div>
    ) : (
        <div className="w-full flex justify-center">
            <LoadingIcon />
        </div>
    )
};

export default PostSidebar;