document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const attendance = document.getElementById("attendance").value;
    const responseMessage = document.getElementById("responseMessage");
    const guestList = document.getElementById("guestList");
  
    // Input validation
    if (!name || !email || !attendance) {
      responseMessage.textContent = "Please fill in all fields correctly.";
      responseMessage.style.color = "red";
      return;
    }
  
    // Simulate RSVP submission
    const guestItem = document.createElement("li");
    guestItem.textContent = `${name} (${email}) - ${attendance === "yes" ? "Attending" : "Not Attending"}`;
    guestList.appendChild(guestItem);
  
    // Display thank you message
    responseMessage.textContent = `Thank you, ${name}, for your response!`;
    responseMessage.style.color = "green";
  
    // Reset form
    document.getElementById("rsvpForm").reset();
  });
  