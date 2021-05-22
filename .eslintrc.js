module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        'plugin:react/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "parser": "@babel/eslint-parser",
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "indent": ["error", 2, {"SwitchCase": 1}],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],
        "semi": ["error", "always"],
        "valid-jsdoc": ["error", {
            "preferType": {
                "object": "Object",
                "bool": "Boolean"
            },
            "requireReturn": false
        }]
    }
}
