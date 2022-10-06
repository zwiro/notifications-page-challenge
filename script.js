const readAll = document.querySelector('#read-all');
const notification = document.querySelectorAll('.notification-content');
const redDot = document.querySelectorAll('.red-dot');
const redDotVisible = document.querySelectorAll('.red-dot-visible');
const notificationNumber = document.querySelector('#notification-number');

let notificationValue = redDotVisible.length;


readAll.addEventListener('click', () => {
    notification.forEach(el => el.classList.remove('unread'))
    redDot.forEach(el => el.classList.remove('red-dot-visible'))
    notificationValue = 0
    notificationNumber.textContent = notificationValue
})


for (let i = 0; i < notification.length; i++) {
    notification[i].addEventListener('click', () => {
        if (notification[i].classList.contains('unread')) {
            notification[i].classList.toggle('unread')
            redDot[i].classList.toggle('red-dot-visible')
            notificationValue--
            notificationNumber.textContent = notificationValue
        } else {
            notification[i].classList.toggle('unread')
            redDot[i].classList.toggle('red-dot-visible')
            notificationValue++
            notificationNumber.textContent = notificationValue
        }
    })
}
