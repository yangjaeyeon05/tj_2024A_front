/* 

    연산자 : 연산시 사용되는 기호
    1. 산술연산자 : 결과물 => 연산결과
        + 더하기 - 빼기 * 곱하기 / 나누기 % 나머지
            몫 : parseInt( ) : 정수 반환 함수

    2. 연결연산자 + : 결과물 => 연결결과
        - 피연산자에 문자이면 연결 연산자로 적용

        숫자 + 숫자 : 더하기
        숫자 + 문자 : 연결
        문자 + 문자 : 연결
        변수(숫자) + 숫자 : 더하기
        변수(문자) + 숫자 : 연결
        문자 + 숫자1 + 숫자2 : 연결
    
    3. 비교연산자 : 결과물 => true/false
        > 초과/크다     >=이상/크거나같다
        < 미만/작다     >=이하/작거나같다
        ==[값]같다      ===[값과타입]같다       10=="10"        10==="10"
        !=같지않다      !==같지않다

    4. 관계연산자 : 비교연산자 2개 이상일때 
        && 이면서 면서 이고 그리고 모두     and조건     초등학생이 사탕이면서 초콜릿을 먹을거야
            true && true => true
            true && false => false
            10<=변수<=20  => 변수>=10 && 변수<=20
        || 이거나 거나 하나라도 또는        or조건      초등학생이 사탕이거나 초콜릿을 먹을거야
            true || true => true
            true || false => true
        ! 부정 반대                        not조건     초등학생이 사탕을 안먹을거야
            !true => false
            !false => true
    5. 대입연산자
        = 대입 ( 오른쪽 데이터를 왼쪽에 대입 )
        += ( 오른쪽 데이터를 왼쪽 데이터와 계산(더하기) 결과를 왼쪽에 대입 )
        -= , *= , /= , %=

    6. 증감연산자
        ++ 1증가 [ 선위 증가 : ++변수 , 후위증가 : 변수++ ]
        -- 1감소 [ 선위 감소 : --변수 , 후위감소 : 변수-- ]
            * 선위/후위 기준 : ;세미클론 안에서 우선순위

    7. 삼향연산자
        1. 조건 ? 참 : 거짓
        2. 조건1 ? 참1 : 조건2 ? : 참2 : 거짓


*/
console.log( 10+3 );     // 13
console.log( 10-3 );     // 7
console.log( 10*3 );     // 30
console.log( 10/3 );     // 3.33333333~
console.log( 10%3 );     // 1
console.log( parseInt( 10/3 ) );     // 3
console.log( '연산결과 : ' + 10 + 10 );     // 연산결과 : 1010
console.log( '연산결과 : ' + (10 + 10) );     // 연산결과 : 20

/*
    문제1 : prompt 함수로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 과 평균 를 console 출력하시오.
    문제2 : prompt 함수로 반지름 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console 출력 하시오.
    문제3 : prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console 출력 하시오.
        예) 54.5  84.3 입력시 결과는 64%

    - prompt 함수의 주의할 점 : 입력된 값은 모두 문자. 왜? input 이기 때문에
        - "10" -> 10    문자 10를 숫자 10으로 변환하는 방법
            1. "10"*1 => 10
            2. Number("10") => 10
        - 10 -> "10"    숫자 10을 문자 10으로 변환하는 방법
            1. 10+"" => "10"
            2. String(10) => "10"
        
*/
/*
// 문제1
    // 1. 국어 입력받고 변수에 저장
    let 국어 = prompt( '국어 점수' )*1;
    console.log( 국어 );

    // 2. 영어 입력받고 변수에 저장
    let 영어 = Number(prompt( '영어 점수' ));
    console.log( 영어 );

    // 3. 수학 입력받고 변수에 저장
    let 수학 = prompt( '수학 점수' )*1;
    console.log( 수학 );

    // 4. 총점 ( 입력받은 3개의 변수를 더한 값 )계산하고 결과를 변수에 저장
    let 총점 = 국어+영어+수학;
    // 5. 평균 계산하고 결과를 변수에 저장
    let 평균 = 총점/3;
    // 6. 총점과 평균 변수를 console.log 출력       
    console.log( `총점 : ${총점}`);
    console.log( `평균 : ${평균}`);
*/
/*
// 문제2
    // 1. 반지름 입력받고 변수에 저장
    let 반지름 = Number(prompt('반지름 : '));

    // 2. 원넓이 계산해서 변수에 저장
    let 원넓이 = 반지름*반지름*3.14;

    // 3. 계산된 원넓이의 변수를 출력
    console.log( `원넓이 : ${원넓이}` );
*/
/*
// 문제3
    // 1. 실수 입력받고 변수에 저장
    let 실수1 = prompt( '실수1 : ');
    // 2. 실수 입력받고 변수에 저장
    let 실수2 = prompt( '실수2 : ');
    // 3. 비율 계산
    let 비율 = (실수1/실수2)*100;
    // 4. 출력 (1->100%  0.1->10%  0.001->1%  10->1000%)
    console.log( `비율 : ${비율}%`);
*/

// 3. 비교연산자
console.log( 10 > 3 );   // 초과 true 
console.log( 10 >= 3 );  // 이상 true 
console.log( 10 < 3 );   // 미만 false 
console.log( 10 <= 3 );   // 이하 false 
console.log( 10 == 10 );   // 같다 true 
console.log( 10 === "10" );   // 강력비교 false 
console.log( 10 != 3 );   // 같지않다 true 
console.log( 10 !== 3 );   // 강력비교 true 

