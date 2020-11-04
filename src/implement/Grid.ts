import IGrid from "../interface/IGrid";
import ICell from "../interface/ICell";

class Grid implements IGrid{
    cells: Array<ICell>;
    constructor(){
        this.cells = [];
    }
    addCell(cell: ICell){
        this.cells.push(cell);
    }
    getCell(col: number, row: number){
        return this.cells[0];
    }
    render(){
        console.log("render cell")
    }
}

export default Grid;