var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');

//this is called by the gulp watch function in watch.js file
gulp.task("styles", function() {
  return gulp.src('./app/assets/styles/styles.css')
  //different plugins that add functionality to postcss order seems to matter
  .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
  //if there is an error logs a message and keeps watch running
  .on('error', function(err) {
    console.log(err.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'),console.log("done"))
})
