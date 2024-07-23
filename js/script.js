let dy = document.getElementById("dy");
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let se = document.getElementById("se");

const timer = () => {
    let day = 0;
    let hour = 0;
    let min = 59;
    let sec = 59;

    let interval = setInterval(() => {
        sec++;

        if (sec > 59) {
            min++;
            sec = 0;
        }
        if (min > 59) {
            min = 0;
        }
        dy.innerHTML = day;
        hr.innerHTML = hour;
        mn.innerHTML = min;
        se.innerHTML = sec;
    }, 1000);
}
timer();
