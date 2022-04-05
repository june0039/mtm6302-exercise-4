/* Counter Assignment Script JS page 
By: Julie Juneau Student # 040930994 */

const $form = document.getElementById('form')
const $countDown = document.getElementById('countDown')
const $day = document.getElementById('day')
const now = new Date();

let start = now

if (localStorage.getItem('data') != undefined) {

  let data = JSON.parse(localStorage.getItem('data'))

  $form.elements.titleBox.value = data.title
  $form.elements.date.value = data.date
  
}

//function setDays() {
    
  //  const date = DateTime.fromObject({year: $year.value, month:value })



//for (let i = 1; i <= date.daysInMonth; i++){
    //days.push('<option>${i}</option>')


    //$day.innerHTML = days.join('')
  

/* Function when count down button is clicked */
$countDown.addEventListener('submit', function (e) {

  e.preventDefault()

  const newDate = dateDiff(now, $form.elements.date.value) 
  localStorage.setItem('newDate')
  
})

    function dateDiff (start, end) {
  const diff = end - start > 0 ? end - start : 0
  const format = (num) => num < 10 ? `0${num}` : num
  
  return {
    days: format(Math.floor(diff / 1000 / 60 / 60 / 24)),
    hours: format(Math.floor(diff / 1000 / 60 / 60 % 24)),
    minutes: format(Math.floor(diff / 1000 / 60 % 60)),
    seconds: format(Math.floor(diff / 1000 % 60))
  }
}
    
    
    
