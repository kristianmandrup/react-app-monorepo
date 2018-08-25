module.exports = {
  "extends": [
    "tslint:latest",
    "tslint-react",
    "tslint-config-prettier"
  ],
  "rules": {
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "ban": [
      true, [
        "Object",
        "assign",
        "use TS2.1 object spread { ...a, ...b }"
      ],
      [
        "describe",
        "only"
      ],
      [
        "it",
        "only"
      ]
    ],
    "linebreak-style": [
      true,
      "LF"
    ],
    "no-invalid-this": [
      true,
      "check-function-in-method"
    ],
    "variable-name": [
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case"
    ],
    "trailing-comma": [
      false
    ],
    "no-console": false,
    "no-shadowed-variable": false,
    "max-line-length": [
      100
    ],
    "max-classes-per-file": [
      true,
      5
    ],
    "object-literal-sort-keys": false,
    "jsx-no-multiline-js": false,
    "ordered-imports": [
      false
    ],
    "semicolon": [
      true,
      "never"
    ],
    "quotemark": [
      true,
      "single"
    ]
  },
  "jsRules": {
    "object-literal-shorthand": true,
    "trailing-comma": [
      false
    ]
  }
}
