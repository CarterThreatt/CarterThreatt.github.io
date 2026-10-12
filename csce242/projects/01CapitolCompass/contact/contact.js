// PROJECT PART 7 - CONTACT FORM
// The form is in contact/index.html. When it is filled out correctly it is sent with Web3Forms,
// which emails the message to me. The page does not reload, the message shows up next to the button.
// https://web3forms.com/

const access_key = "2801a341-751d-4df1-9259-048a80687f3d";

const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");
const result = document.getElementById("form-result");

// Waits so the feedback does not flicker if the form sends really fast
const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const showResult = (text, type) => {
    result.textContent = text;
    result.className = type;
};

const sendForm = async () => {
    const formData = new FormData(form);
    formData.append("access_key", access_key);
    formData.append("subject", "New message from the Capitol Compass contact form");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    return response.json();
};

// The browser checks required, the email format and the message length before this runs
form.onsubmit = async (e) => {
    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";
    showResult("Sending your message...", "pending");

    try {
        // Promise.all keeps the "Sending" feedback up for about 1 second
        const [data] = await Promise.all([sendForm(), wait(1000)]);

        if (data.success) {
            showResult("Thank you! Your message was sent.", "success");
            form.reset();
        } else {
            showResult("Sorry, your message was not sent. Please try again.", "error");
        }
    } catch (error) {
        await wait(1000);
        showResult("Something went wrong and your message was not sent. Please try again.", "error");
    }

    button.disabled = false;
    button.textContent = "Send Message";
};
