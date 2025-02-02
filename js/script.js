var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 13000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()


function showVideo() {
    // Hide other sections if you have them
    document.getElementById('video-section').style.display = 'block';
    // You can add other actions if needed for different nav links
}


const splash = document.getElementById("splash");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");
const toggleMusic = document.getElementById("toggleMusic");
const audioContainer = document.getElementById("audio-container");
const navbar = document.getElementById("navbar");

startBtn.addEventListener("click", () => {
    splash.style.opacity = "0";
    navbar.style.visibility = "visible"; 
    setTimeout(() => {
        splash.style.display = "none";
        audioContainer.style.display = "block"; // Show the toggle button after splash disappears
    }, 800);

    // Play background music after user interaction
    bgMusic.volume = 0.7;
    bgMusic.play().catch(error => console.log("Play failed:", error));
});

// Toggle music play/pause
toggleMusic.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        toggleMusic.textContent = "⏸"; // Change icon to pause
    } else {
        bgMusic.pause();
        toggleMusic.textContent = "🔊"; // Change icon back to play
    }
});




// FOR NOT ALLOWING RAPID CLICKING

let isAnimating = false;

nextBtn.onclick = function () {
    if (!isAnimating) {
        isAnimating = true;
        showSlider('next');
        setTimeout(() => {
            isAnimating = false;
        }, timeRunning);
    }
};

prevBtn.onclick = function () {
    if (!isAnimating) {
        isAnimating = true;
        showSlider('prev');
        setTimeout(() => {
            isAnimating = false;
        }, timeRunning);
    }
};