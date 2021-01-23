
var modal = document.getElementById('myModal'); //берем модальное окно


var btn = document.getElementById("myBtn"); //кнопка открыть


var span = document.getElementsByClassName("close")[0]; //кнопка закрыть


btn.onclick = function() {
    modal.style.display = "block"; // при клике открыть, появляется модальное окно
}


span.onclick = function() {
    modal.style.display = "none"; // при клике крестика, убирается модальное окно
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // при клике мимо окна, убирается модальное окно
    }
}
