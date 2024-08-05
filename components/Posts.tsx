"use client";

import Link from "next/link";
import PostSearch from "./PostSearch";
import { usePosts } from "@/store/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

export type Post = {
	iserId: number;
	id: number;
	title: string;
	body: string;
};

function Posts() {
	const [posts, getAllPosts] = usePosts(
		(state) => [state.posts, state.getAllPosts],
		shallow
	);

	useEffect(() => {
		getAllPosts();
	}, [getAllPosts]);

	return (
		<>
			<PostSearch />
			<ul className="my-7">
				{posts.map((post: Post) => {
					return (
						<li key={post.id} className="py-1">
							<Link
								href={`/blog/${post.id}`}
								className="font-extralight hover:underline"
							>
								{post.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Posts;
