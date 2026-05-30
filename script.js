const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

if(guest){
document.getElementById("guestName").innerText = guest;
}

const weddingDate =
new Date("July 5, 2026 11:30:00").getTime();

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days =
Math.floor(distance / (1000*60*60*24));

const hours =
Math.floor((distance % (1000*60*60*24))
/ (1000*60*60));

const minutes =
Math.floor((distance % (1000*60*60))
/ (1000*60));

const seconds =
Math.floor((distance % (1000*60))
/ 1000);

document.getElementById("countdown")
.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);
