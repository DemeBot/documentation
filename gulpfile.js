var gulp = require('gulp');
var shell = require('gulp-shell');
var git = require('gulp-git');

gulp.task('latex', ['charter-latex', 'srs-latex']);

gulp.task('charter-latex', function () {
  return gulp.src('charter/project_charter.tex', {read: false})
    .pipe(shell([
      'pdflatex <%= file.path %>'
    ], {
      cwd: '<%= file.base %>'
    }))
});

gulp.task('ads-latex', function () {
  return gulp.src('ads/architectural_design_specification.tex', {read: false})
    .pipe(shell([
      'pdflatex <%= file.path %>'
    ], {
      cwd: '<%= file.base %>'
    }))
});

gulp.task('srs-latex', function () {
  return gulp.src('srs/system_requirements_specification.tex', {read: false})
    .pipe(shell([
      'pdflatex <%= file.path %>'
    ], {
      cwd: '<%= file.base %>'
    }))
});

gulp.task('pdf-add', [ 'srs-latex', 'charter-latex', 'ads-latex' ], function(){
  return gulp.src('**/*.pdf')
  .pipe(git.add());
});
