/*

  로그인 페이지
    1. 아이디와 비밀번호 입력받아 기존 회원 목록에 일치한 정보 찾기
    2. 로그인 성공 시
      0. 결과 안내
      1. 세션저장소 로그인 성공 여부(회원번호) 저장하기
      2. 메인(index.html)로 이동하기
    3. 로그인 실패 시 
      0. 결과 안내

  * 단 ) 회원목록은 localStorage 사용할 것
  * 로그인 성공 여부는 sessionStorage에 저장
*/

let memberList = [];

function login(){         console.log('login()');

  // * 
  memberList = JSON.parse( localStorage.getItem( 'memberList' ) );
  if( memberList == null ){ memberList = []; }

  // 1. HTML 에서 입력받은 데이터 가져온다.
  let loginId = document.querySelector('#loginId').value;       console.log( loginId );
  let loginPw = document.querySelector('#loginPw').value;       console.log( loginPw );

  // 2. 기존 회원 목록에 있는 회원정보과 입력받은 데이터 일치 여부
  for( let i = 0 ; i < memberList.length ; i++ ){
    let member = memberList[i];
    if( member.id == loginId && member.pw == loginPw ){ 
      alert('로그인성공'); 
      // * 만약에 로그인 성공 시 sessionStorage 부여
      sessionStorage.setItem('loginNo' , member.no );
      
      // JS에서 페이지 전환해주는 속성
      location.href='index.html' 
      return;
    }
  }
  alert('로그인실패');
}
