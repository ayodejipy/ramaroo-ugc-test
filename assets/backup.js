class Widget {
    constructor(source) {
        this.source = source;
        this.loadCss();
    }

    initialize(path, preview_url, settings) {
        if (path && preview_url && settings) {
            const body = document.body;
            body.classList.add("relative");
            const mainContainer = document.createElement("div");
            mainContainer.classList.add("ramaroo-ugc-container");
            mainContainer.classList.add("ugc-r-hidden");
            mainContainer.id = "ramaroo-ugc-container";
            mainContainer.innerHTML = `
            <div class="ugc-video-container" id="video-container">
                <video src="${path}" controls class="video ugc-r-hidden" id="ramaroo-video" playsinline preload="metadata">
                    <source src="${path}" type="video/mp4" />
                </video>

                <button class="ramaroo-ugc-play ugc-r-hidden" id="ramaroo-ugc-play">
                    <svg class="ugc-playback-icons">
                        <use class="" href="#pause"></use>
                        <use class="ugc-r-hidden" href="#play-icon"></use>
                    </svg>
                </button>

                <div id="ramaroo-ugc-watermark" class="ramaroo-watermark ugc-r-hidden">
                    <a rel="noreferrer" href="https://ramaroo.com" target="_blank">
                        <svg id="watermark-svg" width="72" height="12" viewBox="0 0 72 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.3 11L4.11 7.025H3.495V11H0.93V0.47H5.235C6.065 0.47 6.77 0.615 7.35 0.904999C7.94 1.195 8.38 1.595 8.67 2.105C8.96 2.605 9.105 3.165 9.105 3.785C9.105 4.485 8.905 5.11 8.505 5.66C8.115 6.21 7.535 6.6 6.765 6.83L9.195 11H6.3ZM3.495 5.21H5.085C5.555 5.21 5.905 5.095 6.135 4.865C6.375 4.635 6.495 4.31 6.495 3.89C6.495 3.49 6.375 3.175 6.135 2.945C5.905 2.715 5.555 2.6 5.085 2.6H3.495V5.21ZM10.2052 6.8C10.2052 5.94 10.3652 5.185 10.6852 4.535C11.0152 3.885 11.4602 3.385 12.0202 3.035C12.5802 2.685 13.2052 2.51 13.8952 2.51C14.4852 2.51 15.0002 2.63 15.4402 2.87C15.8902 3.11 16.2352 3.425 16.4752 3.815V2.63H19.0402V11H16.4752V9.815C16.2252 10.205 15.8752 10.52 15.4252 10.76C14.9852 11 14.4702 11.12 13.8802 11.12C13.2002 11.12 12.5802 10.945 12.0202 10.595C11.4602 10.235 11.0152 9.73 10.6852 9.08C10.3652 8.42 10.2052 7.66 10.2052 6.8ZM16.4752 6.815C16.4752 6.175 16.2952 5.67 15.9352 5.3C15.5852 4.93 15.1552 4.745 14.6452 4.745C14.1352 4.745 13.7002 4.93 13.3402 5.3C12.9902 5.66 12.8152 6.16 12.8152 6.8C12.8152 7.44 12.9902 7.95 13.3402 8.33C13.7002 8.7 14.1352 8.885 14.6452 8.885C15.1552 8.885 15.5852 8.7 15.9352 8.33C16.2952 7.96 16.4752 7.455 16.4752 6.815ZM31.5758 2.54C32.6158 2.54 33.4408 2.855 34.0508 3.485C34.6708 4.115 34.9808 4.99 34.9808 6.11V11H32.4308V6.455C32.4308 5.915 32.2858 5.5 31.9958 5.21C31.7158 4.91 31.3258 4.76 30.8258 4.76C30.3258 4.76 29.9308 4.91 29.6408 5.21C29.3608 5.5 29.2208 5.915 29.2208 6.455V11H26.6708V6.455C26.6708 5.915 26.5258 5.5 26.2358 5.21C25.9558 4.91 25.5658 4.76 25.0658 4.76C24.5658 4.76 24.1708 4.91 23.8808 5.21C23.6008 5.5 23.4608 5.915 23.4608 6.455V11H20.8958V2.63H23.4608V3.68C23.7208 3.33 24.0608 3.055 24.4808 2.855C24.9008 2.645 25.3758 2.54 25.9058 2.54C26.5358 2.54 27.0958 2.675 27.5858 2.945C28.0858 3.215 28.4758 3.6 28.7558 4.1C29.0458 3.64 29.4408 3.265 29.9408 2.975C30.4408 2.685 30.9858 2.54 31.5758 2.54ZM36.2647 6.8C36.2647 5.94 36.4247 5.185 36.7447 4.535C37.0747 3.885 37.5197 3.385 38.0797 3.035C38.6397 2.685 39.2647 2.51 39.9547 2.51C40.5447 2.51 41.0597 2.63 41.4997 2.87C41.9497 3.11 42.2947 3.425 42.5347 3.815V2.63H45.0997V11H42.5347V9.815C42.2847 10.205 41.9347 10.52 41.4847 10.76C41.0447 11 40.5297 11.12 39.9397 11.12C39.2597 11.12 38.6397 10.945 38.0797 10.595C37.5197 10.235 37.0747 9.73 36.7447 9.08C36.4247 8.42 36.2647 7.66 36.2647 6.8ZM42.5347 6.815C42.5347 6.175 42.3547 5.67 41.9947 5.3C41.6447 4.93 41.2147 4.745 40.7047 4.745C40.1947 4.745 39.7597 4.93 39.3997 5.3C39.0497 5.66 38.8747 6.16 38.8747 6.8C38.8747 7.44 39.0497 7.95 39.3997 8.33C39.7597 8.7 40.1947 8.885 40.7047 8.885C41.2147 8.885 41.6447 8.7 41.9947 8.33C42.3547 7.96 42.5347 7.455 42.5347 6.815ZM49.5204 4.025C49.8204 3.565 50.1954 3.205 50.6454 2.945C51.0954 2.675 51.5954 2.54 52.1454 2.54V5.255H51.4404C50.8004 5.255 50.3204 5.395 50.0004 5.675C49.6804 5.945 49.5204 6.425 49.5204 7.115V11H46.9554V2.63H49.5204V4.025ZM57.1814 11.12C56.3614 11.12 55.6214 10.945 54.9614 10.595C54.3114 10.245 53.7964 9.745 53.4164 9.095C53.0464 8.445 52.8614 7.685 52.8614 6.815C52.8614 5.955 53.0514 5.2 53.4314 4.55C53.8114 3.89 54.3314 3.385 54.9914 3.035C55.6514 2.685 56.3914 2.51 57.2114 2.51C58.0314 2.51 58.7714 2.685 59.4314 3.035C60.0914 3.385 60.6114 3.89 60.9914 4.55C61.3714 5.2 61.5614 5.955 61.5614 6.815C61.5614 7.675 61.3664 8.435 60.9764 9.095C60.5964 9.745 60.0714 10.245 59.4014 10.595C58.7414 10.945 58.0014 11.12 57.1814 11.12ZM57.1814 8.9C57.6714 8.9 58.0864 8.72 58.4264 8.36C58.7764 8 58.9514 7.485 58.9514 6.815C58.9514 6.145 58.7814 5.63 58.4414 5.27C58.1114 4.91 57.7014 4.73 57.2114 4.73C56.7114 4.73 56.2964 4.91 55.9664 5.27C55.6364 5.62 55.4714 6.135 55.4714 6.815C55.4714 7.485 55.6314 8 55.9514 8.36C56.2814 8.72 56.6914 8.9 57.1814 8.9ZM66.7322 11.12C65.9122 11.12 65.1722 10.945 64.5122 10.595C63.8622 10.245 63.3472 9.745 62.9672 9.095C62.5972 8.445 62.4122 7.685 62.4122 6.815C62.4122 5.955 62.6022 5.2 62.9822 4.55C63.3622 3.89 63.8822 3.385 64.5422 3.035C65.2022 2.685 65.9422 2.51 66.7622 2.51C67.5822 2.51 68.3222 2.685 68.9822 3.035C69.6422 3.385 70.1622 3.89 70.5422 4.55C70.9222 5.2 71.1122 5.955 71.1122 6.815C71.1122 7.675 70.9172 8.435 70.5272 9.095C70.1472 9.745 69.6222 10.245 68.9522 10.595C68.2922 10.945 67.5522 11.12 66.7322 11.12ZM66.7322 8.9C67.2222 8.9 67.6372 8.72 67.9772 8.36C68.3272 8 68.5022 7.485 68.5022 6.815C68.5022 6.145 68.3322 5.63 67.9922 5.27C67.6622 4.91 67.2522 4.73 66.7622 4.73C66.2622 4.73 65.8472 4.91 65.5172 5.27C65.1872 5.62 65.0222 6.135 65.0222 6.815C65.0222 7.485 65.1822 8 65.5022 8.36C65.8322 8.72 66.2422 8.9 66.7322 8.9Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>

                <button class="ramaroo-ugc-close ugc-r-hidden" id="ramaroo-ugc-close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- custom video controls -->
                <div class="ugc-video-controls ugc-r-hidden" id="ramaroo-ugc-video-controls">
                    <div class="ugc-video-progress ugc-r-hidden">
                        <progress class="ramaroo-player-progress" id="progress-bar" value="0" min="0" max=""></progress>
                        <input class="ugc-seek" id="ramaroo-player-seek" value="0" min="0" type="range" max="" step="1" />
                        <div class="ugc-seek-tooltip" id="seek-tooltip">00:00</div>
                    </div>

                    <div class="ramaroo-player-time ugc-r-hidden">
                        <span id="time-elapsed">00:00</span>
                        <span id="duration">00:00</span>
                    </div>
                </div>
            </div>

            <div class="ugc-video-preview" id="preview-video-container">
                <video src="${preview_url}" class="ramaroo-ugc-video-preview" loop autoplay="true" muted="true" playsinline="true" id="ramaroo-preview-video" preload="metadata">
                    <source src="${preview_url}" type="video/mp4" />
                </video>
                <button class="ramaroo-ugc-close" id="ramaroo-ugc-close-preview">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <!-- custom video controls -->
                <div class="ramaroo-ugc-review-cover">
                    <button class="ugc-open-review" id="ramaroo-ugc-open-review">
                        <svg class="ramaroo-ugc-play-review-icon">
                            <use href="#play-icon"></use>
                        </svg>
                        <span>Watch review</span>
                    </button>
                </div>
            </div>

            <div class="toggle-ramaroo-player ugc-r-hidden" id="ramaroo-ugc-toggle">
                <button class="toggle-ramaroo-player-btn" id="toggle-ramaroo-player">
                    <span>Toggle review</span>
                </button>
            </div>

            <svg style="display: none">
                <defs>
                    <symbol id="pause" viewBox="0 0 28 28">
                        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
                    </symbol>

                    <symbol id="play-icon" viewBox="0 0 28 28">
                        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
                    </symbol>
                </defs>
            </svg>

            <script>
                let videoPlayer = document.getElementById("ramaroo-video");

                videoPlayer.addEventListener("loadedmetadata", (event) => {
                    //metadata for video loaded.", event;
                });
            </script>
        `;

            document.body.appendChild(mainContainer);

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
            if (path) {
                console.log("starting....");
                ugcWrapper.classList.remove("ugc-r-hidden");
                previewVideo.classList.remove("ugc-r-hidden");
            }

            if (video.readyState > 0) {
                video.addEventListener("canplaythrough", (event) => {
                    console.log("can play through...");
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
                });
            }

            video.removeEventListener("canplaythrough");

            video.addEventListener("loadedmetadata", initializeVideo);

            const videoWorks = !!document.createElement("video").canPlayType;
            const isMobile = !window.matchMedia("only screen and (min-width: 768px)").matches;

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
            ugcWrapper.style.fontFamily = settings.fontFamily;
            toggleBtn.style.backgroundColor = settings.minimizeButtonColor;
            toggleBtn.style.color = settings.minimizeButtonColor ? "#131313" : toggleBtn.style.color;

            //  onScreen settings
            playbackIcons.forEach((element) => (element.style.color = settings.onScreenControlsColor ? settings.onScreenControlsColor : element.style.color));

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
        }
    }

    loadCss() {
        let element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", `${this.source}/css/external.css`);
        // element.setAttribute(
        //     "href",
        //     `https://res.cloudinary.com/ambrose/raw/upload/v1668670466/ramaroo-ugc-assets/external.css`
        // );
        document.getElementsByTagName("head")[0].appendChild(element);
    }
}

var data = document.querySelector('script[data-name="ugc-video-player"]');

let videoUuid = data.dataset.params;
let source = data.dataset.source;
let wid = new Widget(source);

fetch(`${source}/ugcUrlPlayer/${videoUuid}`)
    .then((res) => res.text())
    .then((path) => {
        let response = JSON.parse(path);
        console.log("resolving");
        wid.initialize(response.data.video_url, response.data.preview_url, response.data.settings);
    })
    .catch((error) => {
        // Report the error
    });
