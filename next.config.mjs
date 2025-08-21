/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webprofile',
    images: { unoptimized: true } // ensure static-friendly images
};

export default nextConfig;
