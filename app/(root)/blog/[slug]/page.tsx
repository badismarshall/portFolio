'use server'
import { getPostBySlug } from '@/utils/blogs'
import { notFound } from 'next/navigation'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const getPageContent = async (slug: any) => {
    const content  = await getPostBySlug(slug)
    return content
}

const page = async ({params} :any) => {
    const content  = await getPageContent(params.slug)
    
    if (!content) {
        return notFound()
    }
return (
    <div>
            <article className='prose text-start'>
                    <MDXRemote 
                        options={{
                                parseFrontmatter: true,
                                mdxOptions: {
                                    rehypePlugins:
                                        [rehypePrism, rehypeCodeTitles]
                                },
                        }} 
                        source={content}
                    />
            </article>
    </div>
)
}

export default page