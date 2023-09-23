document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Verify the reCAPTCHA response before sending the email
    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert("Veuillez compléter le CAPTCHA avant d'envoyer le formulaire.");
        return;
    }

    const message = document.getElementById("message").value;
    const destinataire = "your@email.com"; // Replace with your email address
    const sujet = "Nouveau message depuis le site web";

    // You may remove the Email.js initialization from here, as it doesn't require it for reCAPTCHA V2

    // Use the Email.js library to send the email
    emailjs.send("service_jrg3fki", "template_98ao727", {
        to_email: destinataire,
        subject: sujet,
        message_html: message
    }).then(function(response) {
        console.log("E-mail envoyé avec succès", response);
        alert("Message envoyé avec succès");
        document.getElementById("myForm").reset();
    }).catch(function(error) {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
        alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
    });
});
