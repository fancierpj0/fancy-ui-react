/*
如果想要在ts工程中从svg中导出什么拿到变量
就需要这个↓
*/

declare module '*.svg'{
    const content: any;
    export default content;
}
