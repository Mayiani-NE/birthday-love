let pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// MUSIC PLAYLIST
const songs = [
  "music/song1.mpeg",
  "music/song2.aac",
  "music/song3.aac"
];

let music = document.getElementById("bgMusic");
let songIndex = 0;

function playMusic() {
  music.src = songs[songIndex];
  music.play();
}

music.onended = () => {
  songIndex = (songIndex + 1) % songs.length;
  playMusic();
};

playMusic();

// CUSTOM NAME & AGE
document.getElementById("name").innerText = "CUTTIE";
document.getElementById("name2").innerText = "CUTTIE";
document.getElementById("age").innerText = "17";
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 2 + 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.font = h.size + "px Arial";
    ctx.fillText("💖", h.x, h.y);
    h.y += h.speed;
    if (h.y > canvas.height) h.y = 0;
  });
  requestAnimationFrame(drawHearts);
}

drawHearts();
function blowCandles() {
  document.getElementById("candles").innerText = "💨💨💨";
  document.getElementById("wish").style.display = "block";
}
const MAIN_PASSWORD = "iloveyou";

function unlock() {
  const input = document.getElementById("passwordInput").value;
  if (input === MAIN_PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
  } else {
    alert("Wrong password 💔");
  }
}
const SECRET_PASSWORD = "forever";

function openSecret() {
  let pass = prompt("Enter secret password 💌");
  if (pass === SECRET_PASSWORD) {
    document.getElementById("secretMessage").style.display = "block";
  } else {
    alert("Not yet my love 😉");
  }
}
document.addEventListener("mousemove", function(e) {
  let sparkle = document.createElement("div");
  sparkle.innerText = "✨";
  sparkle.style.position = "absolute";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "fade 1s forwards";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});
function startMic() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const audioContext = new AudioContext();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    mic.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);

    function listen() {
      analyser.getByteFrequencyData(data);
      let volume = data.reduce((a, b) => a + b) / data.length;

      if (volume > 50) {
        document.getElementById("candles").innerText = "💨💨💨";
        document.getElementById("wish").style.display = "block";
        return;
      }
      requestAnimationFrame(listen);
    }

    listen();
  });
}
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖 Cuttie";
  heart.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 800);



