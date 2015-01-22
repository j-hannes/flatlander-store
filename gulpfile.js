var gulp    = require('gulp')
var connect = require('gulp-connect')
var watch   = require('gulp-watch')

gulp.task('connect', function() {
  connect.server({
    //port: 8081,
    root: 'app',
    livereload: true,
  })
})

gulp.task('watch', function() {
  watch([
    'app/*.html',
    'app/*.js'
  ]).pipe(connect.reload())
})


gulp.task('default', [
  'connect',
  'watch',
])
