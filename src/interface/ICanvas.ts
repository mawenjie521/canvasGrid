import IPoint from "./IPoint";
import ICell from "./ICell";

interface ICanvas{
    drawLine(start: IPoint, end: IPoint): void;
    drawRect(start: IPoint, cell: ICell): void;
    paint(): void;
}
export default ICanvas;