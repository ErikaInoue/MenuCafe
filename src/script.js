var modal = document.getElementById("formulario");

var btnSolicitarProd1 = document.getElementById("solicitar-prod-1");
btnSolicitarProd1.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd2 = document.getElementById("solicitar-prod-2");
btnSolicitarProd2.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd3 = document.getElementById("solicitar-prod-3");
btnSolicitarProd3.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd4 = document.getElementById("solicitar-prod-4");
btnSolicitarProd4.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd5 = document.getElementById("solicitar-prod-5");
btnSolicitarProd5.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd6 = document.getElementById("solicitar-prod-6");
btnSolicitarProd6.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd7 = document.getElementById("solicitar-prod-7");
btnSolicitarProd7.onclick = function () {
    modal.style.display = "block";
};

var btnSolicitarProd8 = document.getElementById("solicitar-prod-8");
btnSolicitarProd8.onclick = function () {
    modal.style.display = "block";
};

var span = document.getElementsByClassName("fechar")[0];

span.onclick = function () {
    modal.style.display = "none";
};

var btnEnviar = document.getElementById("enviar");

btnEnviar.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
