const botaoTema = document.getElementById("botaoTema");
const iconeTema = document.getElementById("iconeTema");
const textoBotao = document.getElementById("textoBotao");
const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");
const cursor = document.getElementById("cursor");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        iconeTema.innerHTML = "&#9728;";
        textoBotao.innerHTML = "Modo escuro";
    } else {
        iconeTema.innerHTML = "&#9790;";
        textoBotao.innerHTML = "Modo claro";
    }
});

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("aberto");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("aberto");
    });
});

document.addEventListener("mousemove", function(evento) {
    cursor.style.left = evento.clientX + "px";
    cursor.style.top = evento.clientY + "px";
});
