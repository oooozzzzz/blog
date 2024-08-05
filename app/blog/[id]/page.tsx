import { Button } from "@/components/ui/button";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	const post = await getPost(id);
	return {
		title: post.title,
	};
}

const getPost = async (id: string) => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return res.data;
};

async function Post({ params: { id } }: Props) {
	const post = await getPost(id);
	return (
		<div>
			<h3 className="text-xl pb-2">{post.title}</h3>
			<p className="font-extralight">{post.body}</p>
			<Button className="mt-4" asChild size={"sm"}>
				<Link href={"/blog"}>Back</Link>
			</Button>
		</div>
	);
}

export default Post;
