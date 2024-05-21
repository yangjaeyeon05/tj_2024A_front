
/* 
    복습예제1 : 주차장 차량 검색대 
        조건1 : let carArray = [ '250어7142' , '142가7415' ]        :차량번호
        조건2 : let localtionArray = [ 'A1' , 'B3' ]                :주차위치
        조건3 : carArray, localtionArray 인덱스가 같은 정보의 차량
        조건4 : 차량번호 입력받아 내 차량 위치 찾기
            JS문법
                - 1. prompt( ) , console.log( )
                - 2. 변수란?
                - 3. 배열내 데이터를 찾기
                    indexOf( ) , includes( )
                - 4. if
*/
/*
let carArray = [ '250어7142' , '142가7415' ];
let localtionArray = [ 'A1' , 'B3' ]; 

let carNum = prompt( '차량번호' );          // 1. 차량번호 입력받아 변수에 저장

let carIndex = carArray.indexOf( carNum ); // 2. 입력받은 차량번호의 배열내 인덱스 찾기
console.log( carIndex );

// 3. 논리조건
if( carIndex == -1 ){           // 3-1. 만약에 carIndex가 -1이면
    console.log( ' 입력한 차량번호는 주차내역에 없습니다. ');   // 메시지
}     
else{   // 3-2. 아니면
    let carLocation = localtionArray[carIndex];     // 찾은 인덱스 위치
    console.log( ` 입력한 차량번호의 주차 위치 : ${carLocation}` ); 
}
*/

/*
    - 복습예제2 : 틱택토/삼목게임 , 9판 존재하는 연속된 3칸 만들면 승리
        - 설계 
            판넬 개수 : 9칸 판넬 필요 , 9칸 배열 생성
            판넬 상태 : B(비어있는) O(플레이어1) X(플레이어2)
        - 승리 체크 
            (연속된 판넬이 3개의 모양이 같을 경우 , B제외 )
            가로로 이기는 수        : [0]==[1]==[2] , [3]==[4]==[5] , [6]==[7]==[8]
            세로로 이기는 수        : [0]==[3]==[6] , [1]==[4]==[7] , [2]==[5]==[8]
            대각선으로 이기는 수     : [0]==[4]==[8] , [2]==[4]==[6] 

*/

// 1. 9칸 배열
let gamePane = [ 'B' , 'B' , 'B' , 'B' , 'B' , 'B' , 'B' , 'B' , 'B' ];
// 2. 9킨 베열 출력
let html = `
            ${ gamePane[0] } ${ gamePane[1] } ${ gamePane[2] } <br/>
            ${ gamePane[3] } ${ gamePane[4] } ${ gamePane[5] } <br/>
            ${ gamePane[6] } ${ gamePane[7] } ${ gamePane[8] }       
            `
// 3. 구성된 html 출력
document.querySelector('#gamePane').innerHTML = html; 

// --- 1. p1 입력받고 2. 승리체크 3. p2 입력받고 4. 승리체크 이후 반복(무승부까지)
if( gamePane[0] == gamePane[1] && gamePane[1] == gamePane[2] ){ }
if( gamePane[3] == gamePane[4] && gamePane[4] == gamePane[5] ){ }
if( gamePane[6] == gamePane[7] && gamePane[7] == gamePane[8] ){ }

if( gamePane[0] == gamePane[3] && gamePane[3] == gamePane[6] ){ }
if( gamePane[1] == gamePane[4] && gamePane[4] == gamePane[7] ){ }
if( gamePane[2] == gamePane[5] && gamePane[5] == gamePane[8] ){ }

if( gamePane[0] == gamePane[4] && gamePane[4] == gamePane[8] ){ }
if( gamePane[2] == gamePane[4] && gamePane[4] == gamePane[6] ){ }

if( gamePane.indexOf('B') == -1){ }

for(let i=0; i<=2; i+=3){                                               // 가로 승리 조건
    if(gamePane[i]!='B' && gamePane[i+1]!='B' && gamePane[i+2]!='B'){   
    if(gamePane[i]==gamePane[i+1] && gamePane[i+1]==gamePane[i+2]){}
    }
}
for(let i=0; i<=2; i++){                                                // 세로 승리 조건
    if(gamePane[i]==gamePane[i+3] && gamePane[i+3]==gamePane[i+6]){}
}                                                                     
if(gamePane[0]==gamePane[4] && gamePane[4]==gamePane[8]){}              // 대각선 승리 조건
if(gamePane[2]==gamePane[4] && gamePane[4]==gamePane[6]){}

if(gamePane.indexOf('B')==-1){}                                         // 무승부