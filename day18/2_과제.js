let 부서목록 = [
  { 부서코드 : 1 , 부서명 : '인사팀' , 대표연락처 : '032-555-5555' },
  { 부서코드 : 2 , 부서명 : '마케팅팀' , 대표연락처 : '032-123-4568' },
]

function 부서등록(){ console.log( '부서등록()' );

  let departmentName  = document.querySelector('#departmentName').value;  console.log( departmentName );
  let departmentNum  = document.querySelector('#departmentNum').value;  console.log( departmentNum );
  
  let departmentCode = 부서목록.length != 0 ? 부서목록[부서목록.length-1].부서코드+1 : 1;   console.log( departmentCode );
  let newDe = { 부서코드 : departmentCode , 부서명 : departmentName , 대표연락처 : departmentNum }
  
  부서목록.push(newDe);   console.log( 부서목록 );

  부서목록출력();

  document.querySelector('#departmentName').value = '';
  document.querySelector('#departmentNum').value = '';
  
}
부서목록출력();
function 부서목록출력(){  console.log('부서목록출력()');
  // 어디에
  let 부서목록출력구역 = document.querySelector('#부서목록출력구역');
  // 무엇을
  let html = ``;
  for( let i = 0 ; i < 부서목록.length ; i++ ){
    html += `<tr> 
              <td> ${부서목록[i].부서코드} </td> 
              <td> ${부서목록[i].부서명} </td> 
              <td> ${부서목록[i].대표연락처} </td>
              </tr>`;
  }
  // 출력
  부서목록출력구역.innerHTML = html;
}

/*
function 부서목록호출(){
  부서목록 = JSON.parse(localStorage.getItem( '부서목록' ) );
  if(부서목록 == null){부서목록 = [];}
}
function 부서목록저장(){
  localStorage.setItem( '부서목록' , JSON.stringify(부서목록) );
}
*/
  
    