class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"]');

    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.daysRef.textContent = getTime(time).days;
      this.hoursRef.textContent = getTime(time).hours;
      this.minsRef.textContent = getTime(time).mins;
      this.secsRef.textContent = getTime(time).secs;
    }, 1000);

    function getTime(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      return { days, hours, mins, secs };
    }

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 15, 2021, 00:00:00'),
});
