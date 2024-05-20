import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com','rukminim2.flixcart.com','imgs.search.brave.com'],
    },
};

export default nextConfig;
