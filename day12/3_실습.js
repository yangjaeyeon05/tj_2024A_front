let todoList = ["밥먹기,X"];

function add(){
    todoInput = document.querySelector(`#todoInput`);
    console.log(todoInput);
    let todo = todoInput.value;    
    todoList.push(todo + `,X`);             console.log(todoList);      // ',X' 같이 저장되게 하는 이유
                                                                            // 스위치 함수를 만들 때 구분하기 위함
    alert(`리스트 저장 성공`);

    print();
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);
    let html = ``;

    for(let i=0; i<todoList.length; i++){
        let s = todoList[i].split(",")[0];    // 문장     // split 함수로 떼어내기
        let e = todoList[i].split(",")[1];    // X  

        if(e == 'X'){                          // e == 'X'는 기본값으로 등록했을 때 화이트 박스가 나오게 하기 위함.
            html +=`<div id="whiteBox">
                        <span> ${s} </span>
                        <div>
                            <button type="button" onclick="change(${i})">변경</button>
                            <button type="button" onclick="remove(${i})">삭제</button>
                        </div>
                    </div>`            
        }else{
            html +=`<div id="blackBox">
                        <span> ${s} </span>
                        <div>
                            <button type="button" onclick="change(${i})">변경</button>
                            <button type="button" onclick="remove(${i})">삭제</button>
                        </div>
                    </div>`
        }
    }    
    todoBox.innerHTML = html;    
}
function remove(deleteIndex){
    //  1. 배열 내 특정 인덱스[i]의 요소 삭제
    todoList.splice(deleteIndex, 1);
    //  2. 삭제가 되면 배열의 상태가 변경되므로 배열의 상태를 다시 출력 - 화면 업데이트
    print();
}       
function change(i){ 
    let s = todoList[i].split(",")[0]
    let e = todoList[i].split(",")[1]

    if(e =='X'){                 // e == 'X' 여서 변경 하려면'X'가'O'로 바뀌어야함.
    todoList[i] = s + ",O"
    }else{
    todoList[i] = s + ",X"
    }
    print();
}