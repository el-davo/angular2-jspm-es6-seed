'use strict';

module.exports = (gulp, $) => {

    gulp.task(ui);

    function ui(cb) {

        $.util.log($.util.colors.green('Checking webdriver, This may take a while'));
        $.syncExec('node ./node_modules/protractor/bin/webdriver-manager update');

        let bs = $.browserSync({
            server: {
                baseDir: './',
                index: 'index.html'
            },
            port: 10005,
            open: false
        });

        $.protractorFlake({
            maxAttempts: 2,
            nodeBin: 'node',
            protractorPath: './node_modules/protractor',
            protractorArgs: ['./protractor.conf.js']
        }, function (status) {
            bs.exit();
            cb();
            process.exit(status);
        });
    }
};