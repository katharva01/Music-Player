var aud;
var isPlaying =false;
var prev = null ;
const vari = document.querySelector("#playlist-1");
const arr = vari.querySelectorAll(".btn");
for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", playsong);
}

function playsong() {
  console.log(this.id);
  if(isPlaying==true){
    aud.pause();
    isPlaying=false;
}
if(prev!=this.id){
  prev=this.id;
  switch (this.id) {
    case "b-1":
      aud = new Audio("audio/AwazVadavDJ.mp3");
      break;
    case "b-2":
      aud = new Audio("audio/AaBhiJaMereMehermaan.mp3");
      break;
    case "b-3":
      aud = new Audio("audio/Gerua.mp3");
      break;
    case "b-4":
      aud = new Audio("audio/Mauli.mp3");
      break;
    case "b-5":
      aud = new Audio("audio/SanamRe.mp3");
      break;
    case "b-6":
      aud = new Audio("audio/IshqKarenge.mp3");
      break;
    default:
      console.log("no song found");
  }
  aud.play();
  isPlaying=true;

}
}


