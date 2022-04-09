/* Counter Assignment Script JS page 
By: Julie Juneau Student # 040930994 */

const $form = document.getElementById('form')
const $countDown = document.getElementById('countDown')
const $day = document.getElementById('day')
const now = new Date();
const $userTitle = document.getElementById('userTitle')

let start = now

if (localStorage.getItem('data') != undefined) {

  let data = JSON.parse(localStorage.getItem('data'))

  $form.elements.title.value = data.title
  $form.elements.date.value = data.date
  
}

//function setDays() {
    
  //  const date = DateTime.fromObject({year: $year.value, month:value })



//for (let i = 1; i <= date.daysInMonth; i++){
    //days.push('<option>${i}</option>')


    //$day.innerHTML = days.join('')
  

/* Function when count down button is clicked */
$countDown.addEventListener('click', function (e) {

  e.preventDefault()

  let newDate = dateDiff(now, new Date($form.elements.date.value))
  localStorage.setItem('newDate', $form.elements.date.value)
  localStorage.setItem('title', $form.elements.title.value)
  $form.classList.add('hide')

  setInterval(function () {
    
    newDate  = dateDiff(new Date(), new Date($form.elements.date.value))

    $userTitle.innerHTML = `<h1>${$form.elements.title.value}</h1>
    <p>${newDate.days} : ${newDate.hours} : ${newDate.minutes} : ${newDate.seconds} </p>
    <div>
    <span>days</span> <span>hours</span> <span>minutes</span> <span> seconds</span>
    </div>
    <button> Clear Countdown</button>`
  }, 1000)

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
    
//Display new form of countdown date and time with the title entered by the user

//hide form
//<h1 id="header"></h1>(from user input in titleBox)
//<date>
//<button id="clear"> Clear Countdown</button>
//<div class="count" id="counter">
    

    
