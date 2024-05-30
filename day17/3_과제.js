let todoList = []
print();
function add(){
    let todoInput = document.querySelector('#todoInput').value;
    let newTodo = { 하고싶은일 : todoInput , 상태 : 'X' }

    // 현재 기존에 localStorage 있는 데이터 가져오기
    console.log( localStorage.getItem('todoList') ); // 없으면 null 있으면 [ ]
    todoList = JSON.parse(localStorage.getItem('todoList'));
    console.log(todoList);
    // 만약에 기존에 localStorage 가 없으면 빈배열 대입해준다.
    if(todoList == null){ todoList = []; }

    todoList.push(newTodo);                     console.log(todoList);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('todoList' , JSON.stringify( todoList ));

    alert('리스트저장성공!');
    print();
}
function print(){   // 등록하고 프린트, 원래 프린트!
    // 먼저 기존에 localStorage 있는 데이터 가져오기
    todoList = JSON.parse(localStorage.getItem('todoList'));
    if(todoList == null){ todoList = []; }       

    // 어디에
    let todoBox = document.querySelector('#todoBox');
    // 무엇을
    let html = ``;
    for( i = 0 ; i < todoList.length ; i++ ){
        if(todoList[i].상태 == 'X'){
            html +=`<div id="whiteBox">
                        <span> ${todoList[i].하고싶은일} </span>
                        <div>
                            <button type="button" onclick="change(${i})">변경</button>
                            <button type="button" onclick="remove(${i})">삭제</button>
                        </div>
                    </div>`  
        }else{
            html +=`<div id="blackBox">
                        <span> ${todoList[i].하고싶은일} </span>
                        <div>
                            <button type="button" onclick="change(${i})">변경</button>
                            <button type="button" onclick="remove(${i})">삭제</button>
                        </div>
                    </div>`  
        }
    }
    // 출력
    todoBox.innerHTML = html;
}
function remove(deleteIndex){
   
    todoList.splice(deleteIndex,1);             console.log(todoList);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('todoList' , JSON.stringify( todoList ));

    print();
}
function change(changeIndex){
    
    if(todoList[changeIndex].상태 == 'X'){
        todoList[changeIndex].상태 = 'O'
    }else{
        todoList[changeIndex].상태 = 'X'
    }                                           console.log(todoList);
    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('todoList' , JSON.stringify( todoList ));

    print();
}