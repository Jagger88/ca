References: 
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
[React documentation](https://reactjs.org/).

`npm start`
`npm test` - Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
`npm run build`
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

Storybook
npx storybook@latest init - install
npm run storybook - run 
npx storybook@latest upgrade



*** fixing legacy peer dependencies 
npm config set legacy-peer-deps true
npm i 

had to upgrade react scripts; 
npm install --save --save-exact react-scripts@5.0.0
https://github.com/facebook/create-react-app/blob/main/CHANGELOG.md

This has alot of issues... 