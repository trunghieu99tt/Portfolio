/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    sassOptions: {
        includePaths: ['./src/sass'],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },
    images: {
        domains: [],
    },
};

module.exports = nextConfig;

