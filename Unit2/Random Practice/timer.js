const state = {
    start_time: Date.now(),
    hrs: 0,
    mins: 0,
    secs: 0,
  };
  
  const padWith0 = num => {
    if (num < 10) return "0"+num;
    return num;
  }
  const render = state => {
    const container = document.querySelector('.container');
    const hr = container.querySelector('.js-hour');
    const min = container.querySelector('.js-min');
    const sec = container.querySelector('.js-sec');
  
    hr.innerText = padWith0(state.hrs);
    min.innerText = padWith0(state.mins);
    sec.innerText = padWith0(state.secs);
  }
  
  const stopwatch = setInterval(() => {
    // first, get the time NOW
    const now = Date.now();
  
    // figure out how much time in seconds have passed since
    // start time
    const diff = Math.floor((now - state.start_time)/ 1000);
  
    // calculate how many SECONDS have passed
    const secs = diff % 60;
  
    const mins = Math.floor(diff / 60);
  
    state.secs = secs;
    state.mins = mins;
  
    render(state)
  }, 1000); // one second, lol
  
  const stopBtn = document.querySelector('.js-stop');
  stopBtn.addEventListener('click', (event) => {
    console.log('look ma! im inside a click event...', event)
    clearInterval(stopwatch)
  });
  console.log(stopBtn)