// Open affiliate link with tracking
function openAffiliate(url) {
    const finalUrl = url + "&utm_source=website&utm_medium=button";
    window.open(finalUrl, "_blank");
}

// Email subscribe message
function subscribe() {
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if (!email.includes("@")) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid email!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Thank you! You will receive updates.";
    document.getElementById("email").value = "";
}
