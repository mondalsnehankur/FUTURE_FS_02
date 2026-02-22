// Get form and message elements
const form = document.getElementById("leadForm");
const responseMessage = document.getElementById("responseMessage");

// Handle form submission
form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    // Collect form data
    const leadData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    try {
        // Send data to backend
        const response = await fetch("http://localhost:5000/api/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(leadData)
        });

        const data = await response.json();

        if (response.ok) {
            responseMessage.style.color = "green";
            responseMessage.textContent = "Lead submitted successfully!";
            form.reset();
        } else {
            responseMessage.style.color = "red";
            responseMessage.textContent = data.error || "Something went wrong";
        }

    } catch (error) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Server not reachable";
        console.error(error);
    }
});