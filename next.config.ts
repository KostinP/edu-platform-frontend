// В next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['localhost'],
        unoptimized: process.env.NODE_ENV === 'development',
    },
    // Добавить для обработки расширений
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ]
    },
}

export default nextConfig;