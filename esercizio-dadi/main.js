let punteggioPlayer1 = 0;
let punteggioComputer = 0;

function gioca() {
    const facceDado = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const dadoPlayer1 = facceDado[Math.floor(Math.random() * 6)];
    const dadoComputer = facceDado[Math.floor(Math.random() * 6)];

    document.getElementById("dadoPlayer1").textContent = dadoPlayer1;
    document.getElementById("dadoComputer").textContent = dadoComputer;

    if (dadoPlayer1 > dadoComputer) {
        document.getElementById("risultato").textContent = "Player1 win!";
        punteggioPlayer1++;
    } else if (dadoComputer > dadoPlayer1) {
        document.getElementById("risultato").textContent = "Computer win!";
        punteggioComputer++;
    } else {
        document.getElementById("risultato").textContent = "Draw!";
    }

    document.getElementById("punteggioPlayer1").textContent = punteggioPlayer1;
    document.getElementById("punteggioComputer").textContent = punteggioComputer;
}
