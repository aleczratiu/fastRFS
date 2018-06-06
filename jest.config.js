module.exports = {
    coveragePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/',
    ],
    setupFiles: [
        '<rootDir>/src/config/tests/setupTests.js',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    moduleNameMapper: {
        '^Actions(.*)$': '<rootDir>/src/actions$1',
        '^Apollo(.*)$': '<rootDir>/src/apollo$1',
        '^Components(.*)$': '<rootDir>/src/components$1',
        '^Config(.*)$': '<rootDir>/src/config$1',
        '^Constants(.*)$': '<rootDir>/src/constants$1',
        '^Containers(.*)$': '<rootDir>/src/containers$1',
        '^Middleware(.*)$': '<rootDir>/src/middleware$1',
        '^Models(.*)$': '<rootDir>/src/models$1',
        '^Reducers(.*)$': '<rootDir>/src/reducers$1',
        '^Selectors(.*)$': '<rootDir>/src/selectors$1',
        '^Utils(.*)$': '<rootDir>/src/utils$1',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^.+\\.(svg)$': '<rootDir>/src/config/tests/emptyModule.js',
    },
};
