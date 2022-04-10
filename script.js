/* Counter Assignment Script JS page 
By: Julie Juneau Student # 040930994 */

const $form = document.getElementById('form')
const $countDown = document.getElementById('countDown')
const $clear = document.getElementById('clear')
const now = new Date()
const $userTitle = document.getElementById('userTitle')
let id = null
let start = now

if (localStorage.getItem('newDate') && localStorage.getItem('title')) {


  $form.elements.title.value = localStorage.getItem('title')
  $form.elements.date.value = localStorage.getItem('newDate')

  $form.classList.add('hide')
  $userTitle.classList.remove('hide')

  id = setInterval(display, 1000)
display()
  
  
}

/* Function when count down button is clicked */
$countDown.addEventListener('click', function (e) {

e.preventDefault()


  localStorage.setItem('newDate', $form.elements.date.value)
  localStorage.setItem('title', $form.elements.title.value)

  $form.classList.add('hide')
  $userTitle.classList.remove('hide')

  id = setInterval(display, 1000)
  display()
    
})

function display() {

//Display new form of countdown date and time with the title entered by the user

  newDate = dateDiff(new Date(), new Date($form.elements.date.value))
  $userTitle.innerHTML = `<h1>${$form.elements.title.value}</h1>
 <p>${newDate.days} : ${newDate.hours} : ${newDate.minutes} : ${newDate.seconds} </p>
 <div>
 <span>days</span> <span>hours</span> <span>minutes</span> <span> seconds</span>
 </div>
 <button class="clearCount" id="clear"> Clear Countdown</button>`
}

//Function to calculate the difference between todays date and the users input date

function dateDiff(start, end) {
      
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

$userTitle.addEventListener('click', function (e) {

  if (e.target.classList.contains("clearCount")){
    
    clearInterval(id)
  
    //hide title and counter
    $userTitle.classList.add('hide')
  
    //Display starting form
    $form.classList.remove('hide')

    //Reset form to empty
    $form.reset()

    localStorage.clear()

  }

  })










