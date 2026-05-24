// Inject partials into header/footer
// this will allow me to avoid repeating code in multiple files
function addSkills(skills) {
    const skillsContainer = document.querySelector(".container-skills .skills");
    
    skills.forEach(skill => {
        const chip = document.createElement("span");
        chip.classList.add("chip");
        chip.textContent = skill;
        skillsContainer.appendChild(chip);
    });
}

function sendMessages(messages) {
    messages.forEach((msg, index) => {
        setTimeout(() => {
            console.log(msg);
        }, index * 2000); // delay each message by 2 seconds
    });
}

// execute function when page loads
document.addEventListener("DOMContentLoaded", () => {
    // sendMessage("Hello there");
});
