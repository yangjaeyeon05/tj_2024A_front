let productList = [];      console.log(productList);

let date = new Date();                console.log(date);
let year = date.getFullYear();        console.log(year);
let month = date.getMonth()+1;        console.log(month);
let currentDate = date.getDate();     console.log(currentDate);
let hour = date.getHours();            console.log(hour);
let minute = date.getMinutes();         console.log(minute);

let autoNum = 0;

function _add(){
    let prorductName = document.querySelector('#prorductName').value;       console.log(prorductName);
    let prorductPrice = document.querySelector('#prorductPrice').value*1;     console.log(prorductPrice);
    let newPrice = prorductPrice.toLocaleString();

    let newProduct = { 제품명 : prorductName , 가격 : newPrice };
    console.log(newProduct);

    // 현재 기존에 localStorage 있는 데이터 가져오기
    console.log( localStorage.getItem('productList') );  // 없으면 : null 있으면 [ ] 
    let productList = JSON.parse( localStorage.getItem('productList') );
     
    // 만약에 기존에 localStorage 가 없으면 빈배열 대입해준다.
    if( productList == null ){ productList = []; }

    productList.push(newProduct);       console.log(productList);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem( 'productList' , JSON.stringify( productList ) );

    document.querySelector('#prorductName').value = '';
    document.querySelector('#prorductPrice').value = '';
}

function _print(){
    // 어디에
    let order = document.querySelector('#order');
    // 무엇을
    let productList = JSON.parse( localStorage.getItem('productList') ); console.log(productList);
    if( productList == null )return;
    
    autoNum++;

    let html = ``;

    for(let i = 0 ; i < productList.length ; i++){
        html += `<tr>
                    <th scope="row">${i+1}</th>
                    <td>${productList[i].제품명}</td>
                    <td>${productList[i].가격}</td>
                    <td>${year}-${month}-${currentDate} ${hour}:${minute}</td>
                </tr>`;
    }
    // 출력
    order.innerHTML = html;
}
