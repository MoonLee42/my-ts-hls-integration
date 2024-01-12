const path = require('path');

module.exports = {
    mode: 'production',
    entry: './build',
    target: 'web',
    output: {
        filename: 'hls.min.js',
        path: path.resolve(__dirname, 'build'),
        library: 'Hls',
        libraryTarget: 'assign',
        libraryExport: 'default',
        globalObject: 'this'
    },
};
