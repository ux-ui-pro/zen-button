import webpack from 'webpack-stream'

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemap: app.projectDev })
        .pipe(webpack({
            mode: app.projectDev ? 'production' : 'development',
            output: {
                filename: 'zen-button.min.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}
