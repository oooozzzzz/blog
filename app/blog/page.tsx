import Posts from '@/components/Posts'
import PostSearch from '@/components/PostSearch'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Blog',
}

function Blog() {


	return (
		<div className='flex flex-col'>
			<p className='text-3xl mx-auto'>Blog page</p>
			<Posts />
		</div>
	)
}

export default Blog