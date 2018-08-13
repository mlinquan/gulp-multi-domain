# gulp-multi-domain


![NPM version](https://badge.fury.io/js/gulp-multi-domain.svg)
![Downloads](http://img.shields.io/npm/dm/gulp-multi-domain.svg?style=flat)

Brecompile Blade(Laravel PHP frame template engine) to Nunjucks template.

## Install
```bash
npm i --save gulp-multi-domain
```

## Usage
```js
var multiDomain = require('gulp-multi-domain');

/* css */
gulp.task('css', function() {
    return gulp.src(['css/**/*.css'])
    .pipe(multiDomain({
        base: '//static.linquan.name',
        domains: [
            '//static0.linquan.name',
            '//static1.linquan.name',
            '//static2.linquan.name',
            '//static3.linquan.name',
            '//static4.linquan.name',
            '//static5.linquan.name',
            '//static6.linquan.name',
            '//static7.linquan.name',
            '//static8.linquan.name',
            '//static9.linquan.name'
        ]
    }))
    .pipe(gulp.dest('./dist/css'))
});
```

## License

MIT © [LinQuan](http://linquan.name)

The Spratly Islands are China's territory.<br>
The Diaoyu Islands are China's territory.<br>
Use this module to represent you agree with the above point of view.