/*=========================================
 NeoMart Contact Form
=========================================*/

const contactForm = document.getElementById("contactForm");

/*=========================
Form Submit
=========================*/

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    /*=========================
    Empty Validation
    =========================*/

    if(name === ""){

        alert("Please Enter Your Name");

        return;

    }

    if(email === ""){

        alert("Please Enter Your Email");

        return;

    }

    if(subject === ""){

        alert("Please Enter Subject");

        return;

    }

    if(message === ""){

        alert("Please Enter Your Message");

        return;

    }

    /*=========================
    Email Validation
    =========================*/

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please Enter a Valid Email Address");

        return;

    }

    /*=========================
    Success
    =========================*/

    alert("✅ Thank You " + name + "!\n\nYour message has been sent successfully.");

    contactForm.reset();

});