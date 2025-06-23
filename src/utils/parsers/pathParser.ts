const segmentSchemas = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    h: ['x'],
    v: ['y'],
    a: ['rx', 'ry', 'xRotation', 'largeArc', 'sweep', 'x', 'y'],
    z: [],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'], // Bézier Curves
    s: ['x2', 'y2', 'x', 'y'], // Several Bézier
    q: ['x1', 'y1', 'x', 'y'], // quadratic curve
    t: ['x', 'y'], // Multiple quadratic Béziers
} as const

type Type = Uppercase<keyof typeof segmentSchemas>
type Point = { x: number, y: number } & Partial<{ xs: number, ys: number, xe: number, ye: number }>;

const segmentExpr = /([mzlhvcsqta])([^mzlhvcsqta]*)/ig;
const numberExpr = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parsePath(pathString: string) {
    const points: Point[] = [];

    let segmentMatch;
    segmentExpr.lastIndex = 0;

    while ((segmentMatch = segmentExpr.exec(pathString))) {
        const type = segmentMatch[1] as Type;
        const schemaLength = segmentSchemas[type.toLowerCase() as Lowercase<Type>].length
        const numbers = (segmentMatch[2].match(numberExpr) || []).map(parseFloat);

        if (numbers.length < schemaLength) throw new Error(`Malformed path data: type "${type}" has ${numbers.length} arguments, expected ${schemaLength}`);

        if (schemaLength > 0) {
            if (numbers.length % schemaLength !== 0) throw new Error(`Malformed path data: type "${type}" has ${numbers.length} arguments, ${numbers.length % schemaLength} too many`);
            for (let i = 0; i < numbers.length / schemaLength; i++) {
                switch (type) {
                    case "M":
                        points.push({ x: numbers[0], y: numbers[1] });
                        break;
                    case "C": {
                        const lastPoint = points[points.length - 1];
                        if (lastPoint) Object.assign(lastPoint, { xs: numbers[0], ys: numbers[1] });
                        points.push({ x: numbers[4], y: numbers[5], xe: numbers[2], ye: numbers[3] });
                    } break;
                    case "H": {
                        const lastPoint = points[points.length - 1];
                        if (lastPoint) Object.assign(lastPoint, { xs: undefined, ys: undefined });
                        points.push({ x: numbers[0], y: points[points.length - 1].y });
                    } break;
                    case "V": {
                        const lastPoint = points[points.length - 1];
                        if (lastPoint) Object.assign(lastPoint, { xs: undefined, ys: undefined });
                        points.push({ x: points[points.length - 1].x, y: numbers[0] });
                    } break;
                    case "L": {
                        const lastPoint = points[points.length - 1];
                        if (lastPoint) Object.assign(lastPoint, { xs: undefined, ys: undefined });
                        points.push({ x: numbers[0], y: numbers[1] });
                    } break;
                    default: throw new Error(`Path segment "${type}" not supported.`);
                }
            }
        }
    }

    return points;
}

function encodePath(points: Point[]): string {
    if (points.length === 0) return "";
    let d = `M${points[0].x} ${points[0].y}`
    for (let i = 0; i < points.length - 1; i++) {
        const Ax = points[i].x;
        const Ay = points[i].y;
        const Bx = points[i + 1].x;
        const By = points[i + 1].y;
        const Cx1 = points[i].xs ?? Ax;
        const Cy1 = points[i].ys ?? Ay;
        const Cx2 = points[i + 1].xe ?? Bx;
        const Cy2 = points[i + 1].ye ?? By;

        if (Cx1 === Ax && Cy1 === Ay && Cx2 === Bx && Cy2 === By) {
            if (Ax === Bx) d += `V${By}`;
            else if (Ay === By) d += `H${Bx}`;
            else d += `M${Bx} ${By}` // Assumes no LineTo commands in path
        } else {
            d += `C${Cx1} ${Cy1} ${Cx2} ${Cy2} ${Bx} ${By}`
        }
    }
    d += `Z`; // Assumes path is closed
    return d;
}

export { encodePath, parsePath }