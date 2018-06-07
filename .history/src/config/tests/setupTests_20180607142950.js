{
    "presets": [
        [
            "env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "react",
        "es2015"
    ],
        "plugins": [
            "transform-async-to-generator",
            "transform-object-rest-spread",
            [
                "transform-class-properties",
                {
                    "loose": true
                }
            ]
        ]
}
