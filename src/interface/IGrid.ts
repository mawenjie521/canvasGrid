import ICell from './ICell';

interface IGrid{
    cells: Array<ICell>;
    getCell:(col: number, row: number)=>ICell;
    render(): void;
}

export default IGrid;