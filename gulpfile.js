"use strict";

/*global require*/
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const data = require('gulp-data');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const path = require('path');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

/**
 * List of options
 * Список опций
 */
const options = {
	uglifyJS: true,
	sourceMaps: true,
	useBabel: true,
};

/*
 * List of directories
 * Список директорий
 */
const paths = {
	input: {
		sass: './src/sass/',
		data: './src/_data/',
		js: './src/js/',
		images: './src/img/'
	},
	output: {
		css: './public/css/',
		js: './public/js/',
		images: './public/img/'
	},
	public: './public/',
};

/************************
 * Gulp Tasks / Задачи  *
 ************************/

/**
 *  Concat all scripts and make sourcemap (optional)
 *  Scripts from vendor folder added first
 *  Объединяем все скрипты в один файл и делаем карту (опционально)
 *  Скрипты из папки vendor добавляются в первую очередь
 */
gulp.task('javascript', function () {
	return gulp.src([paths.input.js + 'vendor/**/*.js', paths.input.js + '**/*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(gulpif(options.useBabel, babel({
		presets: ['@babel/preset-env']
	})))
	.pipe(concat('script.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.js))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/*
* Minify all images
* Оптимизируем изображения
*/
gulp.task('image-min', function () {
	return gulp.src(paths.input.images + '**/*.+(png|jpg|gif|svg|jpeg)')
	.pipe(plumber())
	.pipe(changed(paths.output.images))
	.pipe(imagemin())
	.pipe(gulp.dest(paths.output.images));
});

/**
 * Compile .pug files and pass in data from json file
 * Example: index.pug - index.pug.json
 * Компилируем .pug файлы и передаем в них данные из файла json
 * Образец: в index.pug передаются данные из index.pug.json
 */
gulp.task('pug', function () {
	return gulp.src('./src/*.pug')
	.pipe(plumber())
	.pipe(data(function (file) {
		const json = paths.input.data + path.basename(file.path) + '.json';
		delete require.cache[require.resolve(json)];
		return require(json);
	}))
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest(paths.public))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/**
 * Removing public folder with it contents
 * Удаляем папку public со всем ее содержимым
 */
gulp.task('build-clean', function () {
	return del(paths.public);
});

/**
 * Recompile .pug files and live reload the browser
 * Компилируем .pug файлы и перезагружаем браузер
 */
gulp.task('rebuild', ['pug'], function () {
	browserSync.reload();
});

/**
 * Launch the browser-sync Server
 * Запускаем сервер browser-sync
 */
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: paths.public
		},
		notify: false
	});
});

/**
 * Task group for development
 * Группа задач для разработки
 */
gulp.task('develop', function () {
	runSequence('build-clean',
		['sass', 'javascript', 'image-min', 'pug'],
		'browser-sync');
});

/**
 * Building distributive
 * Создаем дистрибутив
 */
gulp.task('build-dist', function () {
	runSequence('build-clean',
		['sass', 'javascript', 'image-min', 'pug']);
});

/**
 * Compile .scss files
 * Autoprefixer
 * Sourcemaps (optional)
 * Компилируем файлы .scss
 * Используем Autoprefixer для добавления вендорных префиксов
 * Создаем карты (опционально)
 */
gulp.task('sass', function () {
	return gulp.src(paths.input.sass + '*.scss')
	.pipe(plumber())
	.pipe(gulpif(options.sourceMaps, sourcemaps.init()))
	.pipe(sass({
		includePaths: [paths.input.sass],
		outputStyle: 'compressed'
	}))
	.pipe(postcss([autoprefixer()]))
	.pipe(gulpif(options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(paths.output.css))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/**
 * Watch files for changes
 * Следим за изменением файлов
 */
gulp.task('watch', function () {
	gulp.watch(paths.input.sass + '**/*.scss', ['sass']);
	gulp.watch(paths.input.js + '**/*.js', ['javascript']);
	gulp.watch(paths.input.images + '**/*', ['image-min']);
	gulp.watch(['./src/**/*.pug', './src/**/*.json'], ['pug']);
});

/**
 * Shorthand for build-dist
 * Сокращение для создания дистрибутива
 */
gulp.task('build', ['build-dist']);

/**
 * Default task for development, fast-start by 'gulp' command
 * Задача "по умолчанию", быстрый запуск коммандой 'gulp'
 */
gulp.task('default', ['develop', 'watch']);
