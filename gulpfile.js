var gulp = require('gulp')
var gutil = require('gulp-util');
var rev = require("gulp-rev");

// gulp 自带的输出都带时间和颜色，这样很容易识别。我们利用 gulp-util 实现同样的效果。
gulp.task('default', function () {
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:') + "some")
});

// html
var htmlmin = require('gulp-htmlmin');
gulp.task('watchhtml', function () {
    var options = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('./dist/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});


//检测src/js/目录下的 js 文件修改后，压缩 js/ 中所有 js 文件并输出到 dist/js/ 中
var uglify = require('gulp-uglify')

gulp.task('watchjs', function () {
    gulp.src('./dist/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// 按照本章中压缩 JS 的方式， 先编写 watchcss 任务
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watchcss', function () {
    var src = './dist/css/*.css';
    gulp.src(src)
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
});
// 配置 Less 任务
// 参考配置 JavaScript 任务的方式配置 less 任务

var less = require('gulp-less')

gulp.task('watchless', function () {
    var src = "./src/less/*.less";
    gulp.src(src)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifycss())
    gulp.dest('./dist/css')
})

// 配置 Sass 任务
// 参考配置 JavaScript 任务的方式配置 Sass 任务
var sass = require('gulp-sass')
gulp.task('watchsass', function () {
    var src = "./src/sass/*.sass";
    gulp.src(src)
        .pipe(sass())
        .pipe(minifycss())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(gulp.dest('./dist/css'))
});

// 配置 image 任务
var imagemin = require('gulp-imagemin')

gulp.task('watchimage', function () {
    var src = "./src/images/*";
    gulp.src(src)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/images'))
})
// 配置文件复制任务
gulp.task('watchcopy', function () {
    var src = 'src/libs/*';
    gulp.src(src)
        .pipe(gulp.dest('dist/libs/'))
})



// 控制就是 css版本
var runSequence = require('run-sequence'),
    revCollector = require('gulp-rev-collector');

//定义css、js源文件路径
var cssSrc = './src/css/*.css',
    jsSrc = './src/js/*.js';


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function () {
    return gulp.src(cssSrc)
        .pipe(rev())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/css'));
});

//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function () {
    return gulp.src(jsSrc)
        .pipe(rev())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/js'));
});


//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['./dist/rev/**/*.json', './src/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist/'));
});



gulp.task('pressAll', ['watchhtml',  'watchcss', 'watchless', 'watchsass', 'watchimage', 'watchcopy'])
//开发构建
gulp.task('default', function (done) {
    condition = false;
    runSequence(
        ['revCss'], ['revJs'], ['revHtml'],["pressAll"],
        done);
});