module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "semi": "error",
        "arrow-parens": "off",
        "require-jsdoc": "off",
        "comma-dangle": "off",
        "no-invalid-this": "off",
        "object-curly-spacing": "off",
        "operator-linebreak": "off",
        "max-len": "off",
        "no-debugger": "off",
        "no-unused-vars": "off"
    },
};
