let cont = 0;
let partida = { numero: cont ,jogador1: "p1",jogador2: "Raylla", vencedor: "Raylla"};

let partidas = [
  {numero: "Nº partida", jogador1: "Vencedor", jogador2: "Jogador1", vencedor: "Jogador2"},
  {numero: 2, jogador1: "Rubens", jogador2: "Raylla", vencedor: "Raylla"},
  {numero: 3, jogador1: "Rubens", jogador2: "Willian", vencedor: "Willian"},
  {numero: 4, jogador1: "Pedro", jogador2: "Willian", vencedor: "Pedro"}
];
localStorage.setItem("partidas", JSON.stringify(partidas));

let addNewLine = () => {
  cont++;
  localStorage.setItem("numerop",cont);
  let partidas = JSON.parse(localStorage.getItem("partidas"));
  for(let i in partidas){
    let partida = partidas[i];
    var table = document.getElementById("mytable");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3); 

    cell1.innerHTML = partida.numero;
    cell2.innerHTML = partida.jogador1;
    cell3.innerHTML = partida.jogador2;
    cell4.innerHTML = partida.vencedor;
  }

}