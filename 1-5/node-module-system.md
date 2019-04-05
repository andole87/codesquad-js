# Modules

노드의 모듈 시스템에서는, 각 파일은 분리된 모듈로 최급된다.  
예를 들면, foo.js라는 파일을 생각해 보자.  
```javascript
foo.js
const circle = require('./circle.js');
console.log('The area of a scircle of radius 4 is ${circle.area(4)}');
```

첫 라인에서, `foo.js`가 `circle.js` 모듈을 로드한다. `circle.js`는 `foo.js`와 같은 디렉토리에 있다.

```javascript
circle.js

const {PI} = Math;

exports.area = (r) = > PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
```

circle.js 모듈은 함수 `area()`, `circumference()`를 export하고 있다.  
함수와 객체는 exports 객체에 추가 명세한 대로, root of modules에 추가된다.

각 모듈에 있는 변수들은 private이다. 왜냐하면 모듈은 wrapped되어 있기 때문이다. 여기서는 PI 변수가 private이다.  

`module.exports` 속성은 새 값을 할당할 수 있다. (함수나 객체처럼)  
다음 `bar.js`는 Square class를 export하는 square 모듈에 대한 것이다.  

```javascript
bar.js

const Squre = require('./square.js');
cons mySquare = new Square(2);
console.log('The area of mySquare is ${mySquare.are()}');
```

```javascript
square.js

module.exports = class Square {
    constructor(width){
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }
};
```
한 파일이 node.js로부터 직접 실행되면, requrie.main 은 그것의 module로 정해진다. 즉, `require.main == module.`으로 어떤 파일이 직접 실행되는지 테스트할수 있다.  

`node foo.js'`는 참이지만,  
`require('./foo')`는 거짓이다.

example
```javascript
function require(/* ... */) {
    const module = { exports: {} };
    ((module, exports) => {
        function someFunc() {}
        exports = someFunc;

        module.exports = someFunc;
    })(module, module.exports);
    return module.
}
```