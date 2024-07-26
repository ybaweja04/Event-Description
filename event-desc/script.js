document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const eventDate = new Date("2024-07-27T12:00:00").getTime();

    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Event has started!";
        }
    }, 1000);

    // Modal for registration confirmation
    const modal = document.getElementById("thankYouModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