// 4. 관계연산자
console.log( 10 > 3 && 20 > 10 );   // ture && true => true
console.log( 10 > 3 && 20 > 30 );   // ture && false => false
console.log( 10 > 3 || 20 > 10 );   // ture || true => true
console.log( 10 > 3 || 20 > 30 );   // ture || false => true
console.log( !(10 > 3) );           // !ture => false

/*
    문제4 : prompt 함수로 정수를 입력받아 홀수true / 짝수false 로 출력(console)하시오. 
    예) 7 입력시 true 출력 
    - 홀수 : 값%2 == 1      , 값이 나누기 2를 했을 때 나머지가 1이면 그 값은 홀수
    - 짝수 : 값%2 == 0      , 값이 나누기 2를 했을 때 나머지가 0이면 그 값은 짝수
  문제5 : prompt 함수로 정수를 입력받아 7배수이면true / 아니면 false 로 출력(console)하시오. 
    예) 15 입력시 false 출력 


  문제6 : prompt 함수로 아이디 와 비밀번호를 입력받아 아이디 admin 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 로 출력(console)하시오. 
    예) admin , 1234 입력시 true 출력 
  
  문제7 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수 이면 true 아니면 false 로 출력(console)하시오. 

  문제8 : prompt 함수로 십만원 단위의 금액을 입력받아 지폐 개수 출력하시오.
    예) 356789 입력시   십만원:3장 만원:5장 천원6장 출력

*/
/*
// 문제 4
    // 1. 정수를 입력받아 변수에 저장.
    let 정수 = prompt('정수 : ');
    // 2. 홀수인지 짝수인지 판단.
    let 결과 = 정수 % 2 == 1 ; 
    // 3. 계산결과 출력
    console.log(`결과 : ${결과}`);
*/
/*
// 문제 5
    let 정수 = prompt('정수 : ');
    let 결과 = 정수%7 == 0;
    console.log( `결과 : ${결과}`);
*/
/*
// 문제 6
    // 1. 아이디 입력받아 저장.
    let 아이디 = prompt('아이디 : ');
    // 2. 비밀번호 입력받아 저장.
    let 비밀번호 = prompt('비밀번호 : ');
    // 3. 아이디와 비밀번호 일치 여부 판단해서 결과 저장
    let 결과 = 아이디 == 'admin' && 비밀번호 == '1234';
    // 4. 출력
    console.log( `결과 : ${결과}`);
*/
/*
// 문제 7
    let 정수 = prompt('정수 : ');
    let 결과 = 정수 % 2 == 1 && 정수 % 7 == 0;
    console.log(`결과 : ${결과}`);
*/
/*
// 문제 8 
    let 금액 =  prompt( '금액 : ');
    let 십만원권 = 금액[0];
    let 만원권 = 금액[1];
    let 천원권 = 금액[2];
    console.log(`십만원권 : ${십만원권}장 , 만원권 : ${만원권}장 , 천원권 : ${천원권}장`);

    let 금액 =  prompt( '금액 : ');
    // 1. 십만원권 개수 세기
    let 십만원권 = parseInt(금액/100000);
    // 2. 원래 금액에서 십만원 단위 빼기
    금액 = 금액-(십만원권*100000);
    // 3. 만원 개수 세기
    let 만원권 = parseInt(금액/10000);
    // 4. 원래 금액에서 만원 단위 뺴기
    금액 = 금액-(만원권*10000);
    // 5. 천원 개수 세기
    let 천원권 = parseInt(금액/1000);
    // - 출력
    console.log(`십만원권 : ${십만원권}장 , 만원권 : ${만원권}장 , 천원권 : ${천원권}장`);
*/

// 대입연산자
let 변수 = 10;
변수 = 변수 + 3;
//1  2  3  4 5;    // 변수 = 10 + 3 ;
                    // 변수 = 13 ; 
                    // 변수(13)
변수 += 3;          // 오른쪽 값을 왼쪽 값과 더한 후 결과를 왼쪽에 대입
변수 -= 3;           
변수 *= 2;               

/*
// 증감연산자
let 나이 = 40;
console.log( 나이++ );  // 40 1. 변수 호출 -> 2. 출력 -> 3. 1증가
console.log( 나이 );    // 41
console.log( ++나이 );  // 42 1. 변수 호출 -> 2. 1증가 -> 3. 출력

console.log( 나이-- );  // 42
console.log( 나이 );    // 41
console.log( --나이 );  // 40

나이 = 나이 + 1;
나이 += 1;
나이++;

나이 = 나이 +3;
나이 += 3;
*/
/*
// 삼향연산자
let 점수 = 75;
console.log( 점수 >= 80 );  // false
console.log( 점수 >= 80 ? '합격' : '불합격' );  // false -> 불합격

let age = 39;
console.log( age >= 19 );   // true
console.log( age >= 19 ? '성인' : '청소년' ); // true -> 성인
console.log( age >= 40 ? '중년' : age >= 19 ? '성인' : '청소년' );  // 성인
*/

let 점수 = prompt('점수');
console.log( 점수 >= 80 ? '합격' : '불합격' );

