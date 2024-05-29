/*
과제1 : 회원가입과 로그인 구현
[요구사항]
1. 아이디와 비밀번호를 입력받아 회원가입 처리 해주세요.
2. 아이디와 비밀번호가 기존 데이터와 일치했을 때 로그인 성공 아니면 실패 해주세요.
*/

let signupList = [
    { id : '양재연' , password : '1234' } , 
    { id : '윤성현' , password : '4567' } ,
];

// 아이디와 비밀번호를 입력받아 회원가입 처리 해주세요.
function signup(){ 
    let signupId = document.querySelector('#signupId').value;       console.log(signupId);
    let signupPw = document.querySelector('#signupPw').value;       console.log(signupPw);

    let newSignup = { id : `${signupId}` , password : `${signupPw}` };
    signupList.push(newSignup);                                     console.log(signupList);

    alert('회원가입성공!');
}

// 아이디와 비밀번호가 기존 데이터와 일치했을 때 로그인 성공 아니면 실패 해주세요.
function login(){
    let loginId = document.querySelector('#loginId').value;
    let loginPw = document.querySelector('#loginPw').value;
       console.log(loginId);        console.log(loginPw);
    for( i = 0 ; i < signupList.length ; i++ ){
        if( loginId == signupList[i].id ){
            if( loginPw == signupList[i].password ){
                alert('로그인성공!');  return;
            }else{
                 alert('패스워드가 다릅니다.'); return;
            }
        }
    }alert('없는 아이디입니다.');
}
// if문의 순서가 중요!!!!!!