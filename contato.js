try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextarea = document.querySelector("#mensagem")
    const enviarBtn = document.querySelector("#enviar-btn");

    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;
        if (nomeInput.value.trim() === '') {
            valido = false;
            alert("Por favor, Preencha o formulario!");
        }

        if (mensagemTextarea.value.trim() === '') {
            valido = false;
            alert("Mensagem não pode ser vazia!")
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("PREENCHA")

        }
        if (valido) {
            alert("Agradecemos seu contato!");
            form.submit();
        }
    }

    enviarBtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message)
}