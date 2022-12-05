module.exports = {
    testEnvironment: "jsdom",
    "transform": {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(less|css)$": "jest-less-loader"
    },
};