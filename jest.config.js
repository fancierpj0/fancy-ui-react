//https://jestjs.io/docs/zh-Hans/configuration.html

module.exports = {
    verbose: true //冗长的，啰唆的，累赘的
    ,clearMocks:false

    ,collectCoverage:true
    //默认__tests__就不会纳入覆盖率测试
    ,collectCoverageFrom:["lib/**/*.{ts,tsx}","!**/node_modules/**"]
    ,coverageDirectory:'coverage' //生成的报告放到哪里
    ,coverageReporters:["text","lcov"] //要哪些报告 text是控制台的输出 lcov是一种有名的报告形式
    ,reporters:["default","jest-junit"] //jest-junit主要给ci用得 在package.json的脚本中进行相关配置


    ,moduleFileExtensions:['js','jsx','ts','tsx']
    ,moduleDirectories:['node_modules']
    ,moduleNameMapper:{
        //这里是对图片字体进行伪mock
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/test/__mocks__/file-mock.js"
        //对css进行mock
        ,"\\.(css|less|sass|scss)$":"<rootDir>/test/__mocks__/object-mock.js"
    }
    ,testMatch:['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)']
    ,transform:{
        "^.+\\.(js|jsx)$":"babel-jest"
        ,"^.+\\.(ts|tsx)$":"ts-jest"
    }
    ,setupFilesAfterEnv:["<rootDir>test/setupTests.js"]
};
