const playerBoardContainer = document.querySelector('.player-board')
const cpuBoardContainer = document.querySelector('.cpu-board')

function createGameBoardHTML(gameboard, player, clickHandler) {
  const board = document.createElement('div')
  board.classList.add('board')

  // for (let y = 0; y < gameboard.rows; y++) {
  //   for (let x = 0; x < gameboard.columns; x++) {
  //     const cell = document.createElement('div')
  //     console.log(gameboard)
  //     cell.classList.add('board-cell')
  //     cell.dataset.x = x
  //     cell.dataset.y = y
  //     cell.addEventListener('click', clickHandler)

  //     // customize the cell appearance based on the game state (e.g., hit, miss, ship)
  //     // check gameboard.getAttackStatus(x, y) and set classes accordingly.
  //     board.appendChild(cell)

  //   }

  // }

  gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cellData, colIndex) => {
      const cell = document.createElement('div')
      cell.classList.add('board-cell')
      cell.dataset.x = colIndex // Set data-x attribute
      cell.dataset.y = rowIndex // Set data-y attribute

      // Customize the cell appearance based on the game state (e.g., hit, miss, ship)
      // Check gameboard.getAttackStatus(colIndex, rowIndex) and set classes accordingly.
      if (cellData !== null && cellData.name) {
        console.log('aq', cellData.name)
        cell.classList.add('ship-cell')
        // You can customize the ship cell appearance here
      }

      cell.addEventListener('click', clickHandler)
      board.appendChild(cell)
    })
  })

  if (player === 'player') {
    playerBoardContainer.appendChild(board)
  } else {
    cpuBoardContainer.appendChild(board)
  }
}

function cellClickHandler(event) {
  // When the user clicks, you can handle it here.
  // For now, let's just log the selected coordinates.
  const x = event.target.dataset.x
  const y = event.target.dataset.y
  console.log(`Clicked on cell: ${x}, ${y}`)
}

export { createGameBoardHTML, cellClickHandler, playerBoardContainer }