import Cell from "./implement/Cell";
import Grid from "./implement/Grid";

var c: any=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

let cell = new Cell();
cell.showText="this is first cell";
cell.col = 2;
cell.row = 2;
cell.width = 100;
cell.height = 30;
cell.span = 1;

let options: any = {};
let rowList = [];
for(let i = 0; i < 10; i++){
    let row = [];
    for(let j = 0; j < 10; j++){
        row.push(cell);
    }
    rowList.push(row);
}

options.rowList = rowList;

let grid = new Grid(ctx, options);
// grid.addCell(cell);
// console.log(grid.getCell(1,1));
grid.render();
grid.paint();
