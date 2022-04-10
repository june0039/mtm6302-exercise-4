/* Counter Assignment Script JS page 
By: Julie Juneau Student # 040930994 */

const $form = document.getElementById('form')
const $countDown = document.getElementById('countDown')
const $clear = document.getElementById('clear')
const now = new Date();
const $userTitle = document.getElementById('userTitle')

let start = now

if (localStorage.getItem('data') != undefined) {

  let data = JSON.parse(localStorage.getItem('data'))

  $form.elements.title.value = data.title
  $form.elements.date.value = data.date
  
}

//function setDays() {
    
  

/* Function when count down button is clicked */
$countDown.addEventListener('click', function () {

  

  e.preventDefault()

  let newDate = dateDiff(now, new Date($form.elements.date.value))
  localStorage.setItem('newDate', $form.elements.date.value)
  localStorage.setItem('title', $form.elements.title.value)
  $form.classList.add('hide')

  setInterval(function () {
    
    //Display new form of countdown date and time with the title entered by the user

    newDate  = dateDiff(new Date(), new Date($form.elements.date.value))

    $userTitle.innerHTML = `<h1>${$form.elements.title.value}</h1>
    <p>${newDate.days} : ${newDate.hours} : ${newDate.minutes} : ${newDate.seconds} </p>
    <div>
    <span>days</span> <span>hours</span> <span>minutes</span> <span> seconds</span>
    </div>
    <button class="clearCount" id="clear"> Clear Countdown</button>`
  }, 1000)

})

//Function to calculate the difference between todays date and the users input date

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
    
//Clear button function to clear counter and data from local storage and display entry form again

$clear.addEventListener('click', function (e) {

  let $clear = 1;
  
  //$form.elements.title.value = ''

 // $form.classList.remove('hide')
 // $userTitle.classList.add('hide')
  
  localStorage.clear();



})




