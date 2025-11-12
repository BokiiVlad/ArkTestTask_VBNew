
import '/js/jquery-3.6.0.min.js';
import '/js/utils.js';
import { initTimer } from '/js/timer.js';

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
