let productList = [];      console.log(productList);

let autoNum = 0;

function _add(){
    let prorductName = document.querySelector('#prorductName').value;       console.log(prorductName);
    let prorductPrice = document.querySelector('#prorductPrice').value*1;     console.log(prorductPrice);
    let newPrice = prorductPrice.toLocaleString();
    autoNum += 1;

    let newProduct = { 제품번호 : autoNum , 제품명 : prorductName , 가격 : newPrice };
    console.log(newProduct);

    // 현재 기존에 localStorage 있는 데이터 가져오기
    console.log( localStorage.getItem('productList') );  // 없으면 : null 있으면 [ ] 
    productList = JSON.parse( localStorage.getItem('productList') );
     
    // 만약에 기존에 localStorage 가 없으면 빈배열 대입해준다.
    if( productList == null ){ productList = []; }

    productList.push(newProduct);       console.log(productList);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem( 'productList' , JSON.stringify( productList ) );

    document.querySelector('#prorductName').value = '';
    document.querySelector('#prorductPrice').value = '';
}
function _start(){ console.log('start()')
    timerId = setInterval( _print , 3000 );
}
function _print(){
    /*
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let Date = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    */

    // 어디에
    let order = document.querySelector('#order');
    // 무엇을
    productList = JSON.parse( localStorage.getItem('productList') );
    if( productList == null ){ productList = []; }
    
    let html = ``;
    
    for(let i = 0 ; i < productList.length ; i++){
        html += `<tr>
                    <th scope="row">${autoNum}</th>
                    <td>${productList[i].prorductName}</td>
                    <td>${productList[i].newPrice}</td>
                    <td></td>
                </tr>`;
    }
    // 출력
    order.innerHTML = html;
}
