const form = document.getElementById("myForm");

function sendEmail(formData) {
    const bodyMessage = `
        Your Name: ${formData.name}<br>
        Your Number: ${formData.phone}<br>
        Your Message: ${formData.message}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "idudupromise2@gmail.com", 
        Password: "580800E95290FA8997598946B61E9D8D01E8",
        To: 'atinuke727@gmail.com', 
        From: "idudupromise2@gmail.com",
        Subject: "New Form Submission",
        Body: bodyMessage,
    }).then((message) => {
        if (message === "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Failed to send message. Please try again later.",
                icon: "error"
            });
        }
    });
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
         message: document.getElementById("message").value,
    };

    sendEmail(formData);
});