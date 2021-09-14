var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sass = require("gulp-sass")(require("sass"));

//taski podstawowe

// kompilacja scss do css

gulp.task('css', function(){

    return gulp.src('src/scss/main.scss')
    .pipe( sass() )
    .pipe( gulp.dest('src/css') )
    .pipe( browserSync.stream() );

});

// nasłuchowanie na scss i html w katalogu src

gulp.task('watch', function(){

    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('src/**/*.html').on('change', browserSync.reload);

});

// server statyczny

gulp.task('server', function(){

    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

});


gulp.task('default', gulp.parallel('css', 'server', 'watch'));