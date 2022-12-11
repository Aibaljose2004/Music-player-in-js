
$(document).ready(function () {
    var btn = $(".button");
    btn.click(function () {
        btn.toggleClass("paused");
        return false;
    });
});


var myAudio = document.getElementById("myAudio");
var isPlaying = false;
var songs = ["assets/song/minal.mp4", "assets/song/Aaraadhike.mp3", "assets/song/minal.mp4"];
var c=0;


function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function () {
    isPlaying = true;
};
myAudio.onpause = function () {
    isPlaying = false;
};




function play() {
    
    
    console.log(c)
    var source = document.getElementById('myAudio');
    source.src = songs[c];
    c = c + 1;
    if (c==2 ){
        
        document.getElementById("img").src = "https://i.scdn.co/image/ab67616d0000b273eeaeba6855f0979411b0a25c";
        

    }else {
        document.getElementById("img").src = "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNkznjJ3B/size_l_1642660989.webp";
    }; 
  
     //call this to play the song right away
  };
  function playb() {
    
    
    console.log(c)
    var source = document.getElementById('myAudio');
    source.src = songs[c];
    c = c - 1;
    if (c==2 ){
        document.getElementById('text').innerHTML = 'Aaraadhike';
        document.getElementById("img").src = "https://i.scdn.co/image/ab67616d0000b273eeaeba6855f0979411b0a25c";
        

    } else {
        document.getElementById("img").src = "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNkznjJ3B/size_l_1642660989.webp";
    }; 
    
  
    //call this to play the song right away
  };
