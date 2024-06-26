/*

    - 변수 : 변하는 값
        - 데이터 1개 저장할 수 있는 메모리 공간이면서 이름 존재한다.
        - 데이터를 변경할 수 있다.
        - 선언 키워드 : let

    - 상수 : 변하지 않는 값
        - 데이터 1개를 저장할 수 있는 메모리 공간이면서 이름 존재한다.
        - 데이터를 변경할 수 없다.
        - 선언 키워드 : const

    - 저장 하는 이유
        1. 데이터를 재활용/시용하기 위해서
        2. 연산 결과를 기억하기 위해서

    - 변수 선언하는 방법
        1. let           : 변수 선언시 사용되는 키워드/기능이담긴단어
        2. 변수명         : 저장된 데이터를 상징하는 이름 ( 중복불가 , 숫자로 시작 , 띄어쓰기불가 )
        3. =             : 대입, 오른쪽에 있는 데이터를 왼쪽에 대입/저장 연산자
        4. 저장할 데이터

    - 상수 선언하는 방법
        1. const
        2. 상수명
        3. 대입
        4. 저장할데이터

    - 상수/변수 호출
        상수명 또는 변수명

    - 변수내 데이터변경
        변수명 = 새로운 데이터

    - 상수/변수 연산
        변수명 = 변수명 + 변수명 + 데이터

    * 주의할 점
        변수/상수는 선언했지만 데이터를 대입을 안했을 때 'undefined' 이라고 한다.

    - 실제 생활
        예시) 부모님에게 선물하기 위해 시계(아버지)/스카프(어머니) 구매.
        1. 선물 상자 구매 = let , const
        2. 상자의 이름 붙이기 = 변수명 , 상수명
        3. 그 상자에 선물 넣어주기 = 대입
        4. 시계, 스카프 = 데이터

        let 아버지선물상자 = 시계
            console.log( 아버지선물상자 )
        let 어머니선물상자 = 스카프
            console.log( 어머니선물상자 )


*/

// 예) 변수
// 1. 변수/저장 없이 입력값을 출력한다.
console.log( prompt('입력') );
// 2. 입력값을 저장하고 출력한다.
    // 1. 입력  prompt('입력');
    // 2. 저장 let 입력값 = 데이터
let 입력값 = prompt('입력2');
    // 3. 출력 console.log( 데이터 );
console.log( 입력값 );

// 1. 변수 선언/만들기 [4단계]
    // 1. let           : 변수 선언시 사용되는 키워드/기능이담긴단어
    // 2. 변수명         : 저장된 데이터를 상징하는 이름 ( 중복불가 , 숫자로 시작 , 띄어쓰기불가 )
    // 3. =             : 대입, 오른쪽에 있는 데이터를 왼쪽에 대입/저장 연산자
    // 4. 저장할 데이터
let 데이터상자 = '저장된안녕하세요';

// 2. 변수내 데이터를 호출하는 방법
    // 변수명
데이터상자
    // 호출된 데이터를 출력
console.log( 데이터상자 );  // 저장된안녕하세요

// 3. 변수내 데이터 값 변경  // 새로운 데이터가 대입되면 기존데이터 사라짐
    // 변수명 = 새로운데이터
데이터상자 = 10;
console.log( 데이터상자 );  // 10

// 4. 변수내 데이터의 연산
let 숫자상자 = 3;
데이터상자 = 10 + 숫자상자;
console.log( 데이터상자 );  // 13

// 5. 변수는 선언했지만 데이터를 대입하지 않은 경우 'undefined'
let 빈상자;
console.log( 빈상자 );      // undefined
console.log( 빈상자 + 10 ); // NaN

let 문자상자 = '자바스크립트';
console.log( 문자상자 +10 ); // 자바스크립트10

// 1. 상수 만들기 [4단계]
    // 1. const
    // 2. 상수명
    // 3. 대입
    // 4. 저장할데이터
const 상수상자 = '고정된안녕하세요';

// 2. 호출된 상수내 데이터 출력
console.log( 상수상자 );

// 3. 상수내 데이터 변경 [ 붕가능 ]
// 상수상자 = 10;  // 오류발생 : Assignment to constant variable. 시 아래 코드 실행X

// 4. 연산
const 연산상수상자 = 3 + 상수상자;
console.log( 연산상수상자 ); // 3고정된안녕하세요












