/** @type {import('next').NextConfig} */

module.exports = {
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
    csp: {
        reportOnly: process.env.NODE_ENV === 'development',
        policies: {
            'default-src': "'self' https://jsuperior.vercel.app",
            // Inne polityki CSP
        },
    },
};
