'use strict';

let gulp = require('gulp'),
    packageJson = require('./package.json'),
    plugins = require('gulp-load-plugins')({
        pattern: [
            'gulp-*',
            'gulp.*',
            'gulp-tslint',
            'browser-sync',
            'protractor-flake',
            'del'
        ],
        lazy: true
    }),
    ciEnv = process.env.TRAVIS ? true: false;

require('require-directory')(module, './gulp', {
    visit: function (task) {
        task(gulp, plugins, packageJson, ciEnv)
    }
});