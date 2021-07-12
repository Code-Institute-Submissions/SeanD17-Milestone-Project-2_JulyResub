//function that gets value from the contact form and sends it to the EmailJS website where it is then placed into an email template that is then sent out to me by email
function sendMail(contactForm) {
    emailjs.send("service_m0pgoxr", "template_8t12twf", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_hotel": contactForm.hotel.value,
            "from_comment": contactForm.comment.value,
            "from_people": contactForm.people.value,
        })
        //outputs message on alert saying whether or not values in the form was sent to EmailJS successfully
        .then(
            function (response) {
                document.getElementById("form").innerHTML = "Thank you for filling out the form, someone will be in contact with you shortly to answer your query", response;
                //  alert("SUCCESS", response);
            },
            function (error) {
                document.getElementById("form").innerHTML = "An error has occurred with filling out the form,please refresh the page and try again", error;
                //   alert("FAILED", error);
            }
        );
    return false;
}