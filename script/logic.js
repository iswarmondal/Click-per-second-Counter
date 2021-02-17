let clickvar = 0;
window.clicks = 0;
let startfunction = () => {
    window.time = new Date();
};
let clickfunction = () => {
    clickvar += 1;
    clicks = clickvar;
    let newTime = new Date();
    // console.log(newTime)
    let timeDiff = (newTime.getTime() - time.getTime())/1000;
    // console.log(timeDiff)
    window.clickPerSecond = Math.floor(clicks / timeDiff);
    // console.log(clickPerSecond)
    document.querySelector("#result").innerHTML = `You CPS is ${clickPerSecond}`;
    document.querySelector("#result").style.display = "inline-block"
};