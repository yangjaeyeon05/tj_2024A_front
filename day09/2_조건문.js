/*
  - 문제조건 : 입력 prompt 함수 , 출력 console 함수 사용 
  - 문제
  - 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
  - 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
  - 3. 3개의 정수를 각 입력받아 더 큰수를 출력 하시오.
  - 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 
  - 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
  - 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
  - 7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
      하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
        아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
  - 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.
  - 9. 가위바위보 게임 
     조건1 : 가위 0 , 바위 1 , 보 2 입니다.
     조건2 : 플레이어 2 명 입니다.
     실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
     출력조건 : 
        플레이어1 이겼을때 '플레이어1 승리' 출력 
        플레이어2 이겼을때 '플레이어2 승리' 출력 
        비겼을경우 '무승부' 출력 
  - 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
    빈좌석 : 'X'  사용중인좌석 : 'O'
*/


/*
// 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
let 점수1 = prompt( '점수1')*1 ;            console.log( 점수1);
let 점수2 = prompt( '점수2')*1 ;            console.log( 점수2);
let 점수3 = prompt( '점수3')*1 ;            console.log( 점수3);
let total = 점수1+점수2+점수3;              console.log( total );
if( total>=90 ) {console.log( '성공'); }
    else{console.log( '실패'); }
*/

/*
// 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
let num1 = prompt( '점수1' )*1;            console.log( num1 );
let num2 = prompt( '점수2' )*1;            console.log( num2 );
let result = num1 > num2 ? num1 : num2;
console.log( result );
*/

/*
// 3. 3개의 정수를 각 입력받아 더 큰수를 출력 하시오.
let num1 = prompt( '점수1' )*1;             console.log( num1 );
let num2 = prompt( '점수2' )*1;             console.log( num2 );        
let num3 = prompt( '점수3' )*1;             console.log( num3 );
if( num1 > num2 ){
             if( num1 > num3){ console.log(num1) }
             else{ console.log(num3)}
        }else{
             if( num2 > num3){ console.log(num2)}
             else{ console.log(num3) }
        }                                           
*/
// 3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.
/*
let score = [];                                        // 1. 빈 배열 변수 선언 
score[0] = +prompt("정수1 입력");                       // 2. 입력받은 첫번째 정수 값을 배열의 0번 인덱스에 저장 
score[1] = +prompt("정수2 입력");                       // 2. 입력받은 두번째 정수 값을 배열의 1번 인덱스에 저장 
score[2] = +prompt("정수3 입력");                       // 2. 입력받은 세번째 정수 값을 배열의 2번 인덱스에 저장 
let largestNum = score[0];                             // 3. * 가장큰수를 임시로 저장하는 변수 선언하고 먼저 배열내 0번 인덱스의 값 대입 
// if문을 각각 사용해 모든 경우 검사 
if (largestNum < score[1]) { largestNum = score[1]; }   // 4. 만약에 가장큰수 보다 1번 인덱스의 값이 크면 가장큰수에 1번 인덱스의 값 대입 
if (largestNum < score[2]) { largestNum = score[2]; }   // 5. 만약에 가장큰수 보다 2번 인덱스의 값이 크면 가장큰수에 2번 인덱스의 값 대입 
console.log(largestNum);                                // 6. 가장큰수 변수를 출력 
*/
/*
    배열 =    [     10   ,    20    ,  15  ]
    인덱스          0         1         2

    임시변수(largestNum)
        1. largestNum = 배열[0]           largestNum = 10
        2.    if (largestNum < score[1]) { largestNum = score[1]; }
                10 < 20                  true  largestNum = 20
        3.    if (largestNum < score[2]) { largestNum = score[2]; }
                20 < 15                 false   largestNum = 20
        4.  console.log(largestNum);      20
*/

/*
// 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 

        A   B   C
        7   5   10
        
        [오름차순]
        A와 B 비교해서 B가 더 작으면 앞으로/자리교체 A<-->B
        A와 C 비교해서 B가 더 작으면 앞으로/자리교체 A<-->C
        B와 A 비교 X --> 이미 비교했기 때문에
        B와 C 비교해서 C가 더 작으면 앞으로/자리교체 B<-->C
        C와 A 비교 X
        C와 B 비교 X

        [교체/SWAP]
            - 변수들 간의 값 교환 ( 변수는 1개의 값만 저장한다. )
            A=B , A에 B를 대입하면 기존의 A의 값은 사라짐 , 직거래 불가능 <-이렇게하면 노노
            [중개자/임시변수 필요]
        temp = A
        A = B
        B = temp

            1. A = 7        B = 5
            2. temp = A(7)          A = 7 , B = 5 , temp = 7
            3. A = B                A = 5 , B = 5 , temp = 7
            4. B = temp(7)          A = 5 , B = 7 , temp = 7
            5. temp 없애기

let a = prompt('정수1')*1 ;     // 1. 입력받고 변수에 저장한다.
let b = prompt('정수2')*1 ;     // 1. 입력받고 변수에 저장한다.
let c = prompt('정수3')*1 ;     // 1. 입력받고 변수에 저장한다.

if(a>b){                        // 2. 만약에 a가 b보다 크면 a와 b의 값 교환
    let temp=a;                     // 임시변수에 a값 넣고
    a = b ;                         // b값을 a에 넣고
    b = temp;                       // 임시변수 값을 b에 넣는다.
}
// A = 5 , B = 7 , C = 10
if(a>c){
    let temp=a;
    a = c ;
    c = temp;
}
// A = 5 , B = 7 , C = 10
if(b>c){
    let temp=b;
    b = c;
    c = temp;
}
// A = 5 , B = 7 , C = 10
console.log( `오름차순 : ${a} -> ${b} -> ${c}`);
*/

