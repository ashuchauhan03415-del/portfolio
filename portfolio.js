const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

// ===== CERTIFICATE SLIDER =====
const certs = [
  "certificates/SQLCERT1.png",
  "certificates/database migration.png",
  "certificates/lab.png",
];

let currentCert = 0;
const modal = document.getElementById("certModal");
const certImg = document.getElementById("certImg");

function openCerts(){
  currentCert = 0;
  modal.style.display = "flex";
  certImg.src = certs[currentCert];
}

function closeCerts(){
  modal.style.display = "none";
}

function nextCert(){
  currentCert = (currentCert + 1) % certs.length;
  certImg.src = certs[currentCert];
}

function prevCert(){
  currentCert = (currentCert - 1 + certs.length) % certs.length;
  certImg.src = certs[currentCert];
}


