const form = document.getElementById("contact-form");
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    }
  });

