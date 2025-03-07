function playMusic() {
    let audio = new Audio('HBD.mp3');
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const wishesButton = document.querySelector("#wishes button");
    wishesButton.addEventListener("click", function() {
        let message = document.querySelector("#wishes textarea").value;
        if (message.trim() === "") {
            alert("Please write a wish before submitting!");
        } else {
            alert("Your wish has been submitted! 🎉");
            document.querySelector("#wishes textarea").value = "";
        }
    });
});

function openBox() {
    document.getElementById("birthdayBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeBox() {
    document.getElementById("birthdayBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}