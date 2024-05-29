let date = new Date();

_print();
function prevCalendar(){
    date = new Date( date.getFullYear() , date.getMonth()-1 , date.getDate() );
    _print();
}
function _print(){
    // 현재 년 월 헤드 출력하기
    let calendarYM = document.querySelector('#calendarYM');  console.log(calendarYM);
    calendarYM.innerHTML = date.getFullYear()+"년"+(date.getMonth()+1)+"월";

    // 달력 1월부터 출력하기
        // 현재월 시작날짜 구하기
    let startDate = new Date(date.getFullYear(), date.getMonth(),1);    console.log(startDate);
        // 캘린더에서 시작되는 위치 구하기
    let calendarStartDate = startDate.getDay();                         console.log(calendarStartDate);
        // 현재월 마지막날짜 구하기
    let lastDate = new Date(date.getFullYear(), date.getMonth()+1,0);   console.log(lastDate);
        // 캘린더에서 끝나는 위치 구하기
    let calendarLastDate = lastDate.getDate();                           console.log(calendarLastDate);
        // 주 카운트 구하기
    let calendarWeek = Math.ceil((calendarStartDate + calendarLastDate)/7);  console.log(calendarWeek);

    let calendarBody = document.querySelector('#calendarBody');

    let html = ``;
    // 위치
    let calendarPos = 0;
    // 날짜
    let calendarDay = 0;
    // 오늘날짜
    let calendarToday = date.getDate();

    for( let i = 0 ; i < calendarWeek ; i++ ){      // 주수만큼 tr 돌리기
        html += `<tr>`;
        for( let j = 0 ; j < 7 ; j++ ){             // 일수만큼 td 돌리기
            html += `<td onclick="popup()">`;
            if(calendarStartDate <= calendarPos && calendarDay < calendarLastDate){   // 만약 캘린더 시작되는 위치(3)이 0보다 작으면 날짜 1씩 올리고 출력
                calendarDay++;
                html += calendarDay;
            }html += `</td>`;                       // 아니면 출력 안하고 위치 값 1씩 올리기 
             calendarPos++;                   
        }html += `</tr>`;
    }
    calendarBody.innerHTML = html;
}
function nextCalendar(){
    date = new Date( date.getFullYear() , date.getMonth()+1 , date.getDate() );
    _print();
}
function popup(){
    
}