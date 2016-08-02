
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	minify= require('gulp-minify-css'),
	concat = require('gulp-concat');

//sass = require('gulp-sass'),
// path de archivos para compilar y compilado
var input = './desarrollo/bootstrap-sass/assets/stylesheets/';
var output = './desarrollo/css';


// gulp.task('sass', function(){
// 	gulp.src(input + 'app.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest(output))
// 		.pipe(connect.reload());
// });



gulp.task('css', function () {
	gulp.src('./desarrollo/css/*.css')
	.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('./desarrollo/js/*.js')
	.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: 'desarrollo',
		port: 3000,
		livereload: true
	});
});


gulp.task('html', function () {
	gulp.src('./desarrollo/*.html')
	.pipe(connect.reload());
});


gulp.task('watch', function(){
	//gulp.watch(input + '**/*.scss' , ['sass']);
	gulp.watch('./desarrollo/*.html' , ['html']);
	gulp.watch('./desarrollo/css/*.css' , ['css']);
	gulp.watch('./desarrollo/js/*.js' , ['js']);
});



// tarea por defecto
//gulp.task('default', ['sass','connect','watch']);

gulp.task('default', ['connect','watch']);






//produccion

// gulp.task('pjs', function(){
//    gulp.src('./desarrollo/js/*.js')
//    .pipe(gulp.dest('produccion/js/'));
// });

gulp.task('pcss', function(){
   gulp.src('./desarrollo/css/*.css')
   .pipe(concat('main.css'))
   .pipe(minify())
   .pipe(gulp.dest('produccion/css/'));
});



gulp.task('pjs', function() {
  gulp.src('./desarrollo/js/*.js')	
    .pipe(gulp.dest('produccion/js/'))
});

gulp.task('mvhtml', function(){
	gulp.src('./desarrollo/*.html')
	.pipe(gulp.dest('produccion/'));
});




gulp.task('pconnect', function(){
	connect.server({
		root: 'produccion',
		port: 3030,
		livereload: true
	});
});


gulp.task('produccion', ['pjs','pcss','mvhtml','pconnect']);


















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