exports.config = {
    specs: [],
    host: 'localhost',
    port: 4444,
    path: '/', // Dùng chromedriver
    capabilities: [{
        browserName: 'chrome',
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    logLevel: 'info', // Khi chạy sẽ in ra console.log
}