/*
// 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
let 점수 = prompt('점수')*1;
if( 점수 >= 90 ){ console.log( 'A등급' );}
else if( 점수 >=80 ){console.log( 'B등급' );}
else if( 점수 >=70 ){console.log( 'C등급' );}
else{console.log( '재시험' );}
*/

/*
// 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
let id = prompt('아이디');
let password = prompt('비밀번호');
if( id=='admin' && password== '1234' ){console.log( '로그인성공'); }
else{ console.log( '로그인실패'); }
*/

/*
7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
    하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
    아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.

    [ 배열 관련된 함수 ]
        1. push() : 추가    2. splice() : 삭제/삽입     3. length : 총길이   4. indexOf() : 데이터의 인덱스찾기

        베열변수.includes(찾을데이터) : 만약에 찾을 데이터가 배열 내 존재하면 true 아니면 false
        배열변수.indexOf(찾을데이터) : 만약에 찾을 데이터가 배열 내 존재하면 인덱스번호 아니면 -1

        1)  let fruitList = [ '바나나' , '사과' ];
            let fruit = prompt('과일명');
            if(fruitList.includes(fruit)){ console.log( '이미 존재하는 과일입니다.');}
            else{ fruitList.push(fruit); console.log( fruitList);}

        2)  let fruitList = [ '바나나' , '사과' ];
            let fruit = prompt('과일명');
            if(fruitList.indexOf(fruit) >= 0 ){ console.log( '이미 존재하는 과일입니다.');}
            else{ fruitList.push(fruit); console.log( fruitList);}
*/

/*
// 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.

    - 문자열 : ' ', " " , ` ` , prompt( )
    - 주민등록번호 : 951006-2221615;
        - 8번째 자리가 성별 표현 1 또는 3이면 남자 , 2 또는 4이면 여자
        주민등록번호[7] == 1

let number = prompt('주민등록번호');
let color = ' ';    <-- 값을 입력받으면 color 변수가 설정됟.
if( number[7] == '1' || number[7] == '3' ){ color = 'blue' }
else if( number[7] == '2' || number[7] == '4' ){ color = 'red' }
    console.log( color );

// 응용
let html = `<h3 style='color : ${ color }'> 주민등록번호 : ${number} </h3>`;
    console.log( html );
document.querySelector('#result1').innerHTML = html;
*/

/*
// 9. 가위바위보 게임 
     조건1 : 가위 0 , 바위 1 , 보 2 입니다.
     조건2 : 플레이어 2 명 입니다.
     실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
     출력조건 : 
        플레이어1 이겼을때 '플레이어1 승리' 출력 
        플레이어2 이겼을때 '플레이어2 승리' 출력 
        비겼을경우 '무승부' 출력 

    - 경우의 수 판단하기
        1. p1승리( p1가위 p2보 , p1바위 p2가위 , p1보 p2 바위)     2. p1무승부(p1가위p2가위,p1바위p2바위,p1보p2보)    3. p1패배(그외)

let p1 = prompt( '가위[0] 바위[1] 보[2]' );     //1. 입력받아 변수에 저장한다.
let p2 = prompt( '가위[0] 바위[1] 보[2]' );     //1. 입력받아 변수에 저장한다.
// 2.
// 2-1.p1 승리했을때
if( (p1 == 0 && p2 == 2 ) || (p1 == 1 && p2 == 0 ) || (p1 == 2 && p2 == 1 ) ){ console.log( 'p1 win' );}
// 2-2.p1 무승부
else if( (p1 == 0 && p2 == 0 ) || (p1 == 1 && p2 == 1 ) || (p1 == 2 && p2 == 2 ) ){ console.log( 'draw' );}
// 2-3.p2 승리했을때
else{ 
    console.log( 'p2 win' );
}
//2.
let answer = p1 == p2 ? 'draw' : p1 == (p2+1)%3 ? 'p1 win' : 'p2 win';
console.log( (p2+1)%3 );
console.log( p1 == (p2+1)%3 );
console.log( answer );
*/
/*
// 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
    빈좌석 : 'X'  사용중인좌석 : 'O'

let sheetList = [ 'O' , 'X' , 'O' ];

let sheetNum = prompt( '좌석1 , 좌석2, 좌석3');

if(sheetList[ sheetNum-1 ] == 'O' ){console.log( ' 예약불가 '); }
else if(sheetList[ sheetNum-1 ] == 'X'){console.log( ' 예약성공 '); sheetList[ sheetNum-1 ] = 'O' }

console.log( sheetList);
*/