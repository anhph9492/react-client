# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

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

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


aladdin-SaaS-fe-admin-portal
npm install C:\\aladin\\source\\aladdin-SaaS-fe-common\\aladdin-sass-fe-common-0.0.7.tgz


Error Boundaries



Sample Testing in React using Jest and React Testing Library:
// MyComponent.js
import React from 'react';

function MyComponent(props) {
  const { value } = props;
  return <div>{value}</div>;
}

export default MyComponent;
// MyComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders value prop correctly', () => {
  const { getByText } = render(<MyComponent value="Test Value" />);
  const valueElement = getByText('Test Value');
  expect(valueElement).toBeInTheDocument();
});




<Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
