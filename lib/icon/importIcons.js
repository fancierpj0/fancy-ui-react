//非静态加载
//无法使用tree shaking
let importAll = (requireContext) => requireContext.keys().forEach(requireContext);

try{
    importAll(require.context('../icons/', true, /\.svg$/));
}catch (e) {
    console.log('引入icons出错:',e);
}
