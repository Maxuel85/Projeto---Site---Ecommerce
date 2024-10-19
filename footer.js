document.getElementById("login-icon").addEventListener("click", function() {
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});

var chatIcon = document.getElementById("chat-icon");
var chatWindow = document.getElementById("chat-window");
var closeChat = document.getElementById("close-chat");

chatIcon.addEventListener("click", function() {
    chatWindow.style.display = "block";
});

closeChat.addEventListener("click", function() {
    chatWindow.style.display = "none";
});

let criarConta = document.querySelector(".create-account");

criarConta.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

let logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
    window.location.href = "pag inicial.html";
});

let carrinho = document.getElementById("sacola");

carrinho.addEventListener("click", function() {
    window.location.href = "carrinho.html";
});

let home = documento.getElementById("Home");

document.addEventListener('DOMContentLoaded', function() {
    let sobre = document.querySelector('nav ul li:nth-child(2)'); // Seleciona o item "Sobre"
    let submenu = sobre.querySelector('ul'); // Seleciona o submenu "Quem Somos"
    let timeout;

    // Mostrar o submenu ao passar o mouse
    sobre.addEventListener('mouseenter', function() {
        clearTimeout(timeout);  // Limpa o timeout se houver um
        submenu.style.display = 'block';  // Exibe o submenu
    });

    // Ocultar o submenu com atraso ao sair do mouse
    sobre.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
            submenu.style.display = 'none';  // Esconde o submenu após 500ms
        }, 500);  // Tempo de atraso de 500ms
    });

    // Manter o submenu visível se o mouse estiver sobre ele
    submenu.addEventListener('mouseenter', function() {
        clearTimeout(timeout);  // Cancela o timeout quando o mouse está sobre o submenu
    });

    // Ocultar o submenu quando o mouse sair dele com o mesmo atraso
    submenu.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
            submenu.style.display = 'none';  // Esconde o submenu após 500ms
        }, 500);
    });
});
