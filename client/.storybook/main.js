// module.exports = {
//   "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-actions",
//     "@chromatic-com/storybook"
//   ],

//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {}
//   },

//   docs: {autodocs: 'tag'},

//   typescript: {
//     reactDocgen: "react-docgen-typescript"
//   }
// }

const config = {
  // Required
  // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-styling-webpack'
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};


export default config;