const currentDateElement = document.getElementById('currentDate')
const currentDate = new Date()

// Example: Tuesday, August 1, 2023
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}
const formattedDate = currentDate.toLocaleDateString('en-US', options)

currentDateElement.textContent = formattedDate
const checkboxes = document.querySelectorAll('.task-checkbox')
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const textbox = checkbox.nextElementSibling.querySelector('.task-textbox')
    textbox.disabled = true
    textbox.classList.toggle('completed')
  })
})
