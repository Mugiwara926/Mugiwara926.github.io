document.getElementById("tema-btn").onclick = () => {
    document.body.classList.toggle("acik");
}

const fare = document.getElementById("fare-nokta");
window.addEventListener("mousemove", (e) => {
    fare.style.left = e.clientX + "px";
    fare.style.top = e.clientY + "px";
});

const barlar = document.querySelectorAll('.bar-ic');
        const gozlemci = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute('data-doluluk');
                }
            });
        }, { threshold: 0.5 });

    barlar.forEach(bar => gozlemci.observe(bar));