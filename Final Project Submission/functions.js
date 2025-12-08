/* ==== CUSTOM WELCOME MODAL ==== */
const modal = document.getElementById("welcomeModal");
const closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
        
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

/* ==== DARK MODE TOGGLE WITH LOCAL STORAGE ==== */
const darkToggle = document.getElementById("darkModeToggle");

// Apply saved preference on load
const savedMode = localStorage.getItem("darkMode");

if (savedMode === "enabled") {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
  darkToggle.checked = true; // slider position
}

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

/* ===== DYNAMICALLY ADD NEW SECTION/CONTENT ===== */
// Create a new paragraph for Projects section
const newProjectParagraph = document.createElement("p");
newProjectParagraph.textContent =
  "Recently, I created an interactive JavaScript application that demonstrates dynamic DOM manipulation.";
document.getElementById("projects").appendChild(newProjectParagraph);

// Add a notification at the top of the page after delay
setTimeout(() => {
  const notice = document.createElement("div");
  notice.textContent = "New content added to the site!";
  notice.style.background = "#0073e6";
  notice.style.color = "white";
  notice.style.padding = "10px";
  notice.style.textAlign = "center";
  notice.style.fontWeight = "bold";
  document.body.prepend(notice);
}, 2000);  // appears after 2 seconds


/* ===== MODIFY EXISTING ELEMENTS USING SELECTORS ===== */
// Change About section heading text
const aboutHeading = document.querySelector("#aboutMe h2");
aboutHeading.textContent = "About Me (Updated with JavaScript)";

// Add border + background to Featured section
const featuredSection = document.getElementById("featured");
featuredSection.style.border = "2px solid #0073e6";
featuredSection.style.padding = "10px";
featuredSection.style.backgroundColor = "#eef7ff";


/* ===== TIMED CONFIRMATION MESSAGE FOR FORM SUBMISSIONS AND INTERACTIVITY ===== */
const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  const statusBox = document.getElementById("formStatus");
  const senderName = document.getElementById("name").value;

  // Show loading message
  statusBox.textContent = "Sending message...";
  statusBox.style.color = "orange";

  // Simulate delay
  setTimeout(() => {
    statusBox.textContent = `Thank you, ${senderName}, your message has been sent!`;
    statusBox.style.color = "green";
  }, 2500); // 2.5 seconds delay
});