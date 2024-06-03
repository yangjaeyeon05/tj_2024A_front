/*

  1. 아이디찾기
    - 이름과 전화번호를 입력받아 일치한 정보 찾기
    - 찾은 아이디를 특정 div에 출력하시오.
  2. 비밀번호 찾기
    - 아이디와 연락처를 입력받아 일치한 정보 찾기
    - 찾은 비밀번호를 특정 div에 출력하시오.

*/
let memberList = [];

function findId(){ console.log('findId()');

  memberList = JSON.parse(localStorage.getItem('memberList'));
  if( memberList == null ){ memberList = [] };    console.log(memberList);

  let name = document.querySelector('#name').value;     console.log(name);
  let phone = document.querySelector('#phone').value;   console.log(phone);

  let findId = document.querySelector('#findId');
  
  let html = ``;

  for( let i = 0 ; i < memberList.length ; i++ ){
    if( memberList[i].name == name && memberList[i].phone == phone ){
      html += `${memberList[i].id}`
      findId.innerHTML = html;
      alert('아이디 찾기 성공');
      return;
    }
  }alert('일치하는 정보가 없습니다.');
}

function findPw(){ console.log('findPw()');

  memberList = JSON.parse(localStorage.getItem('memberList'));
  if( memberList == null ){ memberList = [] };    console.log(memberList);

  let id = document.querySelector('#id').value;     console.log(id);
  let phoneBox = document.querySelector('#phoneBox').value;   console.log(phoneBox);

  let findPw = document.querySelector('#findPw');
  
  let html = ``;

  for( let i = 0 ; i < memberList.length ; i++ ){
    if( memberList[i].id == id && memberList[i].phone == phoneBox ){
      html += `${memberList[i].pw}`;
      findPw.innerHTML = html;
      alert('비밀번호 찾기 성공');
      return;
    }
  }alert('일치하는 정보가 없습니다.');
}

// meeberList 함수 내에 호출 해야함. info.js의 경우는 열렸을 때 한번 함수가 실행이 되기 때문에 같이 실행 가능
// 하지만 해당 js 함수들은 둘 중에 하나만 실행이 될 수 있기 때문에 함수 내 호출 해야함!
