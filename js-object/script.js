$(document).ready(function() {

    var myobj = {
        "k1": "v1",
        "k2": "v2",
        "k3": "v3"

    };

    for (var key in myobj) {
        if (myobj.hasOwnProperty(key)) {
            console.log(key + " -> " + myobj[key]);
        }
    }

    function Multiplier() {
        var num = 1;
        this.multiply = function(number) {
            num = num * number;
            console.log(num);
        };
        this.getCurrentValue = function() {
            console.log(num);
        };
    }

    m = new Multiplier();
    m.multiply(3);
    m.multiply(2);
    m.multiply(2);
    m.getCurrentValue();

});

function Photo(name, location) {
    this.filename = name;
    this.location = location;
}

function Album() {
    var album = [];

    this.addPhoto = function(Photo) {
        album.push(Photo);
    };

    this.listAlbum = function() {
        for (i = 0; i < album.length; i++) {
            console.log(album[i]);
        }
    };

    this.getPhoto = function(num) {
        var i = num;
        if (album.length > i && !(i < 0)) {
            console.log(album[i]);
        } else {
            console.log("not in album. number too big.");
        }
    };
}

A = new Album();
P1 = new Photo("cat", "desktop");
P2 = new Photo("dog", "desktop");
A.addPhoto(P1);
A.addPhoto(P2);
A.listAlbum();
A.getPhoto(1);
