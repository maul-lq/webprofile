/** @type {import('next').NextConfig} */
const nextConfig = {
    // enable the static HTML exporter (next build will produce out/)
    output: 'export',
    basePath: '/webprofilebaim',
    images: { unoptimized: true } // ensure static-friendly images
};

export default nextConfig;
