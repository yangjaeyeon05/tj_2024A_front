/*

  - 회원가입 페이지
    1. 회원정보 : 1. 회원번호 2. 아이디 3. 비밀번호 4. 이름 5. 연락처
    2. 입력사항 : 1. 아이디 2. 비밀번호 3. 비밀번호 확인 , 이름 , 연락처
    3. 유효성검사 : 
      1. 아이디와 비밀번호는 5글자 이상만 가능
      2. 이름은 3글자 이상만 가능
      3. 연락처는 - 제외한 8자리 이상만 가능
      4. 비밀번호와 비밀번호 확인 일치했을 때만 가능
      5. 아이디와 연락처는 중복 제외
    
    * 회원번호는 자동 부여됩니다.
    * 회원목록은 localStarage 에 저장할것
    
 */

// 1. 회원가입 함수 : 회원가입 버튼을 클릭할 때
let memberList = [];

function signup(){                                                console.log('signup()');

    // * localStrage 호출
    memberList = JSON.parse( localStorage.getItem( 'memberList' ) );
    if( memberList == null ){ memberList = []; }

  // 1. HTML에서 입력받은 데이터 가져와서
  let id = document.querySelector('#id').value;                   console.log(id);
  let pw = document.querySelector('#pw').value;                   console.log(pw);
  let pwConfirm = document.querySelector('#pwConfirm').value;     console.log(pwConfirm);
  let name = document.querySelector('#name').value;               console.log(name);
  let phone = document.querySelector('#phone').value;             console.log(phone);

    // 2. 유효성검사
      // 1. 아이디와 비밀번호는 5글자 이상만 가능
    if( id.length < 5 ){alert('회원가입실패: 아이디는 5글자 이상 입력해주세요.'); return;}
    if( pw.length < 5 ){alert('회원가입실패: 비밀번호는 5글자 이상 입력해주세요.'); return;}
      // 2. 이름은 3글자 이상만 가능
    if( name.length < 3 ){alert('회원가입실패: 이름은 3글자 이상 입력해주세요.'); return;}
      // 3. 연락처는 - 제외한 8자리 이상만 가능
    if( phone.length < 8 || isNaN( phone ) ){alert('회원가입실패: 연락처는 - 제외한 8글자 이상 입력해주세요.'); return;}
      // 4. 비밀번호와 비밀번호 확인 일치했을 때만 가능
    if( pw != pwConfirm ){alert('회원가입실패 : 두 비밀번호가 맞지 않습니다.'); return;}
      // 5. 아이디와 연락처는 중복 제외
      // 아이디중복검사 : 회원목록내 i번째 회원 아이디와 입력받은 아이디가 같으면
    for( let i = 0 ; i < memberList.length ; i++ ){
      if( id == memberList[i].id ){ alert('회원가입실패 : 사용 중인 아이디입니다.'); return; }
    }
    for( let i = 0 ; i < memberList.length ; i++ ){
      if( phone == memberList[i].phone ){ alert('회원가입실패 : 사용 중인 연락처입니다.'); return; }
    }

  // 3. 데이터가공
    // 만약에 회원목록에 회원이 없으면 1 있으면 마지막 회원의 번호 +1
  let no = memberList.length == 0 ? 1 : memberList[memberList.length-1].no+1
    // 객체화
  let member = { no : no , id : id , pw : pw , name : name , phone : phone };    console.log(member);

  // 4. 저장
  memberList.push(member);      console.log(memberList);

    // * localStrage 자징
    localStorage.setItem( 'memberList' , JSON.stringify(memberList) );

  // 5. 결과 안내 후 페이지 전환 ,  location.href="이동할경로"
  alert('회원가입성공');  location.href='login.html';
}




