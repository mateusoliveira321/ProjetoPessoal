document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    
    const kachowAudio = new Audio("kachow.mp3");
    
    const kachowButton = document.createElement("button");
    kachowButton.innerText = "Gritar Ka-Chow! (0)";
    kachowButton.className = "btn btn-danger btn-lg mt-4 fw-bold shadow";
    
    let clicks = 0;
    kachowButton.addEventListener("click", () => {
        clicks++;
        kachowButton.innerText = `Gritar Ka-Chow! (${clicks})`;
        
        kachowAudio.currentTime = 0;
        kachowAudio.play().catch(error => {
            console.log("O navegador bloqueou a reprodução automática de áudio sem interação prévia ou o arquivo de áudio não foi encontrado.", error);
        });
    });

    homeSection.appendChild(kachowButton);

    const form = document.querySelector("#contato form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const nome = document.getElementById("nome").value;
        alert(`Valeu, ${nome}! Sua mensagem foi enviada para o box do Relâmpago Marquinhos com sucesso! 🏎️💨`);
        form.reset();
    });
});