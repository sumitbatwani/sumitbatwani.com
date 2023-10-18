# sumitbatwani.com

<!-- Next js -->
yarn add next@latest react@latest react-dom@latest

package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

<!-- Tailwind css -->
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init -p

inside tailwind.config.js add to module.export.content
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

add to global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
