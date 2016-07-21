
var gulp = require('gulp'),
    sass = require('gulp-sass')

var input = './node_modules/bootstrap-sass/assets/stylesheets/';
//var input = './prueba/*.scss';
var output = './desarrollo/css';


gulp.task('sass', function(){
	   gulp.src(input + 'app.scss')
		.pipe(sass())
		.pipe(gulp.dest(output));
});




gulp.task('watch', function(){
  gulp.watch(input + '**/*.scss' , ['sass']);
});

gulp.task('default', ['sass', 'watch']);



























// gulp.task('watch', function() {

//   // Watch .scss files
//   gulp.watch('src/styles/**/*.scss', ['sass']);

//   // Watch .js files
//   //gulp.watch('src/scripts/**/*.js', ['scripts']);

//   // Watch image files
//   //gulp.watch('src/images/**/*', ['images']);

// });


// gulp.task('sass', function ()
//           {
 
//       return sass('./assets/stylesheets/_bootstrap.scss', { style: 'expanded' })
//         .pipe(gulp.dest('./desarrollo/css/style.css'));
//           });