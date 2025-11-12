import '%BASE_URL%js/jquery-3.6.0.min.js';
import '%BASE_URL%js/utils.js';
import { initTimer } from '%BASE_URL%js/timer.js';

const base = import.meta.env.BASE_URL;

fetch(`${base}partials/main.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('main-content').innerHTML = html;

    initTimer({
      hoursSelector: '[data-h]',
      minutesSelector: '[data-m]',
      secondsSelector: '[data-s]',
      expiredSelector: '[data-expired]',
      startMinutes: 20,
    });
  });
