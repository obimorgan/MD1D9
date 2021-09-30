// <!-- BINGO CHALLENGE!
// Create programmatically (using JS) a bingo board with 76 cells, numbered from 1 to 76.
// Create a button to randomize a number from 1 to 76. The cell with same number should be highlighted in some way on the bingo board.
// EXTRA: 

// - Make sure to always select a new number (eg. avoid randoming the number 10 three times).

// - Create a user board with 24 randomized numbers that highlights as the main board does.

// - Let the user choose how many user boards he's willing to play with and generate them before starting to play. -->


// To Do:
// Create a board  from 1 to 76 cells >> done
// assign number from 1 to 76 to each board >> done

const displayBingoBoard = function () {

    const bingoBoardContainerNode = document.getElementById("bingo-board")

    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {

        let newCells = document.createElement("div") // creating board cells div elements
        newCells.classList.add("cells") //adding class called cells
        newCells.innerHTML = cellNumber //inserting cell number from 1 top 76
        bingoBoardContainerNode.appendChild(newCells)//adding new cells to the bingo board
    }


}
//To Do:
// create a function to randomised number from 1 - 76 >> done

// link the button to the number generating function >> 
// link the number that has been called to the corresponding cell (1 to 76) >>



const whenAnnumberIsCalled = function () {

    const randomisedNumber = function () {
        return Math.floor(Math.random() * 76)
    }

    let bingoNumber = randomisedNumber()

    if (bingoNumber === newCells.value) {
        const highlightedCell = document.querySelectorAll("cells")
        highlightedCell.classList.toggle("highlightedCells")
    }
}



window.onload = function () {
    displayBingoBoard()
} 