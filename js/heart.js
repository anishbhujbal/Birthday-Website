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