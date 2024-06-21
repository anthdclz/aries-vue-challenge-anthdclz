# 🌴 Options Strategy - Risk & Reward Analysis

-   Anthony dela Calzada
-   Email: `anthony.delacalzada@gmail.com`
-   GitHub: `anthdclz`

## Notes ✏️

-   This options strategy page shows the line chart for each of the options input.
-   Initial input data comes from the mock `sampleData`.
-   Green line charts signify a bullish to neutral bias.
-   Red line charts signify a bearish to neutral bias.
-   Max Loss is calculated for going long. Profit is essentially unlimited.
-   Max Profit is calculated for going short. Loss is essentially unlimited.
-   Break even price is calculated for the underlying stock.
-   Click "Edit this option" to modify the line chart.

## Setup

1. Install the web app with:

```bash
npm install
```

2. Start the web app with:

```bash
npm run dev
```

3. The page should launch automatically. If the page doesn't launch, find the **Local** path in the terminal and launch it manually in your web browser. Ie: Local: `http://localhost:5173/`

## Testing with Vitest 🐳

-   Run tests with:

```bash
npm run test
```

## Follow Improvements 🛵

-   Clean up architecture for developer team ease.
-   Add more intuitive error messages on user input for usability.
-   Add a "success" snackbar after the user successfully updates the chart for usability.
-   Possibly add the fill colors for profit/loss. I left this out for visual simplicity.
-   Feature: Provide the Stock's option chain as user selectable data instead of requiring them to manually type they input.
-   Complexity: Overlay the charts on top of each other. May need a different plugin because the current line chart.js requires each line to have the same x-axis points.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
}
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Vue Challenge - Aries

## Objective

Design and implement a front-end for options strategy risk and reward analysis using Vue.

## Brief

Your challenge is to create a Vue component that can generate a risk & reward graph for options strategies. The component should accept an input of up to four options contracts and output the following:

1. A risk & reward graph where X is the price of the underlying at the time of expiry and Y is the profit/loss at that price.
2. Max profit, max loss, and all break even points.

### Evaluation Criteria

-   Completeness of the logic
-   Usability of the graph
-   Aesthetics of the UI
-   Readability and code structure

### CodeSubmit

Please organize, design, test, and document your code as if it were
going into production - then push your changes to the main branch.

Reply to the invitation e-mail with your github username to notify of completion.

Have fun coding! 🚀
The Aries Financial Team
