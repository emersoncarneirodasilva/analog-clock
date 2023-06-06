setInterval(() => {
  let hh = document.querySelector("#hh");
  let mm = document.querySelector("#mm");
  let ss = document.querySelector("#ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let hr = document.querySelector("#hr");
  let mn = document.querySelector("#mn");
  let sc = document.querySelector("#sc");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // 12 hrs
  hh.style.strokeDashoffset = 510 - (510 * h) / 12;

  // 60 minutes
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;

  // 60 seconds
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;

  /*------------------------------------------------*/

  // 360 / 12hrs = 30
  hr_dot.style.transform = `rotateZ(${h * 30}deg)`;

  // 360 / 60 minutes = 6
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;

  // 360 / 60 seconds = 6
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

  /*------------------------------------------------*/

  hr.style.transform = `rotateZ(${h * 30}deg)`;

  mn.style.transform = `rotateZ(${m * 6}deg)`;

  sc.style.transform = `rotateZ(${s * 6}deg)`;
});
