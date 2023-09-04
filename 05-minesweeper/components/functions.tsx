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

const cloneBoard = (board: ICell[][]): ICell[][] => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board: ICell[][], row: number, column: number): ICell[] => {
  const neighbors: ICell[] = []
  const rows = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]

  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c])
      }
    })
  })

  return neighbors
}

const safeNeighborhood = (board: ICell[][], row: number, column: number): boolean => {
  return getNeighbors(board, row, column).reduce((result, neighbor) => result && !neighbor.mined, true)
}

const openField = (board: ICell[][], row: number, column: number) => {
  const field = board[row][column]
  if (!field.opened) {
    field.opened = true
    if (field.mined) {
      field.exploded = true
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
    } else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

const fields = (board: ICell[][]) => board.reduce((rows, row) => rows.concat(row), [])
const hadExplosion = (board: ICell[][]) => fields(board).filter(field => field.exploded).length > 0

const pendding = (field: ICell) => (field.mined && !field.flagged) || (!field.mined && !field.opened)
const wonGame = (board: ICell[][]) => fields(board).filter(pendding).length === 0
const showMines = (board: ICell[][]) => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

export { createMinedBoard as default, cloneBoard, openField, hadExplosion, wonGame, showMines }
