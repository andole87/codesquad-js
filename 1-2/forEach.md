# forEach 사용법

## 정의
> 배열에 내장된 함수이다. 인수로 전달된 callback함수를 배열의 모든 요소에 대해 실행한다. 
### 구문
```javascript
Array.prototype.forEach(callback[, thisArg]);
```
### parameter
- callback : 각 요소에 대해 실행할 함수. 다음 세 가지 인수를 받는다.
    - currentValue : 처리할 현재 요소
    - index :   처리할 현재 요소의 인덱스
    - array : forEach()를 호출한 배열
- thisArg : callback을 실행할 때 this로 사용할 **값(객체)**.

## 샘플
```javascript
// 콘솔에 배열 요소를 모두 출력한다.
var array = [1,2,3,4,5];
array.forEach(function(element){
    console.log(element);
});
// 결과:
1
2
3
4
5
6
```
```javascript
var array = [1,2,3,4,5];
array.forEach(function(element,index){
    console.log(element + index);
});
// 결과:
1
3
5
7
9
```
## 특징
forEach()로 처리할 요소의 범위는 최초 callback 호출 전에 설정된다.  
forEach() 호출을 시작한 뒤 배열에 추가한 요소는 callback이 방문하지 않는다.  
배열의 기존 요소값이 바뀐 경우, callback에 전달하는 값은 forEach()가 요소를 방문한 시점의 값을 사용한다.  
방문하기 전에 삭제한 요소는 방문하지 않는다.

**map()과 reduce()와는 달리**, 실행의 결과로 undefined를 리턴하기 때문에 메서드 체인의 중간에 사용할 수 없다.

forEach()는 배열의 값을 변형하지 않는다. 그러나 callback은 배열을 변형할 수 있다.

forEach()는 중간에 종료할 수 없다. 예외를 던지는 방법으로 종료시킬 수는 있으나 권장되지 않는다.  

파라미터로 들어가는 thisArg는, 객체가 들어갈 수 있다. forEach()는 인자로 받는 객체에 접근하여 callback을 실행할 수 있다.
```javascript
var arr = [0,1,2];
var obj = {};
obj.arr = [10,20,30];

arr.forEach(function(element){
    console.log(this.arr[element]);
},obj);

//결과
10
20
30
```

## for 구문과 비교
```javascript
const items = [1,2,3,4,5];
const copy = [];

//for문
for (let i=0; i<items.length; i++){
    copy.push(items[i]);
}

//forEach문
items.forEach(function(e){
    copy.push(e);
});


/// 중단이 필요한 경우 for문을 사용한다.
const items = [1,2,3,4,5];
const copy = [];

//for문
for (let i=0; i<items.length; i++){
    if(items[i] > 3){
        break;
    }
    copy.push(items[i]);
}
```