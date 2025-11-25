const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-btn");
const tiles = document.querySelectorAll(".cta-btn");
const logo = document.getElementById("homeClick");

function openSection(section) {
    sections.forEach(sec => sec.classList.remove("visible"));
    document.getElementById(section).classList.add("visible");

    navButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.section === section);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

navButtons.forEach(btn => {
    btn.addEventListener("click", () => openSection(btn.dataset.section));
});

tiles.forEach(tile => {
    tile.addEventListener("click", () => openSection(tile.dataset.section));
});

logo.addEventListener("click", () => openSection("homeSection"));

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

const darkToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark") ? "enabled" : "disabled"
    );
});

let allUsers = [];

function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function fetchUsers() {
    try {
        let count = document.getElementById("userCount").value;
        let gender = document.getElementById("genderFilter").value;

        document.getElementById("status").innerHTML =
            `<div class="spinner"></div>`;

        await wait(1);

        let url = `https://randomuser.me/api/?results=${count}`;
        if (gender !== "all") url += `&gender=${gender}`;

        let response = await fetch(url);
        let data = await response.json();

        allUsers = data.results;
        displayUsers(allUsers);

        document.getElementById("status").innerText =
            `${count} Users Loaded ✅`;

    } catch {
        document.getElementById("status").innerText =
            "Error fetching users ❌";
    }
}

function displayUsers(users) {
    let total = users.length;
    let male = users.filter(u => u.gender === "male").length;
    let female = users.filter(u => u.gender === "female").length;

    document.getElementById("statTotal").innerText = total;
    document.getElementById("statMale").innerText = male;
    document.getElementById("statFemale").innerText = female;
    document.getElementById("statUpdated").innerText = new Date().toLocaleTimeString();

    document.getElementById("userContainer").innerHTML = users.map(user => `
        <div class="card reveal">
            <img src="${user.picture.large}" />
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.gender}</p>
            <p>${user.email}</p>
            <p>${user.location.country}</p>
        </div>
    `).join("");

    setupRevealAnimations();
}

document.getElementById("loadUsersBtn")
    .addEventListener("click", fetchUsers);

function setupRevealAnimations() {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", setupRevealAnimations);
