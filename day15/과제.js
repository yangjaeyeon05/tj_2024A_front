/*
    실습과제 : 키오스크
        실행순서 : 1. 카테고리 -> 2. 제품 -> 3. 장바구니 -> 4. 주문
        1. 카테고리     : 카테고리명 
        2. 제품         : 제품명 , 가격
        3. 장바구니     : 사이즈(M,L)
    =============================================================================
        1. 위와 필수 속성을 이용한 메모리 설계하고 샘플 배열당 3~4개 객체
        2. 구현
            1. 카테고리를 모두 출력된 상태에서
            2. 특정 카테고리를 클릭하면 해당 카테고리의 제품 모두 출력한다.
            3. 해당 제품명을 클릭하면 prompt()로 사이즈 받고 장바구니에 담는다.
            4. 장바구니 현황을 출력한다. 

        + 관리자 입장에서 카테고리 등록 , 제품 등록 기능 추가

*/
let 카테고리목록 =[ { cno : 1 , cname : '커피' },{ cno : 2 , cname : '티' },{ cno : 3 , cname : '에이드' },{ cno : 4 , cname : '스무디' }];
let 제품목록 = [
    { pno : 1 , pname : '할메가커피' , pprice : '2600원' , cno : 1 } , 
    { pno : 2 , pname : '왕할메가커피' , pprice : '3600원' , cno : 1 } , 
    { pno : 3 , pname : '(ICE)메가리카노' , pprice : '3700원' , cno : 1 } , 
    { pno : 4 , pname : '(HOT)아메리카노' , pprice : '2000원' , cno : 1 } , 
    { pno : 5 , pname : '복숭아아이스티' , pprice : '3700원' , cno : 2 } ,
    { pno : 6 , pname : '(HOT)사과유자차' , pprice : '4200원' , cno : 2 } ,
    { pno : 7 , pname : '(ICE)사과유자차' , pprice : '4200원' , cno : 2 } ,
    { pno : 8 , pname : '레드오렌지자몽주스' , pprice : '4700원' , cno : 3 } ,
    { pno : 9 , pname : '샤인머스캣그린주스' , pprice : '4700원' , cno : 3 } ,
    { pno : 10 , pname : '체리콕' , pprice : '4000원' , cno : 3 } ,
    { pno : 11 , pname : '플레인요거트스무디' , pprice : '4600원' , cno : 4 } ,
    { pno : 12 , pname : '망고요거트스무디' , pprice : '4600원' , cno : 4 } ,
    { pno : 13 , pname : '딸기요거트스무디' , pprice : '4600원' , cno : 4 } ,
];

let 장바구니 = [
    { pno : 1 , size : 'M' } ,
    { pno : 8 , size : 'L' }
];

// 카테고리 출력
cPrint();
function cPrint(){
    // 어디에
    let category = document.querySelector('#category');
    // 무엇을 
    let html = ``;
    for( let i = 0 ; i < 카테고리목록.length ; i++){
        html += `<div onclick="pPrint(${카테고리목록[i].cno})">${카테고리목록[i].cname}</div>`;      
    }
    // 출력
    category.innerHTML = html;
}
// 특정 카테고리를 클릭하면 해당 카테고리의 제품 모두 출력한다.
function pPrint(clickCno){
    // 어디에
    let productList = document.querySelector('#productList');
    let html = ``;
    // 무엇을
    for(let i = 0 ; i < 제품목록.length ; i++){
        if( clickCno == 제품목록[i].cno){
            html += ` <div onclick=" addSize(${제품목록[i].pno})">${제품목록[i].pname}</div>
                    <div>${제품목록[i].pprice}</div>
            `;
        }
    }
    // 출력
    productList.innerHTML = html;
}
// 해당 제품명을 클릭하면 prompt()로 사이즈 받고 장바구니 배열에 저장한다.(담는다)
function addSize(clickPno){ // 제품목록 클릭한 넘버를 가져온다
    // 사이즈를 저장한다.
    let addSize = prompt('사이즈 M or L');    
    // 가져온 제품목록 넘버와 입력받은 사이즈를 하나의 객체로 만든다.
    let addCart = { pno : clickPno , size : addSize };      console.log( addCart );
    // 만든 객체를 장바구니 배열에 저장한다.
    장바구니.push(addCart);                                 console.log( 장바구니 );
    cartPrint();
}
// 장바구니 현황을 출력한다. 
function cartPrint(){
    // 어디에
    let cartList = document.querySelector('#cartList');
    // 무엇을
    let html = ``;
    for(let i = 0 ; i < 장바구니.length ; i++){
        for(let j = 0 ; j < 제품목록.length ; j++){
            if(장바구니[i].pno == 제품목록[j].pno){
                html += `<div>                       
                        ${제품목록[j].pname}
                        ${장바구니[i].size}
                        ${제품목록[j].pprice}
                        </div>`;
            }
        }
    }
    // 출력
    cartList.innerHTML = html;
}
cartPrint();
// +관리자 입장에서 카테고리 등록 , 제품 등록 기능 추가
let autoNum = 4;

function addCategory(){
    let addCategory = document.querySelector('#addCategory').value;     console.log( addCategory );
    let autoNum = 4;
    autoNum += 1;
    let newCategory = { cno : autoNum , cname : addCategory };     
    카테고리목록.push(newCategory);          console.log( 카테고리목록 );
    cPrint();
}
function addProduct(){
    let addProduct = document.querySelector('#addProduct').value;
    let autoNum = 13;
    autoNum += 1;
    let newPprice = prompt('가격책정');
    let newCno = prompt('카테고리 번호입력')*1;
    let newProduct  = { pno : autoNum , pname : addProduct , pprice : newPprice , cno : newCno };       console.log(newProduct);
    제품목록.push(newProduct);              console.log( 제품목록 );
}
