interface ICell {
  row: number;
  column: number;
  opened: boolean;
  mined: boolean;
  exploded: boolean;
  flagged: boolean;
  nearMines: number;
}
