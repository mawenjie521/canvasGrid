import ICell from '../interface/ICell';

class Cell implements ICell{
    showText: string;
    col: number;
    row: number;
    width: number;
    height: number;
    span: number;
    constructor(){
        this.showText = "";
        this.col = 0;
        this.row = 0;
        this.width = 0;
        this.height = 0;
        this.span = 0;
    }
}

export default Cell;