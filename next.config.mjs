/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV || 'development';

const nextConfig = {
    development: {
        api: '',
        NEXT_PUBLIC_GA: ''
    },
    staging: {
        api: '',
        NEXT_PUBLIC_GA: 'G-N24CHGYB0M'
    },
    production: {
        api: '',
        NEXT_PUBLIC_GA: 'G-N24CHGYB0M'
    }
}[env];

export default nextConfig;
