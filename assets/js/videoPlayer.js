/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("var video = document.querySelector(\"video\");\nvar playBtn = document.getElementById(\"play\");\nvar muteBtn = document.getElementById(\"mute\");\nvar time = document.getElementById(\"time\");\nvar volumeRange = document.getElementById(\"volume\");\nvar currenTime = document.getElementById(\"currenTime\");\nvar totalTime = document.getElementById(\"totalTime\");\nvar timeline = document.getElementById(\"timeline\");\nvar fullScreenBtn = document.getElementById(\"fullScreen\");\nvar videoContainer = document.getElementById(\"videoContainer\");\nvar videoControls = document.getElementById(\"videoControls\");\nvar controlsTimeout = null;\nvar controlsMovementTimeout = null;\nvar volumeValue = 0.5;\nvideo.volume = volumeValue;\n\nvar handlePlayClick = function handlePlayClick(e) {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n\n  playBtn.innerText = video.paused ? \"Play\" : \"Pause\";\n};\n\nvar handlePause = function handlePause() {\n  return playBtn.innerText = \"Play\";\n};\n\nvar handlePlay = function handlePlay() {\n  return playBtn.innerText = \"PPause\";\n};\n\nvar handleMuteClick = function handleMuteClick(e) {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n\n  muteBtn.innerText = video.muted ? \"Unmute\" : \"Mute\";\n  volumeRange.value = video.muted ? 0 : 0.5;\n};\n\nvar handleVolumeChange = function handleVolumeChange(event) {\n  var _input = input,\n      value = _input.target.value;\n\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText(\"Mute\");\n  }\n\n  volumeValue = value;\n  video.volume = value;\n};\n\nvar formatTime = function formatTime(seconds) {\n  return new Date(seconds * 1000).toISOString().substr(11, 8);\n};\n\nvar handleLoadedMetadata = function handleLoadedMetadata() {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n};\n\nvar handleTimeUpdate = function handleTimeUpdate() {\n  currenTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\n\nvar handleTimelineChange = function handleTimelineChange(event) {\n  var value = event.target.value;\n  video.currentTime = value;\n};\n\nvar handleFullScreen = function handleFullScreen() {\n  var fullscreen = document.fullscreenElement;\n\n  if (fullscreen) {\n    document.exitFullscreen();\n    fullScreenBtn.innerText = \"Enter Full Screen\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenBtn.innerText = \"Exit Full Screen\";\n  }\n};\n\nvar hideControls = function hideControls() {\n  return videoControls.classList.remove(\"showing\");\n};\n\nvar handleMouseMove = function handleMouseMove() {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n\n  videoControls.classList.add(\"showing\");\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\n\nvar handleMouseLeave = function handleMouseLeave() {\n  controlsTimeout = setTimeout(hideControls, 3000);\n};\n\nvar handelEnded = function handelEnded() {\n  var id = videoContainer.dataset.id;\n  fetch(\"/api/videos/\".concat(id, \"/view\"), {\n    method: \"POST\"\n  });\n};\n\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMuteClick);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\nvideo.addEventListener(\"mousemove\", handleMouseMove);\nvideo.addEventListener(\"mouseleave\", handleMouseLeave);\nvideo.addEventListener(\"pause\", handlePause);\nvideo.addEventListener(\"play\", handlePlay);\nvideo.addEventListener(\"ended\", handelEnded);\n\n//# sourceURL=webpack://ljmtube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;