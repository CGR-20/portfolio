// Inject partials into header/footer
// this will allow me to avoid repeating code in multiple files
function loadPartial(id, file) {
  // inject header/footer html
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // modify header specific code
      if (id === "header") {
        // work on other stuff instead
        /*
        const container = document.querySelector("header");

        const allElements = container.querySelectorAll("nav a");

        allElements.forEach(element => {
          console.log(element.text)
        });
        */

        /*
        //const current = location.pathname.split("/").pop().replace(".html", "") || "index";

        // highlight the current page in the nav (currently now working)
        //document.querySelectorAll(`#${id} nav a`).forEach(link => {
        document.querySelectorAll(`#${id} nav a`).forEach(link => {
          if (link.dataset.page === current) link.classList.add("active");
        });
        */
      }

      // modify footer specific code
      if (id === "footer") {
        // update the year in the footer automatically
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      }
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

// execute function when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "partials/root_header.html");
  loadPartial("footer", "partials/footer.html");
});
