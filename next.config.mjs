/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
    },
    experimental: {
        optimizePackageImports: ['lucide-react', '@react-three/fiber', '@react-three/drei'],
    },
};

export default nextConfig;
