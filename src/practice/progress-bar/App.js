import "./styles.css";

const container = document.getElementById("container");
const addBar = document.getElementById("add_progress_bar");

const MAX_ACTIVE = 3;
let queue = 0;

const progress = () => {
  let barWidth = 0;
  const div = document.createElement("div");
  div.setAttribute("id", "progressBar");

  const div1 = document.createElement("div");
  div1.setAttribute("id", "myBar");

  div.appendChild(div1);
  container.appendChild(div);
  let interval = setTimeout(function progressAdd() {
    if (barWidth === 100) {
      if (queue > MAX_ACTIVE) progress();

      queue--;
      clearInterval(interval);
    } else {
      barWidth++;
      interval = setTimeout(progressAdd, 100);
      div1.style.width = `${barWidth}%`;
    }
  }, 100);
};

const betterFunc = () => {
  console.log('mazedaar');
  queue++;
  if (queue <= MAX_ACTIVE) progress();
};

addBar.addEventListener("click", betterFunc);
