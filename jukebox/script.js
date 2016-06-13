var currentSong;
var lastSong;
var lastInt = -1;
var playList = [];

$(document).ready(function() {
    console.log("script.js loaded");

    //prevent user from pressing enter, because it reloads the whole page
    $('#path').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13 && document.getElementById('path').value !== '') {
            e.preventDefault();
            return false;
        }
    });

});

//jukebox object
function jukeBox() {

    //add song objects to global playList array
    this.addSong = function(song) {
        playList.push(song);
    };

    //stop the song currently playing by pausing and setting play time to 0
    this.stop = function() {
        console.log("stop");

        if (!document.getElementById('player').paused) {
            document.getElementById('player').pause();
            document.getElementById('player').currentTime = 0;
            document.getElementById("pp").className = "fa fa-play";
        }
    };

    //play function that plays or pauses the current song and changes icon accordingly
    this.play = function() {
        console.log("play");
        currentSong = document.getElementById('source').src;

        var ply = document.getElementById('player');

        if (!document.getElementById('player').paused) {
            document.getElementById('player').pause();
            document.getElementById("pp").className = "fa fa-play";

        } else {
            document.getElementById('player').play();
            document.getElementById("pp").className = "fa fa-pause";
        }
    };

    //next button that moves to another random song from the play list
    this.next = function() {
        lastSong = document.getElementById('source').src;

        var randInt = Math.floor((Math.random() * 8) + 0);

        while (randInt == lastInt) {
            randInt = Math.floor((Math.random() * 8) + 0);
        }

        lastInt = randInt;

        var path = playList[randInt].location;

        document.getElementById('link').innerHTML = path;
        document.getElementById('source').src = path;
        console.log(document.getElementById('source').src);

        try {
            document.getElementById("player").load(); //reloads player with new source set
            this.play();
        } catch (err) {
            console.log(err.message);
        }
        return false;
    };

    //change song function when user submits a link or file path
    this.changeSong = function() {

        var path = document.getElementById('path').value;
        document.getElementById('link').innerHTML = path;

        document.getElementById('source').src = path;
        console.log(document.getElementById('source').src);

        try {
            document.getElementById("player").load();
            this.play();
        } catch (err) {
            console.log(err.message);
        }
        return false;
    };
}

function song(name, location) {
    this.filename = name;
    this.location = location;
}

//initialize jukeBox object and name it jb
jb = new jukeBox();

//initialize a collection of song objects to be stored in to jb
s1 = new song("Main", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/lhxwqydsrn/101-title.mp3");
s2 = new song("Streamside", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/fafhyhucvv/112-streamside.mp3");
s3 = new song("Payon", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/pigushvwpp/114-theme-of-payon.mp3");
s4 = new song("Tower", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/kbdjgknoeb/121-through-the-tower.mp3");
s5 = new song("Aldebaran", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/tutdlznrto/213-theme-of-al-de-baran.mp3");
s6 = new song("Wind", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/ommqgdimqg/107-wind-of-tragedy.mp3");
s7 = new song("Tread", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/gizvviyqlj/105-tread-on-the-ground.mp3");
s8 = new song("Forest", "http://216.227.134.162/ost/ragnarok-online-original-soundtrack/rcqzhdnfcg/103-peaceful-forest.mp3");

//add the song objects to jb object through the addSong method
jb.addSong(s1);
jb.addSong(s2);
jb.addSong(s3);
jb.addSong(s4);
jb.addSong(s5);
jb.addSong(s6);
jb.addSong(s7);
jb.addSong(s8);
