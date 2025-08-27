const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    const response = await fetch(form.action, {
        method: form.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });

    if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
    } else {
        alert("Erro ao enviar. Tente novamente.");
    }
});

window.addEventListener("load", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.reset();
    }
});