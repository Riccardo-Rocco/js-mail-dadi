
const utentiAutorizzati = ["Paperino@gmail.com", "Topolino@gmail.com", "Pluto@gmail.com"];

function controllaAccesso() {
    const emailInput = document.getElementById("email");
    const messaggioOutput = document.getElementById("messaggio");
    
    const emailInserita = emailInput.value;
    
    if (utentiAutorizzati.includes(emailInserita)) {
        messaggioOutput.innerHTML = "Accesso autorizzato!";
    } else {
        messaggioOutput.innerHTML = "Accesso negato!";
    }
}
