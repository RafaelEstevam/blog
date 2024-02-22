// next.config.js
import NextFederationPlugin from '@module-federation/nextjs-mf';

export function webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Add module federation plugin
    config.plugins.push(
        new NextFederationPlugin({
            name: 'app',
            library: { type: 'var', name: 'app' },
            filename: 'remoteEntry.js',
            remotes: {
                sidebar: `sidebar@http://localhost:3003/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
            },
            exposes: {
                // Expose components if needed
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
                // Add other shared dependencies as needed
            },
        })
    );

    // Return the modified webpack configuration
    return config;
}
