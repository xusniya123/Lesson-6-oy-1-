function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Raqamlar 10 dan kichik bo'lsa, oldiga 0 qo'shish
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Har bir soniyada soatni yangilash
setInterval(updateClock, 1000);

// Dastlabki soatni ko'rsatish
updateClock();
