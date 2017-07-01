module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "linebreak-style": [
            "error", "windows"
        ],
        "semi": [
            "error", "always"
        ],
        "no-console":0,
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    },
    "parserOptions": {
        "sourceType": "module"
    }
};