"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { usePosts } from "@/store/store";

const formSchema = z.object({
	search: z.string(),
});

function PostSearch() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			search: "",
		},
	});

	const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

	async function onSubmit({ search }: z.infer<typeof formSchema>) {
		await getPostsBySearch(search);
	}

	return (
		<div className="flex justify-center items-center py-2 gap-3">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-1/3 flex gap-3 py-4"
				>
					<FormField
						control={form.control}
						name="search"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="lorem ipsum..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" size={"sm"} className="inline-block space-y-0">
						search
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default PostSearch;
