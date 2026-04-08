document.getElementById("tema-btn").onclick = () => {
    document.body.classList.toggle("acik");
}

const fare = document.getElementById("fare-nokta");
window.addEventListener("mousemove", (e) => {
    fare.style.left = e.clientX + "px";
    fare.style.top = e.clientY + "px";
});