module.exports = {
    testEnvironment: "jsdom",
    "transform": {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
};