{
    "parser": "babel-eslint",
        "extends": "airbnb",
            "plugins": [
                "jest"
            ],
                "env": {
        "browser": true,
            "jest/globals": true
    },
    "rules": {
        "linebreak-style": 0,
            "comma-dangle": [
                2,
                "always-multiline"
            ],
                "max-len": [
                    2,
                    120,
                    {
                        "ignoreStrings": true
                    }
                ],
                    "indent": [
                        2,
                        4,
                        {
                            "SwitchCase": 1,
                            "VariableDeclarator": 1,
                            "outerIIFEBody": 1
                        }
                    ],
                        "no-restricted-syntax": [
                            2,
                            "DebuggerStatement",
                            "LabeledStatement",
                            "WithStatement"
                        ],
                            "no-plusplus": [
                                0
                            ],
                                "func-names": [
                                    0
                                ],
                                    "no-duplicate-imports": [
                                        0
                                    ],
                                        "react/jsx-indent": [
                                            2,
                                            4
                                        ],
                                            "react/jsx-filename-extension": [
                                                2,
                                                {
                                                    "extensions": [
                                                        ".jsx",
                                                        ".js"
                                                    ]
                                                }
                                            ],
                                                "react/jsx-indent-props": [
                                                    2,
                                                    4
                                                ],
                                                    "react/prefer-stateless-function": 0,
                                                        "react/jsx-no-bind": 1,
                                                            "class-methods-use-this": "off",
                                                                "no-unused-expressions": [
                                                                    "error",
                                                                    {
                                                                        "allowShortCircuit": true,
                                                                        "allowTernary": true
                                                                    }
                                                                ],
                                                                    "jsx-a11y/label-has-for": 0,
                                                                        "react/no-did-mount-set-state": 0,
                                                                            "import/no-duplicates": 1,
                                                                                "no-console": 0,
                                                                                    "jsx-a11y/href-no-hash": "off",
                                                                                        "jsx-a11y/anchor-is-valid": [
                                                                                            "warn",
                                                                                            {
                                                                                                "aspects": [
                                                                                                    "invalidHref"
                                                                                                ]
                                                                                            }
                                                                                        ],
                                                                                            "jsx-a11y/no-static-element-interactions": [
                                                                                                "error",
                                                                                                {
                                                                                                    "handlers": [
                                                                                                        "onClick",
                                                                                                        "onMouseDown",
                                                                                                        "onMouseUp",
                                                                                                        "onKeyPress",
                                                                                                        "onKeyDown",
                                                                                                        "onKeyUp"
                                                                                                    ]
                                                                                                }
                                                                                            ],
                                                                                                "no-underscore-dangle": [
                                                                                                    "error",
                                                                                                    {
                                                                                                        "allow": [
                                                                                                            "__id",
                                                                                                            "__flipbookItemHash",
                                                                                                            "__pageId"
                                                                                                        ]
                                                                                                    }
                                                                                                ],
                                                                                                    "jest/no-disabled-tests": "warn",
                                                                                                        "jest/no-focused-tests": "error",
                                                                                                            "jest/no-identical-title": "error",
                                                                                                                "jest/prefer-to-have-length": "warn",
                                                                                                                    "jest/valid-expect": "error"
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./webpack.common.js"
            }
        }
    }
}
