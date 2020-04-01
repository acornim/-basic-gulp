//import gulp from 'gulp'; gulpfile.js에서는 이거 안먹음.. 근데 이게 최신기술
// gulpfile.js rename to gulpfile.babel.js
//const gulp = require("gulp"); 잘가~~
import gulp from "gulp";
import gpug from "gulp-pug";
// 빌드한거 청소하고 다시 청소하자 
import del from "del";
const routes = {
    pug: {
        src: "src/*.pug",
        dest: "build"
    }
};

const pug = () =>
    gulp
        .src(routes.pug.src)
        .pipe(gpug())
        .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]); //[]안에는 폴더이름

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);
       
//json 에서만 쓸 거 export 적어주면 됨
export const dev = gulp.series([prepare, assets]); 