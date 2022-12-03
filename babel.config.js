module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "transform-inline-environment-variables",
            [
                "module-resolver",
                {
                    alias: {
                        "@components": "./src/components",
                        "@screens": "./src/screens",
                        "@lib": "./src/lib",
                        "@assets": "./assets",
                        "@customTypes": "./src/types",
                        "@providers": "./src/providers",
                    },
                },
            ],
        ],
    };
};
