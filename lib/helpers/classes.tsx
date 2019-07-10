function classes(...names: (string | undefined)[]) {
    return names.filter(v => v).join(' '); // 1和undefined join 为 '1 '
}

function scopedClassMaker(prefix:string){
    return function x(name?:string){ //name为string 或则 不存在
        return [prefix,name].filter(Boolean).join('-');
    }
}

export {classes,scopedClassMaker};
