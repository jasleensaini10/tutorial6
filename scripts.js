let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Step 1: Showing the first player in next-lbl
let nextLabel = document.getElementById('next-lbl');
nextLabel.innerText = nextPlayer;

createGameBoard()

function createGameBoard()
{
    // Step 2: Adding a "[ ]" button to each cell c1 to c9
    for (let cellNumber = 1; cellNumber <= 9; cellNumber++)
    {
        let cell = document.getElementById('c' + cellNumber);
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Step 3: Adding click listener to every button
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        // Wrapping takeCell in a function so the event gets passed to it
        btns[i].addEventListener('click', function (event) {
            takeCell(event);
        });
    }
}

// Step 4: Responding to a click on a board button
function takeCell(event)
{
    // Getting the button that was clicked
    let clickedButton = event.target;

    // Filling the cell with the current player and disabling the button
    clickedButton.innerText = '[' + nextPlayer + ']';
    clickedButton.disabled = true;

    // Switching to the other player and updating next-lbl
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    nextLabel.innerText = nextPlayer;

    // Step 6: Showing Game Over once every button is disabled
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

// Step 5: Returning true only if every button is disabled
function isGameOver()
{
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        // Found an unused button, so the game is not over
        if (!btns[i].disabled)
        {
            return false;
        }
    }
    return true;
}