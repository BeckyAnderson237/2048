document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
        });
    });
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
});
