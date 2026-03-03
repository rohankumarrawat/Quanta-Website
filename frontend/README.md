# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Internationalization (i18n)

This project uses `react-i18next`/`i18next` to manage translation strings.

- Initialization is performed in `src/i18n.js` and imported in `src/main.jsx`.
- Language files live under `src/locales/{lang}/translation.json` (English and French are included).
- The current language is stored in `localStorage` and recalled on startup.
- Components can access translated strings via the `useTranslation` hook:

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('some_key')}</h1>;
}
```

A language selector dropdown has been added to `Header.jsx` so users can switch between languages at runtime. To add more languages, just add another locale folder, update `i18n.js`, and provide the necessary keys.
