// Toggle menu (small screens)
document.getElementById("nav-toggle").onclick = (e) => {
    document.getElementById("nav-toggle").classList.toggle("open");
    document.getElementById("nav-list").classList.toggle("show");
};

// Exercise 1 link - show Missing Class Points Deduction, hide End of Semester Counter
document.getElementById("nav-exercise-1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("card-attendance").classList.add("show");
    document.getElementById("card-semester-counter").classList.remove("show");
};

// Exercise 2 link - show End of Semester Counter, hide Missing Class Points Deduction
document.getElementById("nav-exercise-2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("card-semester-counter").classList.add("show");
    document.getElementById("card-attendance").classList.remove("show");
};

// Exercise 1 - Missing Class Points Deduction
document.getElementById("days-input").onkeyup = (e) => {
    let days = parseInt(e.target.value);
    let percentLost = days * 0.28;
    document.getElementById("deduction-result").innerHTML = "You will loose " + percentLost.toFixed(2) + "% for skipping " + days + " days.";

    if (days == 0) {
        document.getElementById("deduction-message").innerHTML = "You have perfect attendance! Keep it up!";
    } else if (days < 0) {
        document.getElementById("deduction-message").innerHTML = "Please enter a positive number.";
    } else if (days > 0 && days <= 3) {
        document.getElementById("deduction-message").innerHTML = "A few absences here and there won't hurt much, but try to keep absences to a minimum.";
    } else if (days > 3 && days <= 7) {
        document.getElementById("deduction-message").innerHTML = "You are starting to rack up some absences. Make sure to catch up on any missed work and start showing up!";
    } else if (days > 7 && days <= 14) {
        document.getElementById("deduction-message").innerHTML = "This is not an online class. You are missing valuable learning opportunities";
    } else if (days > 14 && days <= 21) {
        document.getElementById("deduction-message").innerHTML = "You are missing a lot of class. You are going to have a hard time passing this class.";
    } else if (days > 21) {
        document.getElementById("deduction-message").innerHTML = "You are missing nearly every class. Talk to your professor immediately.";
    }
};

// Exercise 2 - End of Semester Counter
let today = new Date();
let lastDay = new Date(today.getFullYear(), 11, 4); // December 4th (month is 0-based, so 11 = December I did not know this until I looked it up)
let daysLeft = Math.round((lastDay - today) / (1000 * 60 * 60 * 24));

document.getElementById("days-left-result").innerHTML = "There are " + daysLeft + " days left in the semester.";
if (daysLeft > 60) {
    document.getElementById("semester-message").innerHTML = "You have plenty of time to finish the semester strong!";
} else if (daysLeft > 30 && daysLeft <= 60) {
    document.getElementById("semester-message").innerHTML = "You're in the thick of the semester — keep the momentum going.";
} else if (daysLeft > 14 && daysLeft <= 30) {
    document.getElementById("semester-message").innerHTML = "The finish line is in sight, but don't start coasting yet.";
} else if (daysLeft > 7 && daysLeft <= 14) {
    document.getElementById("semester-message").innerHTML = "Crunch time is here. Finals are right around the corner.";
} else if (daysLeft > 0 && daysLeft <= 7) {
    document.getElementById("semester-message").innerHTML = "Almost there! Just a few more classes standing between you and winter break.";
} else if (daysLeft == 0) {
    document.getElementById("semester-message").innerHTML = "Today is the last day of class! Good luck on your finals and have a great winter break!";
} else if (daysLeft < 0) {
    document.getElementById("semester-message").innerHTML = "The semester is over! I hope you did well and have a great winter break!";
};