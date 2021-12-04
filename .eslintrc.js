module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react","prettier"
    ],
    "rules": {
        "prettier/prettier" : [
            "warn", {"endOfLine" : "auto"},
        ],
        "no-unused-vars": "warn",
    }
};
