# 🔗 Link Shortener

A sleek, modern, and fully client-side link shortener built with React 19, TypeScript, Tailwind CSS, and Vite. Easily shorten URLs, view your history, sort and search links, and enjoy smooth animations powered by Framer Motion. All data is securely stored in your browser using localStorage—no backend needed!

## ✨ Features

- 🔗 Shorten Links: Create short URLs with a 6-character code.

- 🗃 History: View all previously shortened links with original URLs.

- 🔍 Search & Sort: Filter links by code or original URL, and sort by date or code.

- 📋 Copy to Clipboard: Copy short links in a click with visual feedback.

- 🧹 Delete & Clear: Delete individual links or clear the entire history.

- 📄 Pagination: Paginate your history with customizable items per page (5, 10, 15, 20, 25).

- 🌙 Responsive Design: Fully responsive and mobile-friendly UI.

- 🎬 Smooth Transitions: Page and element transitions using Framer Motion.

## 🚀 Tech Stack

- ⚛️ React 19

- 🛠️ TypeScript

- 💨 Tailwind CSS 3

- ✨ Framer Motion

- ⚡ Vite

- 🧭 React Router v7

## Clone the repo

```bash
git clone https://github.com/Milan-960/LinkSnap.git

cd LinkSnap
```

## 📦 Install dependencies

```bash
npm install
```

## 🔧 Start development server

```bash
npm run dev
```

## 🏗 Build for production

````bash
npm run build
```

# Preview production build

```bash
npm run preview
````

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
