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