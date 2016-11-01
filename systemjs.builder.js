var path = require("path");
var Builder = require('systemjs-builder');
const del = require('del');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('', 'systemjs.config.js');

builder
    .buildStatic('./dist/app/main.js', './dist/app/main.js', { minify: true})
    .then(function() {
        del(['./dist/app/**/*', '!./dist/app/main.js']).then(function (paths) {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });