let boardList = [                                   // sample
    "제목입니다, 내용입니다,1234,2024-05-24,3" , 
    "두번째입니다, 또 내용입니다,4567,2024-05-25,0" 
]

// 1. 등록실행조건 : 버튼 클릭했을 때
function _create(){
    // 1-1
    let title = document.querySelector('#titleInput').value;
    let content = document.querySelector('#contentInput').value;
    let password = document.querySelector('#passwordInput').value;
    // 2-1 입력받지 않은 데이터를 초기화
    let date = new Date();  // new Date() : 현재 날짜를 반환해주는 클래스;
        console.log( date );
        console.log( date.getFullYear() );  // 연도만 추출                          2024
        console.log( date.getMonth() );     // 월만 추출    (1월: 0 , 12월: 11)     4[5월]
        console.log( date.getDate() );      // 일만 추출                            24

        console.log( date.getHours() );     // 시만 추출                            11
        console.log( date.getMinutes() );   // 분만 추출                            18
        console.log( date.getSeconds() );   // 초만 추출                            52 
    // 원하는 날짜 추출해서 가공
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
    let currentDay = date.getDate() < 10 ? "0"+(date.getDate()) : date.getDate();

    date = `${currentYear}-${currentMonth}-${currentDay}`          // 날짜 구성

    let view = 0;   // 처음 등록 시 조회수는 0부터 시작
    // 3 ,쉼표 구분해서 하나의 문자열로 만들자.
    let board =`${title},${content},${password},${date},${view}`;   console.log( board );
    // 4 배열 등록
    boardList.push( board );    console.log( boardList );
    // 5 등록 성공
    alert('등록성공');  
    _allRead();     // 등록 성공시 전체 출력 함수 호출
}

// 2. 전체출력 실행조건 : 1. 페이지가 열렸을 때(HTML실행->JS싱행) 2. 데이터가 변화(수정/삭제/등록)가 있을 때
_allRead(); //  js에서 해당 함수 1번 실행
function _allRead(){
    // 1. 어디에
    let tableBody = document.querySelector('#tableBody');

    // 2. 무엇을
    let html = ' ';

    for( let i = 0 ; i < boardList.length ; i++ ){    // 배열 순회 : 0번 인덱스부터
        // i 번째 게시물 반환
        let board = boardList[i];   console.log( board );
        // 게시물의 정보 분류 : 특정 문자 기준으로 분류 .split( 기준문자 ) : 기준문자 기준으로 자른 후 배열 반환
        let boardArray = board.split(',');      console.log(boardArray);
        // 쉼표 기준으로 각 분류된 배열의 정보
        console.log(boardArray[0]);     console.log(boardArray[3]);     console.log(boardArray[4]);
        // 각 정보를 HTML 문자열로 구성
        html +=`<tr> 
                <td> ${i} </td> 
                <td onclick="_read(${i})"> ${boardArray[0]} </td> 
                <td> ${boardArray[3]} </td> 
                <td> ${boardArray[4]} </td>
                </tr>`   
    }
    // 3. 출력/대입
    tableBody.innerHTML = html;
}

// 3. 개별출력 실행조건 : 1. 제목 클릭헸을 때
function _read(index){
    // 선택/클릭 했을 때 클릭된 해당 인덱스를 매개변수를 받아서
    let boardArray = boardList[index].split(',');   // 해당 인덱스의 게시물 정보를 ,쉼표 기준으로 분류된 배열 반환
    // 1. 어디에
    let viewPage = document.querySelector('#viewPage');

    // 2. 무엇을
    let html = `<h3> 상세 페이지 </h3>
                <div> ${boardArray[0]} </div>
                <div> 
                    <span> 조회수 : ${boardArray[4]} </span>
                    <span> 작성일 : ${boardArray[3]} </span>
                </div>
                <div> ${boardArray[1]} </div>
                <button onclick="_update(${index})"> 수정 </button>
                <button onclick="_delete(${index})"> 삭제 </button>`;

    // 3. 출력/대입
    viewPage.innerHTML = html;
}

// 4. 수정함수 실행조건 : (누구를=인덱스)1. 수정버튼 클릭할때
function _update(index){
    if( _pwConfirm(index) == false ) return;

    // 배열내 특정 데이터 수정
    // 1. 해당 게시물 분류
    let board = boardList[index].split(',');
    // 새로운 제목과 내용 입력 받는다.
    let utitle = prompt('수정할제목');
    let ucontent = prompt('수정할내용');
    // 수정된 정보 구성 : 새로운 제목과 내용만 수정변수로 구성하고 나머지는 기존 데이터 사용
    let uboard = `${utitle},${ucontent},${board[2]},${board[3]},${board[4]}`;
    //
    boardList[index] = uboard;
    _allRead();
    _read(index);
}   // for end

// 5. 삭제함수 실행조건 : (누구를)1. 삭제버튼 클릭할때
function _delete(index){
    if( _pwConfirm(index) == false ) return;

    // 배열내 특정 인덱스 삭제
    boardList.splice( index , 1 );
    // 화면 새로고침(재출력; 데이터 변화가 있기 때문에)
    _allRead();
    document.querySelector('#viewPage').innerHTML = ``;
}

// 6. 패스워드 체크 함수
function _pwConfirm(index){
     // - 패스워드 검증
    // 1. 검증받을 패스워드 입력받는다.
    let confirmPw = prompt('비밀번호');
    // 2. 해당 인덱스의 비밀번호와 입력받은 비밀번호가 다르면 함수를 중간에 종료한다.
    if( confirmPw != boardList[index].split(',')[2]){
        alert('패스워드가 다릅니다.');
        return false; // 함수 종료 , 이하 아래 코드는 실행이 안됨.
    }
    return true;    // 패스워드 일치 뜻
}