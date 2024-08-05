# React Portfolio using Tailwind CSS and Dark Mode Switching
This is a simple portfolio page created in React using Vite styled with TailwindCSS. It has a feature to switch between light and dark modes

## Reference
See [this tutorial](https://www.youtube.com/watch?v=QTY2fLpQn44&list=PLRv_Gd5w9e7k4U8YTQYbX0Scvn8EZBlts&index=5)

## Vite
* Vite is a tool to create a react app (like react-app). It uses `.jsx` files for components.
* To create a project, use this command in the terminal, then answer the needed questions (in this app, it React with JavaScript)
```
npm create vite@latest
```

## TailwindCSS
* TailwindCSS is a utility-first CSS framework packed with classes (like flex, pt-4, text-center and rotate-90) that can be composed to build any design, directly in your markup.
* Its slogan is: Rapidly build modern websites without ever leaving your HTML
* Some of its features:
1. Excellent performance: Tailwind automatically removes all unused CSS when building for production
2. Cutting-edge effects: Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible
* To install it, install Tailwind CSS Intellisense extension in VS code and then follow the steps [here](https://tailwindcss.com/docs/installation/using-postcss):
```
npm install -D tailwindcss postcss autoprefixer
npx tailwind init -p // initialize using postcss
```

## Animations
Some simple transition animation on hover:
```
hover:translate-y-2 transition transform
```

## Layout
Some respnonsive grid layout:
```
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
```

## Dark Theme
1. In `tailwind.config.js` add the following line which indicates that dark theme will be set as a CSS class:
```
darkMode: 'class',
```
2. In React (here `App.jsx`), create a React state that stores and updates the theme information based on a button click. To add the `dark` class:
```
document.documentElement.classList.add("dark");
```
3. In React components styles (`className`), add colors for light and dark themes, for example:
```
<p className="text-gray-600 dark:text-gray-300">
```