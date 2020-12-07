import ICanvas from "../interface/ICanvas";
import IPoint from "../interface/IPoint";
import ICell from "../interface/ICell";

class DrawCanvas implements ICanvas{
    ctx: any;
    constructor(ctx: any){
        this.ctx = ctx;
    }
    drawLine(start: IPoint, end: IPoint): void {
        this.ctx.moveTo(start.X, start.Y);
        this.ctx.lineTo(end.X, end.Y);
    }

    drawRect(start: IPoint, cell: ICell){
        let width = cell.width;
        let height = cell.height;
        this.ctx.moveTo(start.X, start.Y + height);
        this.ctx.lineTo(start.X + width, start.Y+height);

        this.ctx.lineTo(start.X + width, start.Y);

        this.ctx.font="20px Arial";
        this.ctx.fillText(cell.showText,start.X+10,start.Y + 20);
    }

    paint(): void {
        this.ctx.stroke();
    }

}

export default DrawCanvas;