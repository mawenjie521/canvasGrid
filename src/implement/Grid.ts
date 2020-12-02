import IGrid from "../interface/IGrid";
import ICell from "../interface/ICell";
import DrawCanvas from "./Canvas";

class Grid implements IGrid{
    //cells: Array<ICell>;
    rowList: Array<Array<ICell>>;
    ctx: any;
    drawCanvas: any;
    constructor(ctx: any, options: any){
        this.ctx = ctx;
        this.rowList = [];
        this.drawCanvas = new DrawCanvas(ctx);
        this.init(options.rowList);
    }
    insertRow(num: number): void{
        
    }
    init(rowList: Array<Array<ICell>>): void{
        this.rowList = rowList;
    }
    // getCell(col: number, row: number){
    //     return this.cells[0];
    // }
    render(){
        let start = {
            X: 0,
            Y: 0
        };

        this.rowList.forEach((cells)=>{
            start.X = 0;
            let cellheight = 0;
            cells.forEach((cell)=>{
                cellheight = cell.height;
                this.drawCanvas.drawRect(start, cell);
                start.X += cell.width;
            });
            start.Y += cellheight;
        })
    }
    paint(){
        this.drawCanvas.paint();
    }
}

export default Grid;