import IGrid from "../interface/IGrid";
import ICell from "../interface/ICell";
import DrawCanvas from "./Canvas";
import Cell from "./Cell";

class Grid implements IGrid{
    //cells: Array<ICell>;
    rowList: Array<Array<ICell>>;
    ctx: any;
    drawCanvas: any;
    cols: any;
    rows: any;
    constructor(ctx: any, options: any){
        this.ctx = ctx;
        this.rowList = [];
        this.cols = [];
        this.rows = [];
        this.drawCanvas = new DrawCanvas(ctx);
        this.init(options.rowList);
        this.render();
        this.paint();
    }
    insertRow(num: number): void{
        
    }
    init(rowList: Array<Array<ICell>>): void{
        this.rowList = rowList;
    }
    getCell(col: number, row: number){
        return this.rowList[row][col];
    }
    getPointByPos(clientX: number, clientY: number){
        let point = {
            X: 0,
            Y: 0
        };

        let height = 0;
        let rowsL = this.rows.length;
        for(let i = 0; i < rowsL; i++){
            if(clientY < height){
                point.Y = i;
                break;
            }
            height += this.rows[i]
        }

        let width = 0;
        let colsL = this.cols.length;

        for(let j = 0; j < colsL; j++){
            if(clientX < width){
                point.X = j;
                break;
            }
            width += this.cols[j]
        }
        
        return point;
    }
    getCellByPos(clientX: number, clientY: number){
        let point = this.getPointByPos(clientX, clientY);
        return this.getCell(point.X, point.Y);
    }
    render(){
        let start = {
            X: 0,
            Y: 0
        };

        this.rowList.forEach((cells)=>{
            start.X = 0;
            let cellheight = 0;
            cells.forEach((cell, index)=>{
                if(index == 0){
                    this.cols.push(cell.width);
                }
                cellheight = cell.height;
                this.drawCanvas.drawRect(start, cell);
                start.X += cell.width;
            });
            start.Y += cellheight;
            this.rows.push(cellheight);
        })
    }
    paint(){
        this.drawCanvas.paint();
    }
}

export default Grid;