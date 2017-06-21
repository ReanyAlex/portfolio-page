var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

//watches for when changes are made to watched files below
gulp.task('watch',function() {

  //sets up browserSync options
  browserSync.init({
    notify: false,
    server:{
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload()
  })
  //calls cssInject when there has been a change made
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start("cssInject")
  })

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start("scriptRefresh");
  })

})

/*changes the css in the browser when changes are made without the need
of a refresh. It contains middleware that calls gulp task styles which
is contained in the styles.js file*/
gulp.task('cssInject',['styles'], function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(browserSync.stream());
})

gulp.task('scriptRefresh',['scripts'], function() {
  browserSync.reload();
})
