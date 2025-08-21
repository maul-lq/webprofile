/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webprofilebaim',
    images: { unoptimized: true } // ensure static-friendly images
};

export default nextConfig;
