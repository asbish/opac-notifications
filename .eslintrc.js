module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "spread": true,
    "templateStrings": true,
    "jsx": true
  },
  "rules": {
    "comma-dangle": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 1,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": [1, {"requireReturn": false,
                        "requireParamDescription": false,
                        "requireReturnDescription": false}],
    "valid-typeof": 2,
    "no-unexpected-multiline": 2,

    // Best Practices
    "accessor-pairs": 0,
    "block-scoped-var": 1,
    "complexity": 2,
    "consistent-return": 0,
    "curly": 2,
    "default-case": 0,
    "dot-location": [1, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-case-declarations": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 0,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 1,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": [1, {"exceptions": {"Property": true,
                                           "VariableDeclarator": true}}],
    "no-multi-str": 1,
    "no-native-reassign": 2,
    "no-new-func": 0,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    "radix": 1,
    "vars-on-top": 0,
    "wrap-iife": 2,
    "yoda": 2,

    // Strict Mode
    "strict": 0,

    // Variables
    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 1,
    "no-restricted-globals": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 1,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 0,

    // Node.js
    "callback-return": 2,
    "global-require": 0,
    "handle-callback-err": 2,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 2,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 1,
    "no-sync": 0,

    // Stylistic Issues
    "array-bracket-spacing": [1, "never"],
    "block-spacing": 1,
    "brace-style": 0,
    "camelcase": 0,
    "comma-dangle": 2,
    "comma-spacing": 1,
    "comma-style": 1,
    "computed-property-spacing": 2,
    "consistent-this": 2,
    "eol-last": 2,
    "func-names": 0,
    "func-style": 0,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2],
    "key-spacing": 0,
    "keyword-spacing": 1,
    "linebreak-style": 2,
    "lines-around-comment": 0,
    "max-depth": [1, {max: 4}],
    "max-len": [2, {code: 78}],
    "max-nested-callbacks": [1, {max: 5}],
    "max-params": [1, {max: 5}],
    "max-statements-per-line": 0,
    "max-statements": 0,
    "multiline-ternary": 0,
    "new-cap": 0,
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "no-array-constructor": 2,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {max: 2}],
    "no-negated-condition": 0,
    "no-nested-ternary": 1,
    "no-new-object": 2,
    "no-plusplus": [1, {"allowForLoopAfterthoughts": true}],
    "no-spaced-func": 1,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 1,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "never"],
    "one-var-declaration-per-line": 0,
    "one-var": 0,
    "operator-assignment": 0,
    "operator-linebreak": [1, "before"],
    "padded-blocks": 0,
    "quote-props": [1, "as-needed", {"keywords": true}],
    "quotes": [1, "single", {"avoidEscape": true,
                             "allowTemplateLiterals": true}],
    "semi-spacing": 1,
    "semi": 2,
    "sort-vars": 0,
    "space-before-blocks": 1,
    "space-before-function-paren": 1,
    "space-in-parens": 1,
    "space-infix-ops": 0,
    "space-unary-ops": 0,
    "spaced-comment": 1,
    "unicode-bom": 2,
    "wrap-regex": 1,
  }
};
