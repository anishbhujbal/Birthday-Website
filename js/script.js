var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

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





// (auto music)
const bgMusic = document.getElementById("bgMusic");
const toggleMusic = document.getElementById("toggleMusic");

// Try playing the music on page load
window.onload = function() {
    bgMusic.volume = 0.7; // Set volume to 70%

    // Attempt to auto-play on page load
    const playPromise = bgMusic.play();
    
    // If auto-play fails, show the Play button to manually start the music
    if (playPromise !== undefined) {
        playPromise.catch((error) => {
            console.log("Auto-play failed:", error);
            toggleMusic.style.display = "inline-block"; // Show the Play button
        });
    }
};

// Toggle the music (Play/Pause) when the button is clicked
toggleMusic.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        toggleMusic.textContent = "⏸";
    } else {
        bgMusic.pause();
        toggleMusic.textContent = "🔊";
    }
});
