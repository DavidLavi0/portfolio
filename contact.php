<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email kam se zpráva pošle
    $to = "tvuj@email.cz";
    $subject = "Zpráva z portfolia";
    $body = "Jméno: $name\nEmail: $email\n\nZpráva:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Zpráva byla úspěšně odeslána.";
    } else {
        echo "Chyba při odesílání zprávy.";
    }
}
?>
