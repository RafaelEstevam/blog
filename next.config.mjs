/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV || 'development';

const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            pathname: '/**',
        },
        ],
    },
}

// const nextConfig = {
//     development: {
//         api: '',
//         NEXT_PUBLIC_GA: ''
//     },
//     staging: {
//         api: '',
//         NEXT_PUBLIC_GA: 'G-N24CHGYB0M'
//     },
//     production: {
//         api: '',
//         NEXT_PUBLIC_GA: 'G-N24CHGYB0M'
//     },
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'media.graphassets.com',
//             port: '',
//             pathname: '/**',
//           },
//         ],
//     }
// }[env];

export default nextConfig;
