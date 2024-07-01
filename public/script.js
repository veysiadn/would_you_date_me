function no_thanks() {

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    var botao = document.getElementById('nope');
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    randomT = getRandomNumber(0, winHeight);
    randomL = getRandomNumber(0, winWidth);
    
    botao.style.position = "absolute"
    botao.style.top = randomT +"px";
    botao.style.left = randomL +"px";
}


// In public/script.js, modify the yes_sure() function and add form submission handling
function yes_sure() {
    document.getElementById('contactForm').style.display = 'block';


}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var phoneNumber = document.getElementById('phoneNumber').value;
    var instagramHandle = document.getElementById('instagramHandle').value;
    // Process the data here, like sending it to a server or displaying it
    console.log(phoneNumber, instagramHandle); // Example action
    alert("Thank you!");

    // Ask the user if they want to proceed
    if (confirm("Do you want to watch a video?")) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
});