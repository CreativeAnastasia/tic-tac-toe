var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 1;
$turn = document.querySelector('.turn');
  $turn.innerHTML = 'X turn';


function changeTurn () {
  if (turn === 1){
      $turn.innerHTML = 'O turn';
      turn = -1
  } else {
    $turn.innerHTML = 'X turn';
    turn = 1;
  }
}

function start() {
  document.querySelector('.trx').addEventListener('click', update);
};

function update(evt){
  // grab the element
  var el = evt.target;

  // get the index for the cell that you clicked on
  var cellNumber = parseInt(evt.target.classList[1]);

  // get the value of turn and update the element in the state array that
  // corresponds to the cell you clicked on

  // cellNumber = 2
  // state[2] === 0

  if (state[cellNumber] === 0){
    state[cellNumber] = turn;
    changeTurn();
  }
  winner(state);
  render(state);
}


function render(state){
  var cells = document.getElementsByClassName('cell');
  for (var i=0; i < state.length; i++){
    var current = state[i];
    if (current === 1){
      cells[i].innerHTML = 'X';
    }
    if (current === -1) {
      cells[i].innerHTML = 'O';
    }
    if (current === 0) {
      cells[i].innerHTML = "";
    }
  }
}


function winner(state){
   var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    $winner = document.querySelector('.winner');
   for (var i=0; i <winCombinations.length; i++) {
        var combo = winCombinations[i];
        var a = state[combo[0]];
        var b = state[combo[1]];
        var c = state[combo[2]];
        var sum = a+b+c;
        if (sum === 3){
          $winner.innerHTML = 'X Wins!';


        }
        else if (sum === -3){
          $winner.innerHTML = 'O Wins!';
        }
   }
   if (state.indexOf(0) === -1) { // else if there are no zeros left
     $winner.innerHTML = 'Tie!';
   }


}


$("#restart").on('click', function(e) {
    state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    changeTurn(1);
    $winner.innerHTML = "";
    render(state);

      });



start(state);

