$(document).ready(function() {
    var imgArray = [];

    $("#search").on("submit", function(e) {
        e.preventDefault();
        var formData = {
            'q': $('input[name=q]').val(),
            'type': $('input[name=type]').val()
        };
        $.ajax({
            type: "GET",
            url: 'https://api.spotify.com/v1/search',
            data: formData,
            success: function(response) {
                clearBox("images");
                var artistArray = response.artists.items;
                var src = document.getElementById("images");

                for (var i = 0; i < artistArray.length; i++) {
                    for (var j = 0; j < artistArray[i].images.length; j++) {
                        var img = document.createElement("img");

                        img.src = artistArray[i].images[j].url;
                        src.appendChild(img);

                        imgArray.push(artistArray[i].images[j].url);
                        console.log(artistArray[i].images[j].url);

                    }
                }
                console.log("------------------------------------------------\n\n\n\n\n\n\n\n\n");
            }
        });
    });
});

function postImages(imgarray) {

}

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


// print artist names found
// for (var i = 0; i < artistArray.length; i++) {

//     $("body").html(artistArray[i].name);
//     console.log(artistArray[i].name);
// }


function validateForm() {

    var name = document.getElementById('name').value;

    if (name == "") alert("EMPTY NAME");

    else if (Cookies.get(name) != null) {
        alert(Cookies.get(name));
    } else {
        Cookies.set(name, "WELCOME BACK " + name);
        funstuff();
    }
    return false;
}


function funstuff() {



}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
