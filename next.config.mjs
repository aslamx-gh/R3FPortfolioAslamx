// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.exr$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/x-exr',
                },
                experimental: {
                    reactRefresh: false,
                },
            },
        });
        return config;
    },
};

export default nextConfig;
