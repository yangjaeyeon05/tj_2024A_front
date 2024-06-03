let boardList = [];

allRead();

function allRead(){   console.log('allRead()');

  boardList = JSON.parse(localStorage.getItem('boardList'));
  if( boardList == null ){ boardList = []; }        console.log( boardList);

  let board = document.querySelector('#board');
  
  let html = ``;                console.log(html);

  for(let i = 0 ; i < boardList.length ; i++ ){

    html += `<tr>
            <td>${boardList[i].no}</td><td>${boardList[i].title}</td>
            <td>${boardList[i].writer}</td><td>${boardList[i].date}</td>
            <td>${boardList[i].view}</td>
            </tr>`;             console.log(html);
  }

  board.innerHTML = html;

  localStorage.setItem( 'boardList' , JSON.stringify(boardList))
}
function writing(){
  location.href="write.html"
}
