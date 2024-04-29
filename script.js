const actionLinks = document.querySelectorAll(".link-card .link-action");

actionLinks.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p><strong>${action.parentElement.innerText}</strong> kopyalandı.</p>
        </div>
    `;

        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add("toast-gone");
        }, 300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000);
    });
});

function requestAudioPermission() {
    var audio = document.getElementById("myAudio");
    audio.play();
    var enterButton = document.querySelector(".button");
    enterButton.disabled = true;
    enterButton.style.opacity = "0.5"; 
}


document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});

document.addEventListener("scroll", () => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY / 10}px)`;
});

window.addEventListener("load", () => {
    document.querySelector(".preloader").style.display = "none";
});
