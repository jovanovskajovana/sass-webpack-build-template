# Sass plus Webpack build template

Here is a quick start guide for [Webpack](https://webpack.js.org/) to simpler setup and clean module architecture.

<img src='./src/images/logo-sass-webpack.png' width='370'>

## 🚀 Setup

To write clear and maintainable code, we want to divide the JavaScript and CSS into small and logical parts. Browsers, on the other hand, prefer not to deal with multiple js files loaded in the app, as it requires many requests every time we visit a website, which is not good for performance.

So, we use Webpack to bundle all of our CSS and JavaScript files into a single production ready file.

#### Install Webpack

```
npm install webpack webpack-cli --save-dev
```

> Make sure you have a stable version of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) set on your machine, then navigate to your project's directory and install Webpack and [Webpack CLI](https://github.com/webpack/webpack-cli).

#### Create webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.min.js'
  },
  module: {
    rules: [
      //...
    ]
  },
  plugins: [
    //...
  ]
};
```

> Choose an entry point to start the application bundling process, specify a custom output in a production ready folder and define the [loaders](https://webpack.js.org/concepts/loaders/) and [plugins](https://webpack.js.org/concepts/plugins/) that will optimize the flow.

#### Install Webpack loaders and plugins

```
npm install babel-loader @babel/core @babel/preset-env --save-dev
```
> Add [babel-loader](https://webpack.js.org/loaders/babel-loader/) and its dependencies to transpile ES6 code to vanilla JS.

```
npm install html-webpack-plugin --save-dev
```
> Set [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to generate HTML5 files that will include all your webpack bundles in the body using script tags.

```
npm install css-loader sass-loader node-sass mini-css-extract-plugin --save-dev
```
> Add [css-loader](https://webpack.js.org/loaders/css-loader/#src/components/Sidebar/Sidebar.jsx), [sass-loader](https://webpack.js.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx), [node-sass](https://github.com/sass/node-sass), [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#src/components/Sidebar/Sidebar.jsx) to load styles and compile Sass code to CSS.

```
npm install copy-webpack-plugin --save-dev
```
> Define files to be copied into /dist folder with [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/#src/components/Sidebar/Sidebar.jsx).


```
npm install url-loader --save-dev
```
> Set [url-loader](https://webpack.js.org/loaders/url-loader/#src/components/Sidebar/Sidebar.jsx) as a helper for .png, .jpg, .svg files.
```
npm install webpack-dev-server --save-dev
```
> And [devServer](https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx) to start a development server.

<br/>

## 🎨 Sass architecture

To keep stylesheets short, efficient and easier to maintain, build the interface as a collection of [components](./src/scss). Split the code in separate folders such as `base/`, `components/`, `layout/`, `pages/`, and a single file at the root level, called `main.scss`, which imports them all to be compiled into a CSS stylesheet.

When working on smaller projects, you can keep all reusable partials into `common/` folder and collect the page related styles into `pages/`.

```
sass/
    |
    |– common/
    |   |– _base.scss           # Global html rules
    |   |– _buttons.scss        # Buttons
    |   |– _footer.scss         # Footer
    |   |– _forms.scss          # Form components
    |   |– _header.scss         # Header
    |   |– _layout.scss         # Basic layouts
    |   |– _links.scss          # Links
    |   |– _margins.scss        # Spacing helpers
    |   |– _modal.scss          # Modals
    |   |– _tooltip.scss        # Tooltip
    |   |– _typography.scss     # Typography rules
    |   |– _variables.scss      # Sass Variables
    |
    |– pages/
    |   |– _contact.scss        # Contact page specific styles
    |   |– _home.scss           # Home page specific styles
    |   |– _news.scss           # News page specific styles
    |
    |
    `– main.scss                # Main Sass file
```
<br/>

## 🎉 Start developing

By default the [webpack.config.js](./webpack.config.js) will use its built-in optimizations for **production**. To expand all files in a developer-friendly view, set the [mode option](https://webpack.js.org/configuration/mode/) to **development**.

```
npm install
```
> After cloning this repository, install all dependencies.

```
npm run dev
```
> Continue development in the live reload environment available at http://localhost:8000.

```
npm run build
```
> Create an optimized production build.
