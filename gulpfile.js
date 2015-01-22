var gulp    = require('gulp')
var connect = require('gulp-connect')
var watch   = require('gulp-watch')

gulp.task('connect', function() {
  connect.server({
    port: 8081,
    root: './',
    livereload: true,
  })
})

gulp.task('watch', function() {
  watch({
    glob: [
      '*.html',
      '*.js',
    ]
  }).pipe(connect.reload())
})


gulp.task('default', [
  'connect',
  'watch',
])
