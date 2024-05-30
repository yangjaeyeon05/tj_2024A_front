/*
    interval : 시간적인 간격에 따라 특정 로직/함수 반복실행
        1. setInterval( 함수 , 주기 );
            함수 : 주기에 따라 실행할 함수명
            주기 : 1/1000초 (밀리초) , 1000 : 1초 , 10000 : 10초 마다
            - 주기마다 특정 함수 실행
        2. clearInterval( 인터벌반환값의변수명 ) 종료
*/

let value = 0;
function 증가함수(){
    value++;
    document.querySelector('#box1').innerHTML = value;
}

// 1. 1초마다 value를 1씩 증가하고 value 출력하는 함수 실행
setInterval( 증가함수 , 1000 );

function 시계함수(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    document.querySelector('#box2').innerHTML = `${hour} : ${minute} : ${second}`;
}

// 2. 1초마다 시계함수를 호출
setInterval( 시계함수 , 1000 );

// 3. 
let time = 0;   // 타이머의 초
let timerId ;   // 다른 곳에서 사용해야하기 때문에 전역으로 뺀 것!!

// 1. 타이머 작동 로직 함수
function 타이머함수(){ // 타이머 작동 로직 함수
    time++;
    document.querySelector('#box3').innerHTML = time;
}

// 2. 타이머 시작
function 타이머시작(){
/*
    // 1. 방법 1 : 선언적 함수
    timerId = setInterval( 타이머함수 , 1000 );

    // 2. 방법 2 : 익명 함수
    timerId = setInterval( 
        function(){ time++;  document.querySelector('#box3').innerHTML = time; }    
        , 1000 );
*/
    // 3. 방법 3 : 화살표 함수
    timerId = setInterval( 
        ()=>{ time++;  document.querySelector('#box3').innerHTML = time; }    
        , 1000 );

}
/*
function 타이머종료(){
    // - clearInterval( 인터벌변수명 )
    clearInterval(timerId);
}
*/
const 타이머종료 = ()=>{
    // - clearInterval( 인터벌변수명 )
    clearInterval(timerId);
}
