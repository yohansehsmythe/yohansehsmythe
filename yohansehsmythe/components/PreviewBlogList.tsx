"use client";

import { usePreview } from "../lib/sanity.preview";
import Bloglist from "./Bloglist"

type Props = {
    query: string;
}

export default function PreviewBlogList({ query }: Props) {
    const posts = usePreview(null, query)
    console.log("LOADING posts...", posts);
    return <Bloglist posts={posts} />
}