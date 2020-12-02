import ICell from './ICell';

interface IGrid{
    rowList: Array<Array<ICell>>;
    //getCell:(col: number, row: number)=>ICell;
    insertRow(num: number): void;
    init(cells: Array<Array<ICell>>): void;
    render(): void;
    paint(): void;
}

export default IGrid;