var count = 0;
var turn = "";
var X_patterns = [];
var O_patterns = [];
var game_over = false;
var winning_possibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let box = document.querySelectorAll(".box");

function player_turn() {
  if (count % 2 == 0) {
    turn = "X";
    count++;
  } else {
    turn = "O";
    count++;
  }
}

for (i = 0; i < 9; i++) {
  var chosen_box = box[i];
  chosen_box.addEventListener("click", click_happened);
}
function click_happened() {
  if (this.innerHTML == "") {
    player_turn();
    this.innerHTML = turn;
    if (turn == "X") {
      X_patterns.push(this.id);
      console.log(X_patterns);
    } else {
      O_patterns.push(this.id);
      console.log(O_patterns);
    }
  }
  // check_results(X_patterns);
  chech_win();
}

document.querySelector("button").addEventListener("click", restart);
function restart() {
  count = 0;
  turn = "";
  X_patterns = [];
  O_patterns = [];
  game_over = false;
  for (i = 0; i < 9; i++) {
    box[i].innerHTML = "";
    box[i].classList.remove("winner-class");
  }
  document.querySelector("h1").innerText = "Tic-Tac-Toe";
}

function chech_win() {
  if (
    box[0].innerHTML == turn &&
    box[1].innerHTML == turn &&
    box[2].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 0; i < 3; i++) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[3].innerHTML == turn &&
    box[4].innerHTML == turn &&
    box[5].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 3; i < 6; i++) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[6].innerHTML == turn &&
    box[7].innerHTML == turn &&
    box[8].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 6; i < 9; i++) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[0].innerHTML == turn &&
    box[3].innerHTML == turn &&
    box[6].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 0; i < 7; i += 3) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[1].innerHTML == turn &&
    box[4].innerHTML == turn &&
    box[7].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 1; i < 8; i += 3) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[2].innerHTML == turn &&
    box[5].innerHTML == turn &&
    box[8].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 2; i < 9; i += 3) {
      box[i].classList.add("winner-class");
    }
  } else if (
    box[0].innerHTML == turn &&
    box[4].innerHTML == turn &&
    box[8].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    box[0].classList.add("winner-class");
    box[4].classList.add("winner-class");
    box[8].classList.add("winner-class");
  } else if (
    box[2].innerHTML == turn &&
    box[4].innerHTML == turn &&
    box[6].innerHTML == turn
  ) {
    document.querySelector("h1").innerText = "Player " + turn + " wins";
    game_over = true;
    for (i = 2; i < 7; i += 2) {
      box[i].classList.add("winner-class");
    }
  }
}
// function check_results(the_array) {
//   for (k = 0; k < 9; k++) {
//     if (winning_possibilities[k] == the_array) {
//       game_over = true;
//       alert("Game Over");
//       i = 9;
//     }
//   }
// }
