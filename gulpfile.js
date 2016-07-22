
var gulp = require('gulp'),
    sass = require('gulp-sass'),
	connect = require('gulp-connect');


// path de archivos para compilar y compilado
var input = './desarrollo/bootstrap-sass/assets/stylesheets/';
var output = './desarrollo/css';


gulp.task('sass', function(){
	gulp.src(input + 'app.scss')
		.pipe(sass())
		.pipe(gulp.dest(output))
		.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: 'desarrollo',
		livereload: true
	});
});


gulp.task('html', function () {
	gulp.src('./desarrollo/*.html')
	.pipe(connect.reload());
});


gulp.task('watch', function(){
	gulp.watch(input + '**/*.scss' , ['sass']);
	gulp.watch('./desarrollo/*.html' , ['html']);


});



// tarea por defecto
gulp.task('default', ['sass','connect', 'watch']);



























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