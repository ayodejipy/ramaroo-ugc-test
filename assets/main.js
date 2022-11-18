// Elements
const ugcWrapper = document.getElementById("ramaroo-ugc-container");
const container = document.getElementById("video-container");
const previewContainer = document.getElementById("preview-video-container");
const video = document.getElementById("ramaroo-video");
const previewVideo = document.getElementById("ramaroo-preview-video");
const watermark = document.getElementById("ramaroo-ugc-watermark");
const videoControls = document.getElementById("ramaroo-ugc-video-controls");
const playButton = document.getElementById("ramaroo-ugc-play");
const playbackIcons = document.querySelectorAll(".ugc-playback-icons use");
const timeElapsed = document.getElementById("time-elapsed");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");
const seek = document.getElementById("ramaroo-player-seek");
const seekTooltip = document.getElementById("seek-tooltip");

const close = document.getElementById("ramaroo-ugc-close");
const expandReview = document.getElementById("ramaroo-ugc-open-review");
const toggleBtn = document.getElementById("toggle-ramaroo-player");
const toggle = document.getElementById("ramaroo-ugc-toggle");

const progressContainer = document.querySelector(".ugc-video-progress");
const timeContainer = document.querySelector(".ramaroo-player-time");
const closePreview = document.getElementById("ramaroo-ugc-close-preview");

// function _triggerPlayerDelay(delay) {
//     setTimeout(() => {
//         ugcWrapper.classList.remove("ugc-r-hidden");
//         previewVideo.classList.remove("ugc-r-hidden");
//     }, delay);
// }
// if (path) {
//     console.log("starting....");
//     ugcWrapper.classList.remove("ugc-r-hidden");
//     previewVideo.classList.remove("ugc-r-hidden");
// }

function displayPreview() {
    ugcWrapper.classList.remove("ugc-r-hidden");
    previewVideo.classList.remove("ugc-r-hidden");
    // check if player has delay
    // if (settings.delayPlayer == 0) {
    //     ugcWrapper.classList.remove("ugc-r-hidden");
    //     previewVideo.classList.remove("ugc-r-hidden");
    // } else {
    //     const delay = settings.delayPlayer * 1000;
    //     _triggerPlayerDelay(delay);
    // }
    console.log("starting...., 176");
}

video.addEventListener("loadedmetadata", (event) => {
    console.log("meta-loaded");
    if (video.readyState > 0) {
        console.log("can play through...");
        displayPreview();
    }
});

console.log("starting...., 180");

video.addEventListener("loadedmetadata", initializeVideo);
// video.removeEventListener("loadedmetadata");

const videoWorks = !!document.createElement("video").canPlayType;
const isMobile = !window.matchMedia("only screen and (min-width: 768px)").matches;

if (isMobile) {
    alert("code getting here on mobile...");
}

// handles click outside event
// document.addEventListener("click", (event) => {
//     if (!ugcWrapper.contains(event.target) && video.readyState > 0) {
//         container.classList.add("ugc-r-hidden");
//         previewVideo.classList.remove("ugc-r-hidden");
//         previewContainer.classList.remove("ugc-r-hidden");
//         ugcWrapper.classList.remove("ramaroo-video-extended");
//         // pause main video and play preview
//         video.pause();
//         previewVideo.play();
//     }
// });

if (videoWorks) {
    video.controls = false;
    previewVideo.classList.remove("ugc-r-hidden");
    // videoControls.classList.add("ugc-r-hidden");
    // video.classList.add("ugc-r-hidden");
}

