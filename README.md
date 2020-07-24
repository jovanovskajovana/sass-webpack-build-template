# Sass plus Webpack build template

Here is a quick start guide for [Webpack](https://webpack.js.org/) to a simpler setup and clean module architecture.

<img src='./src/images/logo-sass-webpack.png' width='370'>
<br/>

## 🚀 Setup

In order to write transparent and readable code it’s essential to divide JavaScript and CSS code into small and concise parts. But, browsers prefer as few files as possible. We don’t want to have multiple js files loaded in the app, because every time we go to the website it makes many requests which is not good for the performance.

So, we can use Webpack to bundle all of our CSS and JavaScript files into a single production ready file.

#### Install Webpack

```
npm install webpack webpack-cli --save-dev
```

> Make sure you have a stable version of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) set on your machine, navigate to your project's directory and install Webpack and [Webpack CLI](https://github.com/webpack/webpack-cli).

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
> Continue development in the hot-reloading development environment available at http://localhost:8000.

```
npm run build
```
> Create an optimized production build.
