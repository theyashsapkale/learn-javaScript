let hours = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

let addHr = document.querySelector("#hourInp");
let addmin = document.querySelector("#minInp");
let addsec = document.querySelector("#secInp");
let btnAddTime = document.querySelector("#btnAddTime");
let resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", function () {
    addedTime.hr = 0;
    addedTime.min = 0;
    addedTime.sec = 0;
});

let addedTime = {
    hr:   0,
    min:  0,
    sec:  0
};

btnAddTime.addEventListener("click", function () {
    const AddHR = parseInt(addHr.value) || 0;
    const AddMN = parseInt(addmin.value) || 0;
    const AddSC = parseInt(addsec.value) || 0;

    addedTime.hr += AddHR;
    addedTime.min += AddMN;
    addedTime.sec += AddSC;

    addHr.value = "";
    addmin.value = "";
    addsec.value = "";
});

function updateTime() {
    let currentTime = new Date();

    currentTime.setHours(currentTime.getHours() + addedTime.hr);
    currentTime.setMinutes(currentTime.getMinutes() + addedTime.min);
    currentTime.setSeconds(currentTime.getSeconds() + addedTime.sec);

    let hr = currentTime.getHours();
    let mn = currentTime.getMinutes();
    let sc = currentTime.getSeconds();
    let ap;

    if (hr >= 12) {
        ap = "PM";
    } else {
        ap = "AM";
    }

    if (hr > 12) {
        hr = hr - 12;
    } else if (hr === 0) {
        hr = 12;
    }

    if (hr < 10) hr = "0" + hr;
    if (mn < 10) mn = "0" + mn;
    if (sc < 10) sc = "0" + sc;

    hours.innerHTML = hr;
    min.innerHTML = mn;
    sec.innerHTML = sc;
    ampm.innerHTML = ap;
}

setInterval(() => {
    updateTime();
}, 1000);