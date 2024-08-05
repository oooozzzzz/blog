import axios from "axios";

export const getPosts = async () => {
	const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return posts.data;
};

export const getPostsBySearch = async (search: string) => {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
	return res.data
}