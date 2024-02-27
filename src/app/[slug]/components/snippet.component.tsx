"use client";

import hljs from 'highlight.js';
import { useEffect } from "react";

const PostSnippet = ({children}:any) => {
    
    useEffect(() => {
        hljs.highlightAll();
    })

    return (
        <>{children}</>
    )
};

export default PostSnippet;