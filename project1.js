let time;
let date;
let ans;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    date = a.toLocaleDateString();
    ans = time + " on " + date;
    document.getElementById('time').innerHTML = ans;
}, 1000);
