# basic-gulp
-pug, scss, 최신 js를 Gulp로 컴파일일 해보자!
- yarn이 최고인듯,,, npm globally package install 왜 잘 안되냥...
- 그래서 node 삭제하고 nvm으로 다시 설치
```
yarn add gulp-cli -g //콘솔에서 gulp 호출 
yarn init // 초기 세팅. package.json 생김
```

터미널에서 gulp-cli 사용하고 싶으면 package.json에 명령어 추가
```
"scripts": {
    "dev": "gulp dev"
  },
  ```

gulp 설치
```
yarn add gulp -D
yarn dev
```

gulp가 바보같이 최신 문법 이해 못해...
babel이용하자.
gulpfile.js -> gulpfile.babel.js 
.babelrc 파일 생성 / 기본으로 안만들어지니까 내가 만들어야함. packages.json있는 자리



babel package 최신버전은 @붙음 - .babelrc preset 과정
```
yarn add @babel/{register,core,preset-env}
```