function classes(...names: (string | undefined)[]) {
  return names.filter(v => v).join(' '); // 1和undefined join 为 '1 '
}

/*function scopedClassMaker(prefix:string){
    return function x(name?:string){ //name为string 或则 不存在
        return [prefix,name].filter(Boolean).join('-');
    }
}*/


interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [K: string]: boolean;
}

//函数式的问题，制造了太多垃圾，下面一直在返回新的array，但有垃圾回收机制做保证
const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles = '', options?: Options) =>
    Object
      .entries((typeof name === 'string') ? {[name]: name} : name)
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat((options && options.extra) || [])
      .join(' ');

export {classes, scopedClassMaker};
