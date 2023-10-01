/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '',
            },
        ],
    },
    env: {
        BASE_NEXT_URL:
            process.env.NODE_ENV === 'production'
                ? 'https://js-superior.vercel.app'
                : 'http://localhost:3000',

        NEXTAUTH_URL:
            process.env.NODE_ENV === 'production'
                ? 'https://js-superior.vercel.app'
                : 'http://localhost:3000',
    },
};

module.exports = nextConfig;
