var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var minifyHtml= require("gulp-minify-html");
var autoprefixer = require('gulp-autoprefixer');
var proxyMiddleware = require('http-proxy-middleware');
var less = require("gulp-less");
var fileinclude = require('gulp-file-include');
var prosyHttp = proxyMiddleware('/v2',
    {
        target: 'http://api.silianmall.com', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: {
            '^/v2' : '/v2',     // rewrite path
        },
        // router(object | function): {
        //      when request.headers.host == 'dev.localhost:3000',
        //      override target 'http://www.example.org' to 'http://localhost:8000'
        //     'dev.localhost:3000' : 'http://localhost:8000'
        // }
        router:function fun(req){
            if(req.headers.testhost == "dd"){
                return "http://api.silianmall.com"
            }else{
                return "http://api.silianmall.com"
            }
        }
    });

//基本任务
gulp.task('sass', function(){  //打包sass
    return gulp.src('../src/css/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['> 0%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('../dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('less', function(){  //打包sass
    return gulp.src('../src/css/*.less')
        .pipe(less()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['> 0%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('../dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('js',function() {
    gulp.src('../src/js/*.js')
        .pipe(uglify())//压缩
        .pipe(gulp.dest('../dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('css', function () {
    gulp.src('../src/css/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['> 0%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('../dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
})
gulp.task('minify-include-html',function() {
    gulp.src('../src/html/*.html')//要压缩的html文件
        .pipe(fileinclude({
            prefix: '@',
            basepath: "../src/common/"
        }))
        .pipe(gulp.dest('../dist/html'));
});
gulp.task('minify-html',function() {
    gulp.src('../src/html/*.html')//要压缩的html文件
        .pipe(gulp.dest('../dist/html'));
});
gulp.task('images', function(){
    return gulp.src('../src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('../dist/images'))
});
gulp.task('copy',function(){
    gulp.src('../static/**/*')
        .pipe(gulp.dest('../dist/'));
});
gulp.task('clean', function(callback) {
    del('dist');
    return cache.clearAll(callback);
});
gulp.task('watch',['browserSync', 'sass'],function(){  //我们可以在watch任务之前告知Gulp，先把browserSync和Sass任务执行了再说。
    gulp.watch('../src/css/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('../src/css/*.css', ['css']).on('change', browserSync.reload);
    gulp.watch('../src/css/*.less', ['less']).on('change', browserSync.reload);
    gulp.watch('../src/html/*.html',['minify-html']).on('change', browserSync.reload);
    gulp.watch('../src/js/*.js', ["js"]).on('change', browserSync.reload);
    // Other watchers
});

gulp.task('watchInclude',['browserSync', 'sass'],function(){  //我们可以在watch任务之前告知Gulp，先把browserSync和Sass任务执行了再说。
    gulp.watch('../src/css/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('../src/css/*.css', ['css']).on('change', browserSync.reload);
    gulp.watch('../src/css/*.less', ['less']).on('change', browserSync.reload);
    gulp.watch('../src/html/*.html',['minify-include-html']).on('change', browserSync.reload);
    gulp.watch('../src/js/*.js', ["js"]).on('change', browserSync.reload);
    gulp.watch('../src/common/*.html', ['minify-include-html']).on('change', browserSync.reload);
    // Other watchers
});

gulp.task('browserSync', function() { //浏览器热加载
    browserSync({
        server: {
            baseDir: ['../dist/','../static/'],
            middleware:prosyHttp
        },
        startPath:"/html/"
    })
});


//执行任务
gulp.task('build', function (callback) {
    runSequence('clean',['copy','less','sass','minify-html','js','images','css'],callback)
});
gulp.task('default', function (callback) {
    runSequence('clean',['less','sass','images','js','minify-html','browserSync', 'watch'],
        callback
    )
});
gulp.task('defaultInclude', function (callback) {
    runSequence('clean',['less','sass','images','js','minify-include-html','browserSync', 'watchInclude'],
        callback
    )
});

