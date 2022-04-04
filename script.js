/* Counter Assignment Script JS page 
By: Julie Juneau Student # 040930994 */

const $form = document.getElementById('form')
const $countDown = document.getElementById('countDown')
const day = document.getElementById('day')
const now = new Date();

function setDays() {
    
    const date = DateTime.fromObject({year: $year.value, month:value })

}

for (let i = 1; i <= date.daysInMonth; i++){
    days.push('<option>${i}</option>')
}
{

    $day.innerHTML = days.join('')
    
}

$countDown.addEventListener('submit', function (e) {

    e.preventDefault()

    const date = DateTime.fromObject({ year: $year.value })
    /* Check if date is in the future and provide amount*/
    if (date > now) {

        const diff = date.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject()
        $response.textContent = `${diff.days} days
        ${diff.hours} hours ${diff.minutes} minutes`
    }
    
})