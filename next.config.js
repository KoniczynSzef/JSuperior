/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};
