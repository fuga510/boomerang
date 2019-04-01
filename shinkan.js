const weeks = ['日', '月', '火', '水', '木', '金', '土']
// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth() + 1
// const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
// const endDate = new Date(year, month,  0) // 月の最後の日を取得
// const endDayCount = endDate.getDate() // 月の末日
// const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数


//convert for april
let startDay = 1
const endDayCount = 30

calendarHtml += '<h5>2019年4月 新歓日程(予定をクリックして詳細表示)</h5>'
calendarHtml += "<table>"


// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td class="youbi">' + weeks[i] + '</td>'
}

for (let w = 0; w < 5; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td class="light">31</td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            const tmp = dayCount-endDayCount
            calendarHtml += '<td class="light">'+ tmp +'</td>'
            dayCount++
        } else if ((w !== 0) &&(startDay==3 || startDay==4 || startDay==5)){
            //投げる会の日程

          switch(dayCount) {
            case 11:
            case 12:
            case 17:
            case 18:
            case 25:
            case 26:
              calendarHtml += "<td><input type='button' class='btn_tou btn-sticky' value='投'><input type='button' class='btn_yuu btn-sticky' value='遊'></td>"
              break;
            default:
              calendarHtml += "<td><input type='button' class='btn_tou btn-sticky' value='投'></td>"
          }
          dayCount++
          startDay++
        } else if (dayCount==21 || dayCount==27){
            //練習会の日程
            if (dayCount==21){
              // calendarHtml += '<td>練１</td>'
              calendarHtml += "<td><input type='button' id='btn_kbn' class='btn-sticky' value='KBN'></td>"
            }else{
              calendarHtml += "<td><input type='button' id='btn_ren' class='btn-sticky' value='練'></td>"
            }
            dayCount++
            startDay++
        }
         else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
            startDay++
        }
    }
    startDay = 0
    calendarHtml += '</tr>'
}
// for(let i = 1; i < 5; i++){
//   calendarHtml += '<td>'+i+'</td>'
// }
calendarHtml += '</table>'

document.getElementById('calendar').innerHTML = calendarHtml



//modalの実装
//kbn
var btn_kbn = document.getElementById('btn_kbn');
var modal_kbn = document.getElementById('modal_kbn');
var kbn = document.getElementById('kbn');
btn_kbn.addEventListener('click', function() {
  kbn.style.display = 'block';
});
window.addEventListener('click', function(e) {
  if (e.target == modal_kbn) {
    kbn.style.display = 'none';
  }
});

//練
var btn_ren = document.getElementById('btn_ren');
var modal_ren = document.getElementById('modal_ren');
var ren = document.getElementById('ren');
btn_ren.addEventListener('click', function() {
  ren.style.display = 'block';
});
window.addEventListener('click', function(e) {
  if (e.target == modal_ren) {
    ren.style.display = 'none';
  }
});

//投
var btn_tou = document.getElementsByClassName('btn_tou');
var modal_tou = document.getElementById('modal_tou');
var tou = document.getElementById('tou');
for(let i = 0; i < btn_tou.length; i++){
  btn_tou[i].addEventListener('click', function() {
    tou.style.display = 'block';
  });
}
window.addEventListener('click', function(e) {
  if (e.target == modal_tou) {
    tou.style.display = 'none';
  }
});

//遊
var btn_yuu = document.getElementsByClassName('btn_yuu');
var modal_yuu = document.getElementById('modal_yuu');
var yuu = document.getElementById('yuu');
for(let i = 0; i < btn_yuu.length; i++){
  btn_yuu[i].addEventListener('click', function() {
    yuu.style.display = 'block';
  });
}
window.addEventListener('click', function(e) {
  if (e.target == modal_yuu) {
    yuu.style.display = 'none';
  }
});
