/*
    실습2 : 웹 가계부 만들기
        [요구사항]
        1. 항목마다 날짜 , 항목명 , 금액 3가지를 저장해주세요.
        2. 등록된 금액의 총합계를 하단에 출력해주세요.
        3. 출력은 <table> 사용해주세요. 

            + 추가 요구사항
            1. 테이블에 항목 내역을 아래와 같이 출력해주세요.
            날짜        항목        금액
            2024-05-23  콜라       1000
            2024-05-24  커피       2500

            2. 전체 내역에서 특정 항목 삭제하는 버튼 기능 구현해주세요.

            3. 금액의 천단위마다 , 처리해주세요.
                toLocaleString()
                변수명.toLocaleString()

         [ 백엔드 ]
            1. 메모리 구성 : (성연) 배열 3개 
            let dateList = [ ]
            let nameList = [ ] 
            let moneyList = [ ]

            2. 기능 구성 : (재명) 2개 
            add(){ } 1. 입력/저장 함수 
            total(){ } 2. 총합계 함수 

            3. 기능 구현 (희진)
            1. 입력/저장 함수 
                [ 로직 순서 ] 1.입력받고 2.배열저장 3. 안내 
            2. 총합계 함수
                [ 로직 순서 ] 1.배열에 있는걸 가져와서 다 더해준다. 2.총합계 보여준다.

            [ 프론트엔드 ]
            0. 스케치/프로토타입 
            1. HTML 구성 (세빈)
            <input /> 3개 
            <button /> 1개
            <table> 1개

            2. HTML 구현 

            [백엔드/프론트엔드 연동 ]
            1. 선택자 
            2. onclick

            add() : 버튼 클릭시 
            total() : 등록처리 되었을때.

            [ 유지보수 ]
            1. 합계를 했더니 더하기 가 아니고 연결이 됨.
            - 해결책 : money -> Number( money )
*/

let dateList = [];
let nameList = [];
let moneyList =  [];

function add(){
    let dateInput = document.querySelector('#dateInput');
    let nameInput = document.querySelector('#nameInput');
    let moneyInput = document.querySelector('#moneyInput');

    let date = dateInput.value;
    let name = nameInput.value;
    let money = Number(moneyInput.value);

    dateList.push( date );
    nameList.push( name );
    moneyList.push( Number(money ));

    alert('항목저장성공');
    // total();
    print();
}

function total(){
    let sum = 0;
    for( let i = 0 ; i < moneyList.length ; i++ ){
        sum += moneyList[i];
    }
    // 호출헸던 곳으로 데이터 보내주기 = 반환
    return sum;
}

function print(){
    // HTML 출력
        // 1. 어디에
    let moneyTable = document.querySelector('#moneyTable');
        // 2. 무엇을
    let html = '';
    // 1. 테이블 제목부분
    html+=`<tr>
            <th> 날짜 </th>
            <th> 항목 </th>
            <th> 금액 </th>
            <th> 비고 </th>
        </tr>`
    // 2. 테이블의 내용 부분 : 항목 내역들 = 배열내 전체 = 반복문
    for( let i=0 ; i < moneyList.length ; i++ ){
        // 각 i번째 인덱스의 항목 정보를 각 호출
        let currentMoney = moneyList[i];
        let currentName = nameList[i];
        let currentDate = dateList[i];

        html+=`<tr>
                    <td> ${currentDate} </td>
                    <td> ${currentName} </td>
                    <td> ${currentMoney.toLocaleString()} </td>
                    <td> <button> 삭제 </button> </td>
              </tr>`
    }       console.log('html');
    // 3. 하단 부분 : 총합계
    html+=`<tr>
            <td colspan="2"> 합계 </td>
            <td colspan="2"> ${total().toLocaleString()} </td>
            </tr>`

        // 3. 대입
    moneyTable.innerHTML = html;
}

// 삭제 : 인덱스를 이용한 삭제