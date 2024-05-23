let todoList = [];

function add(){
    todoInput = document.querySelector(`#todoInput`);
    console.log(todoInput);
    let todo = todoInput.value;    
    todoList.push(todo + `,O`);
    console.log(todoList);

    alert(` 리스트 저장 성공`);
    print();
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);
    var html = ``;
    for(let i=0; i<todoList.length; i++){
        let currenttodo = todoList[i]; 
        var sptodo = currenttodo.split(",");
        console.log(sptodo);
        html +=`<div id="whiteBox">
                ${sptodo[0]}
    <button type="button" onclick="change()"> 변경 </button>
    <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
    }
    todoBox.innerHTML = html;
    
}
function remove(deleteIndex){

    //let deleteIndex = 0;

    //  1. 배열 내 특정 인덱스의 요소 삭제
    todoList.splice(deleteIndex, 1);
    //  2. 삭제가 되면 배열의 상태가 변경되므로 배열의 상태를 다시 출력 - 화면 업데이트
    print();
}
function change(){
    if(sptodo[0] != 'O'){
        html +=`<div id="blackBox">
                ${sptodo[0]}
    <button type="button" onclick="change()"> 변경 </button>
    <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
    sptodo[1] = 'X'; console.log(sptodo);
    todoBox.innerHTML = html;
    }else{
        html +=`<div id="whiteBox">
                ${sptodo[0]}
    <button type="button" onclick="change()"> 변경 </button>
    <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
    todoBox.innerHTML = html;
    }
}

