## Gulp / Pug / Sass Starter template.

### Note / Примечание

This readme file will be written in 2 languages (English, Russian).

Содержание будет написано на 2-х языках (Английский, Русский).

### Description / Описание

Simple project to fast-start web-development with Gulp, Pug and Sass.

Простой проект для быстрой разработки сайтов с использованием Gulp, Pug и Sass.

### What`s inside / Что включено

This project uses:

1. [autoprefixer](https://github.com/postcss/autoprefixer) and [gulp-postcss](https://github.com/postcss/gulp-postcss) to add vendor prefixes.
2. [browser-sync](https://github.com/browsersync/browser-sync) to launch a local server.
3. [gulp-changed](https://github.com/sindresorhus/gulp-changed#readme) to detect whether files in the stream changed.
4. [gulp-concat](https://github.com/gulp-community/gulp-concat) to concat javascript files.
5. [gulp-data](https://github.com/colynb/gulp-data) to pass data to .pug files.
6. [del](https://github.com/sindresorhus/del) to clean public folder.
7. [gulp]() **Note** - version 3.9.0. If you updated to gulp 4+ then gulpfile.js won`t work.
8. [gulp-if](https://github.com/robrich/gulp-if) to make conditional tasks.
9. [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) to optimize images.
10. [gulp-plumber](https://github.com/floatdrop/gulp-plumber) to prevent pipe breaking.
11. [gulp-pug](https://github.com/jamen/gulp-pug) to compile pug files.
12. [run-sequence](https://github.com/OverZealous/run-sequence) to run a sequence of gulp tasks.
13. [gulp-sass](https://github.com/dlmanning/gulp-sass) to compile sass files.
14. [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) to write source maps.
15. [gulp-uglify](https://github.com/terinjokes/gulp-uglify/) to minify JavaScript.
16. [gulp-babel](https://github.com/babel/gulp-babel) it`s obvious

В проекте используются:

1. [autoprefixer](https://github.com/postcss/autoprefixer) и [gulp-postcss](https://github.com/postcss/gulp-postcss) для добавления вендорных префиксов.
2. [browser-sync](https://github.com/browsersync/browser-sync) для запуска локального сервера.
3. [gulp-changed](https://github.com/sindresorhus/gulp-changed#readme) чтобы отслеживать изменения файлов.
4. [gulp-concat](https://github.com/gulp-community/gulp-concat) для конкатенации скриптов.
5. [gulp-data](https://github.com/colynb/gulp-data) для передачи данных в .pug файлы.
6. [del](https://github.com/sindresorhus/del) для очистки директории public.
7. [gulp]() **Примечание** - версия 3.9.0. Если Вы обновите gulp до версии 4+, то проект не будет работать.
8. [gulp-if](https://github.com/robrich/gulp-if) для работы с "условными" задачами.
9. [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) для оптимизации изображений.
10. [gulp-plumber](https://github.com/floatdrop/gulp-plumber) для предотвращения так называемых "pipe breaking".
11. [gulp-pug](https://github.com/jamen/gulp-pug) для компиляции .pug файлов.
12. [run-sequence](https://github.com/OverZealous/run-sequence) для запуска задач gulp в определенной последовательности.
13. [gulp-sass](https://github.com/dlmanning/gulp-sass) для компиляции .sass файлов.
14. [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) для создания "карт".
15. [gulp-uglify](https://github.com/terinjokes/gulp-uglify/) для минификации скриптов.
16. [gulp-babel](https://github.com/babel/gulp-babel) предназначение очевидно

### Usage
- Execute `npm install` or `yarn` from base directory to install all dependencies.
- Execute `gulp` or `yarn start` or `npm start` to start development server.
- Execute `gulp build` or `yarn run build` or `npm run build` to build project files.

### Использование
- Выполните комманду `npm install` или `yarn` из базовой директории проекта для установки всех необходимых зависимостей.
- выполните комманду `gulp` или `yarn start` или `npm start` для запуска сервера.
- выполните комманду `gulp build` or `yarn run build` or `npm run build` для создания готового проекта.


### Addons / Дополнения

By default this project includes:

- Jquery 3.1.0
- GSAP
- Bootstrap 4 Grid (**Note:** Only grid. You ask why? Because as developer I hate css frameworks with the whole bunch of useless styles and scripts.)
- color variables

If you don`t need something - just delete it.

В данный проект по умолчанию включены:

- Jquery 3.1.0
- GSAP
- Bootstrap 4 Grid (**Примечание:** Только сетка. Почему? Я, как разработчик, не люблю css фреймворки с кучей ненужных стилей и скриптов.)
- цветовые переменные

Если что-то из данного списка Вам не требуется - можете смело удалять.