/* ==== Welcome Message ==== */
// Prompt the user for their name
const userName = prompt("Welcome! What's your name?");

// Select the header element to display a personalized greeting
const welcomeElement = document.getElementById("welcomeMessage");

// Check if the user entered a valid name
if (userName && userName.trim() !== "") {
          welcomeElement.textContent = `Welcome, ${userName}!`;
} else {
    welcomeElement.textContent = "Welcome to My Homepage!";
}
        
/* ==== LOOP → DISPLAY SKILLS IN ABOUT SECTION ==== */
const skills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C"];
const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

/* ==== CONDITIONAL LOGIC → FEATURED CONTENT ===== */
const projectImages = document.querySelectorAll("#projects img");
const universityDiv = document.getElementById("universityResources");
const personalProjectsDiv = document.getElementById("personalProjects");
if (projectImages.length < 3) {
    universityDiv.style.display = "block";
    personalProjectsDiv.style.display = "block";
} else {
    universityDiv.style.display = "none";
    personalProjectsDiv.style.display = "block";
}

/* ==== DARK MODE TOGGLE ===== */
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

/* ==== FORM SUBMIT INTERACTIVITY ==== */
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const senderName = document.getElementById("name").value;
    alert(`Thank you, ${senderName}, your message has been sent!`);
});