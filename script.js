const projeListesi = [
    { ad: "E-Ticaret Sitesi", kat: "web", ozet: "Full stack online alışveriş platformu." },
    { ad: "Macera Oyunu", kat: "oyun", ozet: "Unity ile geliştirilen 2D platformer." },
    { ad: "Finans Paneli", kat: "web", ozet: "Kullanıcı gelir-gider takip sistemi." },
    { ad: "Zombi Survival", kat: "oyun", ozet: "C# tabanlı hayatta kalma mekaniği." },
    { ad: "Kişisel Blog", kat: "web", ozet: "Next.js ile modern blog sitesi." },
    { ad: "Uzay Yarışı", kat: "oyun", acik: "Retro tarzı arcade oyun denemesi." }
];

const izgara = document.getElementById("proje-duzen");
function projeSuz(kategori) {
    izgara.innerHTML = "";
    const suzulenler = kategori === "hepsi" ? projeListesi : projeListesi.filter(p => p.kat === kategori);

    suzulenler.forEach(p => {
        const kart = document.createElement("div");
        kart.className = "proje-kart";
        kart.innerHTML = `<h3>${p.ad}</h3><p>${p.ozet || p.acik}</p>`;
        izgara.appendChild(kart);
    });

    document.querySelectorAll(".filtre-btn").forEach(btn => {
        btn.classList.remove("aktif");
        if(btn.innerText.toLowerCase() === kategori || (kategori === "hepsi" && btn.innerText === "Hepsi")) {
            btn.classList.add("aktif");
        }
    });
}

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





window.onload = () => {
    projeSuz("hepsi");
    daktilo();
};