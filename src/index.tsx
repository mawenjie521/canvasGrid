import Cell from "./implement/Cell";
import Grid from "./implement/Grid";

let cell = new Cell();
cell.showText="this is first cell";
cell.col = 2;
cell.row = 2;
cell.width = 2;
cell.height = 2;
cell.span = 1;

let grid = new Grid();
grid.addCell(cell);
console.log(grid.getCell(1,1));
