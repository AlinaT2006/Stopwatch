const hours = document.querySelector(".stopwatch__hours"),
  minutes = document.querySelector(".stopwatch__minutes"),
  seconds = document.querySelector(".stopwatch__seconds"),
  mainBtn = document.querySelector(".stopwatch__btn"),
  addBtn = document.querySelector(".stopwatch__btn-add");

let i = 0;

mainBtn.addEventListener("click", () => {
  if (mainBtn.innerHTML === `Начать`) {
    mainBtn.innerHTML = `Стоп`;
    mainBtn.classList.add("active");
    setTimeout(() => stopWatch(mainBtn), 1000);
  } else if (mainBtn.innerHTML === `Стоп`) {
    mainBtn.classList.remove("active");
    mainBtn.classList.add("active_clear");
    addBtn.classList.add("active");
    mainBtn.innerHTML = `Продолж.`;
  } else if (mainBtn.innerHTML === `Продолж.`) {
    mainBtn.innerHTML = `Стоп`;
    mainBtn.classList.remove("active_clear");
    mainBtn.classList.add("active");
    addBtn.classList.remove("active");
    setTimeout(() => stopWatch(mainBtn), 1000);
  }
  
});

addBtn.addEventListener("click", () => {
  mainBtn.innerHTML = `Начать`;
  addBtn.classList.remove("active");
  mainBtn.classList.remove("active", "active_clear");

  if (addBtn.innerHTML == `Сбросить`) {
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    i = 0;
  }
});

function stopWatch(btn) {
  if (btn.innerHTML === `Стоп`) {
    if (i === 60) {
      i = 0;
      seconds.innerHTML = (i < 10 ? '0' : '') + i;
      if (parseInt(minutes.innerHTML) === 59) {
        minutes.innerHTML = '00';
        hours.innerHTML = (parseInt(hours.innerHTML) < 10 ? '0' : '') + (parseInt(hours.innerHTML) + 1);
      } else {
        minutes.innerHTML = (parseInt(minutes.innerHTML) + 1).toString();
        minutes.innerHTML = (minutes.innerHTML < 10 ? '0' : '') + minutes.innerHTML;
      }
    } else {
      i++;
      seconds.innerHTML = (i < 10 ? '0' : '') + i;
    }
    setTimeout(() => stopWatch(btn), 1000);
  }
}
