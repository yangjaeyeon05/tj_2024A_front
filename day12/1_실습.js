/* 
    실습1 : 회원가입과 로그인 구현
    [요구사항]
    1. 아이디와 비밀번호를 입력받아 회원가입 처리 해주세요.
    2. 아이디와 비밀번호가 기존 데이터와 일치했을 때 로그인 성공 아니면 실패 해주세요.

    [ 개발순서도 ]

    요구사항분석
        1. 회원가입 : 저장 C
        2. 로그인 : 기존데이터와 비교 R , 논리

    (백엔드)
    1. 메모리 구성
        1. 여럿 아이디와 비밀번호를 저장하는 저장소필요
        let idList = [ ]
        let pwList = [ ]
        2. 두 배열간 인덱스가 같으면 하나의 회원
            idList[0]
            pwList[0]

    2. 기능/서비스 구성
        1. 회원가입 처리 == 함수
            singup
            [ 로직 순서도 ]
                1. 아이디/비밀번호 입력받는다. 입력장치 : html
                2. 입력받은 데이터를 각 배열에 저장한다.
                3. 안내 메시지
        2. 로그인 처리 == 함수
            login
            [ 로직 순서도 ]
                1. 아이디/비밀번호 입력받는다.
                2. 입력받은 데이터를 각 배열 내 존재하는지 비교한다.
                3. 안내 메시지
    
    3. 함수 구현

    (프론트엔드)
    1. 회원가입 화면
        1. 아이디 input , 비밀번호 input
        2. 회원가입 처리 button
    2. 로그인 화면
        1. 아이디 input , 비밀번호 input
        2. 로그인 처리 button
    3. 각 페이지 꾸미기

    ( 백엔드/프론트엔드 연동 )
    각 button에 JS 함수 연동

*/

// 1. 메모리 구성
let idList = [ ];
let pwList = [ ];

/*
// 2. 함수 구성
function signup(){ console.log( 'signup()');
    // 2-1
    let signupId = document.querySelector('#signupId'); console.log( 'signupId');
    let signupPw = document.querySelector('#signupPw'); console.log( 'signupPw');
    // 2-2
    let id = signupId.value;
    let pw = signupPw.value;
    // 2-3 입력받은 데이터를 각 배열에 저장한다.
    idList.push( id );
    pwList.push( pw );
    // 3-4 안내메시지
    alert('회원가입성공');
}
// 2. 함수 구성
function login(){
    // 2-1
    let loginId = document.querySelector('#loginId');
    let loginPw = document.querySelector('#loginPw');
    // 2-2
    let id = loginId.value;
    let pw = loginPw.value;
    // 3-3 비교
        // 3-1 아이디가 기존 배열 내 존재하는지
    let index = idList.indexOf( id );
    if( index != -1 ){
        // 3-2 아이디가 존재하면 패스워드 검증
        if( pwList[ index ] == pw ){
            alert(' 로그인 성공 ');
        }else{
            alert(' 패스워드가 다릅니다. ');
        }
    }else{
        alert('없는 아이디입니다. ');
    }
}
*/

// 2. 함수 구성
function signup(){ console.log( 'signup()');
    // 2-1
    let id = document.querySelector('#signupId').value; console.log( 'signupId');
    let pw = document.querySelector('#signupPw').value; console.log( 'signupPw');
    // 2-2

    // 2-3 입력받은 데이터를 각 배열에 저장한다.
    idList.push( id );
    pwList.push( pw );
    // 3-4 안내메시지
    alert('회원가입성공');
}
// 2. 함수 구성
function login(){
    // 2-1
    let id = document.querySelector('#loginId').value;
    let pw = document.querySelector('#loginPw').value;
    // 2-2

    // 3-3 비교
        // 3-1 아이디가 기존 배열 내 존재하는지
    let index = idList.indexOf( id );
    if( index != -1 ){
        // 3-2 아이디가 존재하면 패스워드 검증
        if( pwList[ index ] == pw ){
            alert(' 로그인 성공 ');
        }else{
            alert(' 패스워드가 다릅니다. ');
        }
    }else{
        alert('없는 아이디입니다. ');
    }
}
