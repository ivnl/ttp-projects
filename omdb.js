// $(document).ready(function() {

//     var minlength = 3;

//     $("#search").onkeyup = (function() {
//         // value = $('input[name=t]').val();

//         // if (value.length >= minlength) {
//         $.getJSON("http://www.omdbapi.com/?", {
//                 t: $('input[name=t]').val(),
//             },
//             function(response) {
//                 $("#movie-title").html(response.Title);
//                 $("#poster").attr("src", response.Poster);
//                 console.log(response);
//             });
//         // }
//     });
// });


function lookup() {

    var minlength = 3;

    value = $('input[name=t]').val();

    if (value.length < 3) {
        $("#movie-title").html("");
        $("#poster").attr("src", "");
    }

    if (value.length >= minlength) {
        $.getJSON("http://www.omdbapi.com/?", {
                t: $('input[name=t]').val(),
            },
            function(response) {
                $("#movie-title").html(response.Title);
                $("#poster").attr("src", response.Poster);
                console.log(response);
            });
    }

}

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
