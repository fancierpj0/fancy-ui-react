const base = require('./jest.config');
module.exports = Object.assign({}, base, {
    reporters:["jest-junit"]
    ,collectCoverage:true
    //默认__tests__就不会纳入覆盖率测试(覆盖率测试当然要针对于非test文件)
    ,collectCoverageFrom:["lib/**/*.{ts,tsx}","!**/node_modules/**"]
    ,coverageDirectory:'coverage' //生成的报告放到哪里
    ,coverageReporters:["text","lcov"] //要哪些报告 text是控制台的输出 lcov是一种有名的报告形式
});
