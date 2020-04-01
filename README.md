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


gulp는 task와 함께 작동함 -> task란? 모든 pug파일을 가지고 이것들을 다른 폴더에 집어넣으면.. 우선 얘들을 html으로 바꿔야겠지

function을 export하거나 const하면 된당.
scss파일을 css로 바꾸는 것. 
이미지 최적화, js 압축, 모든 파일을 한 폴더에 넣고.. 여러 task 함꼐 작동가능

pug 파일을 html으로 바꾸는 task 해보쟈 -> gulp pug plugin
```
yarn add gulp-pug -D //terminal
import gulpPug from "gulp-pug"; //gulpfile
```

src()

pipe()
gulp는 pipe()랑 같이 사용. src()를 통해서 파일의 흐름을 만들고 pipe()로 그 흐름이 어디로 나오게 할지 만드는 것. 어떤 pipe는 코드를 컴파일하고, 다른 것은 코들르 복사, 코드를 최소화...등등

dest() : destination으로 컴파일한 파일을 어느곳에 저장할지 정해주는 것


build 폴더 내부 파일제거 
컴파일했는데 수정하면 다시 리빌드해야짓
먼저 터미널에 yarn add del -D로 설치하고, gulpfile.babel.js파일에 import