module.exports = {
    stories: [
        '../src/**/*.stories.tsx'
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register'
    ],
    webpackFinal: async config => {

        config.module.rules.push({
            test: /\.(tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader')
                }
            ]
        })

        config.resolve.extensions.push('.tsx')
        return config;
    }
}