function convertToRem(value) {
    return value / parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// update widget settings/styles with user's preference
// ugcWrapper.style.fontFamily = settings.fontFamily;
// toggleBtn.style.backgroundColor = settings.minimizeButtonColor;
// toggleBtn.style.color = settings.minimizeButtonColor ? "#131313" : toggleBtn.style.color;

// //  onScreen settings
// playbackIcons.forEach((element) => (element.style.color = settings.onScreenControlsColor ? settings.onScreenControlsColor : element.style.color));

// progressBar.style.color = settings.progressBarColor
//     ? settings.progressBarColor
//     : progressBar.style.color;
// seek.style.color = settings.onScreenControlsColor
//     ? settings.onScreenControlsColor
//     : seek.style.color;

// if (isMobile) {
//     ugcWrapper.style.marginBottom = `${convertToRem(
//         settings.marginBottomMobile
//     )}rem`;
//     toggle.style.marginBottom = `${convertToRem(
//         settings.marginBottomMobile
//     )}rem`;
//     settings.placementOptionMobile == "bottom-right"
//         ? (ugcWrapper.style.right = "15px")
//         : (ugcWrapper.style.left = "15px");
// } else {
//     ugcWrapper.style.marginBottom = `${convertToRem(
//         settings.marginBottomDesktop
//     )}rem`;
//     toggle.style.marginBottom = `${convertToRem(
//         settings.marginBottomDesktop
//     )}rem`;
//     settings.placementOptionDesktop == "bottom-right"
//         ? ((ugcWrapper.style.right = "20px"),
//           (toggle.style.right = "15px"),
//           (toggleBtn.style.right = "20px"))
//         : ((ugcWrapper.style.left = "20px"),
//           (ugcWrapper.style.right = "0"),
//           (toggle.style.left = "15px"),
//           (toggleBtn.style.left = "20px"));
// }

function closePlayer() {
    ugcWrapper.classList.remove("ramaroo-video-extended");
    ugcWrapper.classList.add("ramaroo-ugc-no-shadow");
    ugcWrapper.style.position = "inherit";
    container.classList.add("ugc-r-hidden");
    videoControls.classList.add("ugc-r-hidden");
    close.classList.add("ugc-r-hidden");
    playButton.classList.add("ugc-r-hidden");
    video.classList.add("ugc-r-hidden");
    video.pause();
    // only show the button
    toggle.classList.remove("ugc-r-hidden");
}

function _showControls() {
    video.classList.remove("ugc-r-hidden");
    container.classList.remove("ugc-r-hidden");
    videoControls.classList.remove("ugc-r-hidden");
    close.classList.remove("ugc-r-hidden");
    playButton.classList.remove("ugc-r-hidden");
    watermark.classList.remove("ugc-r-hidden");
    progressContainer.classList.remove("ugc-r-hidden");
    timeContainer.classList.remove("ugc-r-hidden");
}

function enlargePlayer() {
    ugcWrapper.classList.add("ramaroo-video-extended");
    toggle.classList.add("ugc-r-hidden");

    // hide preview
    previewContainer.classList.add("ugc-r-hidden");
    previewVideo.classList.add("ugc-r-hidden");

    if (isMobile) {
        _showControls();
        updatePlayButton();
        video.load();
        video.play();
    }
    // display video and it's control
    _showControls();
    updatePlayButton();
    video.load();
    video.play();
}

function openPlayer() {
    ugcWrapper.classList.add("ramaroo-video-extended");
    toggle.classList.add("ugc-r-hidden");

    // show the rest
    video.classList.remove("ugc-r-hidden");
    if (video.readyState > 0) {
        ugcWrapper.style.position = "fixed";
        container.classList.remove("ugc-r-hidden");
        videoControls.classList.remove("ugc-r-hidden");
        close.classList.remove("ugc-r-hidden");
        playButton.classList.remove("ugc-r-hidden");
        // load and play video
        video.load();
        video.play();
    }
}

function showControls() {
    videoControls.classList.remove("ugc-r-hidden");
    close.classList.remove("ugc-r-hidden");
    playButton.classList.remove("ugc-r-hidden");
    progressContainer.classList.remove("ugc-r-hidden");
    timeContainer.classList.remove("ugc-r-hidden");
    watermark.classList.remove("ugc-r-hidden");
}

function hideControls() {
    if (!video.paused) {
        videoControls.classList.add("ugc-r-hidden");
        close.classList.add("ugc-r-hidden");
        playButton.classList.add("ugc-r-hidden");
        progressContainer.classList.add("ugc-r-hidden");
        timeContainer.classList.add("ugc-r-hidden");
        watermark.classList.add("ugc-r-hidden");
    }
}

// toggles playback state of the video
function togglePlay() {
    if (video.paused || video.ended) {
        seek.value = Math.floor(video.currentTime);
        progressBar.value = Math.floor(video.currentTime);
        video.play();
    } else {
        video.pause();
    }
}

// update the pause and pay button
function updatePlayButton() {
    playbackIcons.forEach((icon) => icon.classList.toggle("ugc-r-hidden"));
}

// formatTime takes a time in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2),
    };
}

// updateTimeElapsed indicates how far through the video
// the current playback is
function updateTimeElapsed() {
    const time = formatTime(Math.round(video.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}

// initializeVideo sets the video duration, and maximum value of the
// progressBar
function initializeVideo(e) {
    const videoDuration = Math.round(video.duration);
    seek.setAttribute("max", videoDuration);
    progressBar.setAttribute("max", videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}

// updateProgress indicates how far through the video
// the current playback is by updating the progress bar
function updateProgress() {
    seek.value = Math.floor(video.currentTime + 1);
    progressBar.value = Math.floor(video.currentTime + 1);
}

// updateSeekTooltip uses the position of the mouse on the progress bar to
// roughly work out what point in the video the user will skip to if
// the progress bar is clicked at that point
function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute("max"), 10));
    seek.setAttribute("data-seek", skipTo);
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video.getBoundingClientRect();
    seekTooltip.style.left = `${event.pageX - rect.left}px`;
}

function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
}

function removeVideoPlayer() {
    // update the settings in session
    // localStorage.setItem('should-close', true);
    previewVideo.classList.add("ugc-r-hidden");
    ugcWrapper.classList.add("ramaroo-ugc-no-shadow");
    ugcWrapper.classList.add("ugc-r-hidden");
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", updateTimeElapsed);
video.addEventListener("timeupdate", updateProgress);
container.addEventListener("mouseover", showControls);
container.addEventListener("mouseleave", hideControls);
close.addEventListener("click", closePlayer);
toggle.addEventListener("click", openPlayer);
expandReview.addEventListener("click", enlargePlayer);
seek.addEventListener("mousemove", updateSeekTooltip);
seek.addEventListener("input", skipAhead);
closePreview.addEventListener("click", removeVideoPlayer);
