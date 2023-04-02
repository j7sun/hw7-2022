var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

video.autoplay = false
video.loop = false
video.load

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video")

// });

let playbtn = document.querySelector("#play").addEventListener("click", clickPlay)
console.log("Play Video")
function clickPlay(){
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
}

let pausebtn = document.querySelector("#pause").addEventListener("click", clickPause)
console.log("Pause Video")
function clickPause(){
	video.pause();
}

let slowbtn = document.querySelector("#slower").addEventListener("click", clickSlow)
console.log("Slow Video")
function clickSlow(){
	video.playbackRate = video.playbackRate * 0.9
	console.log("New Speed is" + " " + video.playbackRate)
}

let fastbtn = document.querySelector("#faster").addEventListener("click",clickFast)
console.log("Fast Video")
function clickFast(){
	video.playbackRate = video.playbackRate / 0.9
	console.log("New Speed is" + " " + video.playbackRate)
}

let skipbtn = document.querySelector("#skip").addEventListener("click",clickSkip)
console.log("Skip Video")
function clickSkip(){
	video.currentTime = video.currentTime + 10
	if(video.curentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Current Time:" + " " + video.currentTime)
}

let mutebtn = document.querySelector("#mute").addEventListener("click",clickMute)
console.log("Mute Video")
function clickMute(){
	if (video.muted == false){
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
	}

	else if (video.muted == true){
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
}

let volslide = document.querySelector("#slider").addEventListener("change",changeVol)
console.log("Change Volume")
function changeVol(){
	video.volume = this.value / 100
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%"
}

let oldbtn = document.querySelector("#vintage").addEventListener("click",clickOld)
console.log("Vintage Style")
function clickOld(){
 	video.classList.add("oldSchool")
}

let origbtn = document.querySelector("#orig").addEventListener("click",clickOrig)
console.log("Original Style")
function clickOrig(){
	video.classList.remove("oldSchool")
}


