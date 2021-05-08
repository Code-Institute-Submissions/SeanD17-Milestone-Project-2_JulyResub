function sendMail(contactForm) {
    emailjs.send("service_m0pgoxr", "template_8t12twf", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_departure": contactForm.depdate.value,
            "from_arrival": contactForm.arrdate.value,
            "from_people": contactForm.people.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error)
            }
        );
    return false;
}