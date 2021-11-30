# Insert  Bulma CSS

## Bulma
[ Bulma Documation ] (https://bulma.io/documentation/) 

### How to start Bulma 
(https://bulma.io/documentation/overview/start/)

- Install the NPM package
    - `npm init`
    - `npm install bulma` (https://bulma.io/documentation/customize/with-node-sass/)
    - `Use npm/yarn and node-sass`

- Create a CSS file in file Src
    - create the app.scss
    - ` @charset "utf-8 ` in app.scss
    - ` @import "../node_modules/bulma/bulma.sass` in app.scss 

- put the import in index.js
    - `import './css/app.scss'`
    - `import './css/style.scss'`

- Add your own Bulma styles
    - (https://bulma.io/documentation/customize/with-node-sass/)
    -  Bulma uses Sass variables to allow easy customization (https://bulma.io/documentation/customize/variables/)

## SASS guide
- (https://sass-lang.com/guide)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
