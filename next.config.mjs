import nextMDX from '@next/mdx';
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

export const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [rehypePrism, rehypeCodeTitles],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/**/*',
        }
        ]
    },
    reactStrictMode: true,
    experimental: {
        mdxRs: true,
    },
};

export default  withMDX(nextConfig);
