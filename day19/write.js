/* 혼자 친 코드
loginState();

let loginNo = '';

function loginState(){    console.log('loginState()');

    // 1. 세션저장소에 저장된 로그인 회원번호/식별자 호출
  let loginNo = sessionStorage.getItem('loginNo');
    // 만약에 로그인 회원번호가 존재하지 않으면 0  
  if( loginNo == null ){ loginNo = 0 }

  if( loginNo == 0 ){
    alert('로그인 후 이용해주세요.');
    location.href="login.html";
  } 
}

function add(){   console.log('add()');


  memberList = JSON.parse(localStorage.getItem('memberList'));
  if( memberList == null ){ memberList = []; }        console.log( memberList);

  let no = boardList.length != 0 ? boardList[boardList.length-1].no+1 : 1;    console.log(no);
  let title = document.querySelector('#title').value;   console.log(title);
  let content = document.querySelector('#content').value;   console.log(content);
  let writer = '';                                          console.log(writer);

  console.log(memberList);     

  for( let i = 0 ; i < memberList.length ; i++ ){
    if( loginNo != memberList[i].no ){
      writer ='';
    }else{
      writer = memberList[i].id
    }    
  }   console.log(writer ); 

  let board = { no : no, title : title , writer : writer , content : content , date : 1, view : 1}
  console.log(board);

  boardList.push(board);          console.log(boardList);

  localStorage.setItem( 'boardList' , JSON.stringify(boardList) );

  alert('글등록완료');

}
*/
/*
  1. 만일 비로그인 상태이면 글쓰기 페이지 접근 제한하고 안내 후 login.html로 이동
  2. 만일 로그인 상태이면 '제목'과 '내용'입력받아 글쓰기 처리

  C : 회원가입          글쓰기                  제품등록      주문등록
    JS메모리 저장                   배열명.push()
    브라우저(크롬)메모리 저장       .setItem( 'key' , value );
  R : 로그인 , 내정보   전체글출력 , 개별글출력 제품출력       주문출력
    JS메모리 호출               전체호출 : for문  ,개별호출 : 배열명[]
    브라우저(크롬)메모리 호출   .getItem( 'key' );
  U : 회원수정          글수정                  제품수정      주문수정 
    JS메모리 수정   배열명[].속성명 = 새로운값
  D : 회원탈퇴          글삭제                  제품삭제      주문삭제
    JS메모리 삭제   배열명.splice( 인덱스 , 1 );
    브라우저(크롬)메모리 삭제   .remove( 'key' );
*/
// ------------로그인 상태 유효성 검사 -------------------------//
    // 1. 브라우저 세션에 저장된 로그인된 회원번호
  let loginNo = sessionStorage.getItem('loginNo');  console.log(loginNo);
    // 2. 없으면
  if( loginNo == null ){
    alert('로그인 후 글쓰기가 가능합니다.');
    location.href="login.html";
  }

let boardList = [];

function _write(){  console.log('_write()');

  // *
  boardList = JSON.parse(localStorage.getItem('boardList'));
  if( boardList == null ){ boardList = []; }

  // 1. HTML 입력된 데이터 가져오기
  let title = document.querySelector('#title').value;         console.log(title);
  let content = document.querySelector('#content').value;     console.log(content);
  // 2. 유효성검사
  // 3. 데이터 가공 (입력 외 추가정보 , 원하는 데이터형식 => 객체)
    // 작성자 (로그인된 회원 = seesionStorage에 회원번호)
  let writer = ``;  // 로그인된 회원의 아이디를 찾아서 넣을 변수 준비

  let memberList =  [];
  memberList = JSON.parse(localStorage.getItem('memberList'));
  if( memberList == null ){ memberList = [] };
  // 회원목록에서 로그인된 회원번호와 같은 객체 찾기
  for( let i = 0 ; i < memberList.length ; i++){
    if( memberList[i].no == loginNo ){
      writer = memberList[i].id;  // 찾은 객체의 아이디를 writer 변수에 대입
      break;  // for문 탈출
      // return; 함수탈출 // 현재 상황에서는 return 금지
    }
  }
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let currentDate = date.getDate();

  date = `${year}-${자릿수변환(month)}-${자릿수변환(currentDate)}`;

    // 게시물 객체
  let board ={
    no : boardList.length == 0 ? 1 : boardList[boardList.length-1].no +1 ,                // 게시물번호
    title : title ,         // 게시물제목
    content : content ,     // 게시물내용
    writer : writer ,   // 게시물작성자
    date :  date ,     // 게시물작성일
    view : 1                // 게시물조회수
  }                                                           
  // 4. 저장    
  boardList.push(board);                                      console.log(boardList);

  // *
  localStorage.setItem( 'boardList' , JSON.stringify(boardList));

  // 5. 안내 및 이후 처리
  alert('글쓰기 성공');
  location.href="board.html"; // JS에서 페이지 전환할 때 사용되는 속성

}
function 자릿수변환(변환할값){  
  // 만약에 월/일/시/분 (매개변수)가 10보다 작으면 앞에 '0' 연결하기
  if(변환할값 < 10){ 변환할값 = '0'+변환할값 } 
  // 반환
  return 변환할값;
}