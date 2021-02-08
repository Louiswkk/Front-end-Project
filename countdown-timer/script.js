const endYears = "1 Jan 2022";

const monthElement = document.getElementById('months');
const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');

function countdown() {
  const endYearDate = new Date(endYears);
  const currentDate = new Date();

  const totalSeconds = (endYearDate - currentDate) / 1000;
  const months = Math.ceil(totalSeconds / (24 * 60 * 60 * 30));
  const days = Math.ceil(totalSeconds / (24 * 3600));
  const hours = Math.ceil(totalSeconds / 3600) % 24;
  const minutes = Math.ceil(totalSeconds / 60) % 60;
  const seconds = Math.ceil(totalSeconds) % 60;

  monthElement.innerHTML = formattime(months);
  dayElement.innerHTML = formattime(days);
  hourElement.innerHTML = formattime(hours);
  minuteElement.innerHTML = formattime(minutes);
  secondElement.innerHTML = formattime(seconds);

}

function formattime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}
countdown();
setInterval(countdown, 1000);//倒數