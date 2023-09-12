
// This will create an array for organizing x's and o's in order to determine when a "win" occurs.
let board = [
  ["","",""],
  ["","",""],
  ["","",""]
]


// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // the following converts the element's id into row and column positions on the board.
const row = parseInt(element.id.charAt(0))
const column = parseInt(element.id.charAt(2))
console.log(row,column)

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id,row,column)
    
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id,row,column) => {

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  

  // the following will set the innerHTML property of the element that was clicked to the "currentMarker"
document.getElementById(id).innerHTML = currentMarker

// the following will insert an "X" or "O" in the multi-dimensional array, board for your JavaScript to easily access.
board[row][column] = currentMarker
console.log(board)

  checkForWin()
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null

    board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
  }  
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {

    setTimeout(function() { alert(`Player ${currentMarker} won!`); }, 1);
    
    // window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}


// The way this was set up as an if/then conditional was confusing to me, because we are only looking for true or false.
// I understand conditional statements... I was just confused by its use in this T/F instance.

// const horizontalWin = () => {
//   if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
//         || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
//         || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
//         || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
//         || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
//         || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
//     ) {
//       return true
//     }
//   else {return false}
//   }


// it seems much simpler to just do this:

const horizontalWin = () => {
return (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
        || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
        || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
        || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
        || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
        || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
}

const verticalWin = () => {
  return (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
        || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
        || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
        || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
        || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
        || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
}

const diagonalWin = () => {
  return (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
        || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
        || (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X")
        || (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
}