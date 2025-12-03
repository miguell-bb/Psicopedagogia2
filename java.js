function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
            let msg = document.getElementById("mensagem").value.trim();
            let status = document.getElementById("msgStatus");

            if (nome === "" || email === "" || msg === "") {
                status.textContent = "Preencha todos os campos!";
                status.style.color = "red";
            } else {
                status.textContent = "Mensagem enviada com sucesso!";
                status.style.color = "green";

                form.reset();
            }
        });
    }
});
