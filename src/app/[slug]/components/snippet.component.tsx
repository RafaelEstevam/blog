"use client";

import hljs from 'highlight.js';
import { useEffect } from "react";

import { PostContext } from '../context';

const PostSnippet = ({content, likes, id, children }:any) => {
    
    useEffect(() => {
        hljs.highlightAll();
    })

    return (
        <PostContext.Provider value={{content, likes, id}}>{children}</PostContext.Provider>
    )
};

export default PostSnippet;