window.onload = function () {
    var timerPato;
    timerPato = setInterval(function () {
        for (count = 1; count <= inputNumeros; count++) {
            document.getElementById("elementos").innerHTML += "<img id='pato' + count + "' src='imgs/patos.png' class='elementos'/>"
            document.getElementById("pirilampo" + count).style.position = "absolute";
            coord_y = Math.floor(Math.random() * innerHeight) + 1;
            coord_x = Math.floor(Math.random() * innerWidth) + 1;
            document.getElementById("patos" + count).style.top = coord_y + "px";
            document.getElementById("patos" + count).style.left = coord_x + "px";
        }
    }, 2000)
}