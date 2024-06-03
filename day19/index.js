
// 1. 로그인 상태에 따라 헤더메뉴를 구성하기 : 실행조건 1. js 열렸을때
loginState();
function loginState(){

  // 1. 세션저장소에 저장된 로그인 회원번호/식별자 호출
  let loginNo = sessionStorage.getItem('loginNo');
    // 만약에 로그인 회원번호가 존재하지 않으면 0  
  if( loginNo == null ){ loginNo = 0 }

  // 2. 만약에 로그인 회원번호가 있으면
    // 1. 어디에
    let nav = document.querySelector('.navbar-nav');
    let html =``;

  if( loginNo != 0 ){
    // 2. 무엇을
    html += `
            <li class="nav-item"> <a class="nav-link" href="info.html">내정보</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" onclick="logout()">로그아웃</a> </li>
            `;
  }else{  // 만약에 로그인 회원번호가 존재하지 않으면 (비로그인상태)
    html +=`
            <li class="nav-item"> <a class="nav-link" href="signup.html">회원가입</a> </li>
            <li class="nav-item"> <a class="nav-link" href="login.html">로그인</a> </li>
            `;
  }
    // 3. 출력
    nav.innerHTML += html;
}
// 2. 로그아웃 함수 : 실행조건 1. 로그아웃 버튼을 클릭했을 때
function logout(){    console.log('logout()');
  // 1. 세션저장의 로그인회원 정보 제거하기
  sessionStorage.removeItem('loginNo');   // sessionStorage.removeItem('key') : 해당 key의 값을 제거
  // 2. 안내 후 메인페이지로 이동
  alert('로그아웃되었습니다.'); location.href="index.html";
}