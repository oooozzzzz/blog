import { Post } from "@/components/Posts";
import { getPosts, getPostsBySearch } from "@/services/services";
import { create } from "zustand";

type UsePosts = {
	posts: Post[];
	loading: boolean;
	getAllPosts: () => Promise<void>;
	getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
	posts: [],
	loading: false,
	getAllPosts: async () => {
		set({loading: true})
		const posts = await getPosts();
		set({posts, loading: false})
	},
	getPostsBySearch: async (search) => {
		set({loading: true});
		const posts = await getPostsBySearch(search);
		set({posts, loading: false})
	}
}
));
