import ICell from './ICell';
import IPoint from './IPoint';

interface IGrid{
    rowList: Array<Array<ICell>>;
    insertRow(num: number): void;
    init(cells: Array<Array<ICell>>): void;
    getCell(col: number, row: number): ICell;
    getCellByPos(clientX: number, clientY: number): ICell;
    getPointByPos(clientX: number, clientY: number): IPoint;
    render(): void;
    paint(): void;
}

export default IGrid;