module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/styles/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
};
