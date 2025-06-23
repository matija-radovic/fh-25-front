declare module 'warpjs' {
    type Point = number[];
    type Transformer = (point: Point) => Point;

    export default class Warp {
        constructor(element: SVGSVGElement, curveType?: string);

        update(): void;
        transform(transformers: Transformer | Transformer[]): void;
        interpolate(threshold: number): boolean;
        extrapolate(threshold: number): boolean;
        preInterpolate(transformer: Transformer, threshold: number): boolean;
        preExtrapolate(transformer: Transformer, threshold: number): boolean;
    }
}