module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    testTimeout: 60000,
    
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**"
    ],
    coverageDirectory: "coverage",
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100
        }
    }
};
