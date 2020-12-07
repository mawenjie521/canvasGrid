import Cell from "./implement/Cell";
import Grid from "./implement/Grid";

var c: any=document.getElementById("myCanvas");
var ctx=c.getContext("2d");



let options: any = {};
let rowList = [];
for(let i = 0; i < 10; i++){
    let row = [];
    for(let j = 0; j < 10; j++){
        let cell = new Cell();
        cell.showText="this";

        cell.width = 100;
        cell.height = 30;
        cell.span = 1;
        cell.row = i;
        cell.col = j;
        row.push(cell);
    }
    rowList.push(row);
}

options.rowList = rowList;

let grid = new Grid(ctx, options);

c.addEventListener("click", function(e){
    let cell = grid.getCellByPos(e.clientX, e.clientY);
    console.log(cell);
})
