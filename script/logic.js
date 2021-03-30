// Declear the global variables
let clickvar = 0;
window.clicks = 0;

// Setup the start button function
let startfunction = () => {
  window.time = new Date();
  document.querySelector("#start").disabled = true;
  document.querySelector("#start").style.backgroundColor = "gray";
};

// Click per second counter function
let clickfunction = () => {
  clickvar += 1;
  clicks = clickvar;
  let newTime = new Date();
  // console.log(newTime)
  let timeDiff = (newTime.getTime() - time.getTime()) / 1000;
  // console.log(timeDiff)
  window.clickPerSecond = Math.floor(clicks / timeDiff);
  // console.log(clickPerSecond)
  document.querySelector(
    "#result"
  ).innerHTML = `Your Click Per Second is ${clickPerSecond}`;
  // document.querySelector("#result").style.display = "inline-block"
};

// Reset function
const resetfunction = () => {
  clicks = 0;
  document.querySelector("#result").innerHTML = `Your Click Per Second is `;
};

document.querySelector("#reset").onclick = resetfunction;
