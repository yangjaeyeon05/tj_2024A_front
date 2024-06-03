/*
  1. 만일 비로그인 상태이면 글쓰기 페이지 접근 제한하고 안내 후 login.html로 이동
  2. 만일 로그인 상태이면 '제목'과 '내용'입력받아 글쓰기 처리

*/
loginState();
let loginNo = '';
function loginState(){ console.log('loginState()');

  // 1. 세션저장소에 저장된 로그인 회원번호/식별자 호출
  loginNo = sessionStorage.getItem('loginNo');
    // 만약에 로그인 회원번호가 존재하지 않으면 0  
  if( loginNo == null ){ loginNo = 0 }

  if( loginNo == 0){
    alert('로그인 후 이용해주세요.');
    location.href="login.html";
  }
}

function add(){   console.log('add()');

  boardList = JSON.parse(localStorage.getItem('boardList'));
  if( boardList == null ){ boardList = []; }        console.log( boardList);

  let title = document.querySelector('#title').value;   console.log(title);
  let content = document.querySelector('#content').value;   console.log(content);

  let no = boardList.length != 0 ? boardList[boardList.length-1].no+1 : 1;    console.log(no);

  
  let board = { no : no, title : title , writer : 1 , content : content , date : 1, view : 1}
  
}