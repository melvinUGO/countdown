const deadline = document.querySelectorAll('.deadline-countdown h4');

const futureDate = new Date(2023,4,29)




const futureTime = futureDate.getTime();
function countdownTimer() {
const today = new Date().getTime();
const t = futureTime - today;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t / oneDay;
  days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

const values = [days , hours , minutes , seconds]
function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }


deadline.forEach(function(item, index){
    item.innerHTML = format(values[index]);
})
if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>The Election has been carried out and a new President is expected to be sworn in</h4>`;
  }
}

let countdown = setInterval(countdownTimer, 1000)

countdownTimer();

