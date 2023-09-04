const createBoard = (rows: number, columns: number): ICell[][] => {

  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0
      }
    })
  })
}

const spreadMines = (board: ICell[][], minesAmount: number) => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows + '')
    const columnSel = parseInt(Math.random() * columns + '')
    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

const createMinedBoard = (rows: number, columns: number, minesAmount: number): ICell[][] => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)

  return board
}

export { createMinedBoard as default }
