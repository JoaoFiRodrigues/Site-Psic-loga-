<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $to = "amandabalanpsicologa@outlook.com"; 
    $subject = "Nova mensagem do site - Contato";
    $body = "Você recebeu uma nova mensagem do formulário:\n\n".
            "Nome: $nome\n".
            "E-mail: $email\n\n".
            "Mensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar mensagem. Tente novamente.'); window.location.href='index.html';</script>";
    }
}
?>
