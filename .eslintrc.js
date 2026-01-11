module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'scripts/*',
    '.idea/*',
    '.DS_Store',
    'node_modules/*',
    'logs/*',
    '.vscode/*',
    '.husky/*',
    '.next/*',
    'package.json',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'build-dev/*',
    'build-stage/*',
    'build/*',
    '.gitignore',
    'README.md',
    'next.config.ts',
    '.env*',
    'src/apis/main/*', // Generated API code
    'public/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'prettier', // Make sure this is last
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/no-named-as-default-member': 'off',
    // 'import/no-unresolved': ['error', { ignore: ['\\.css$'] }], // TypeScript handles this
  },
}
