/*
declare module '*.jsx' {
    var _: React.FC<{}>;
    export default _;
}
/*
declare module '*.js' {
    var _: any;
    export default _;
}*/

declare module '*?orgteam' {
    const _: import("vite-imagetools").Picture;
    export default _;
}