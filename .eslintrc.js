module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Recommended rules from react plugin
    'plugin:@typescript-eslint/recommended', // Recommended rules from @typescript-eslint
    'next/core-web-vitals', // Recommended rules for Next.js projects
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // Example of custom rules (you can tweak as needed)
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
