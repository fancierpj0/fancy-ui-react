//https://jestjs.io/docs/zh-Hans/configuration.html

module.exports = {
    verbose: true //冗长的，啰唆的，累赘的
    ,clearMocks:false
    ,collectCoverage:false
    ,reporters:["default"]
    ,moduleFileExtensions:['js','jsx','ts','tsx']
    ,moduleDirectories:['node_modules']
    ,moduleNameMapper:{
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/test/__mocks__/file-mock.js"
    }
    ,testMatch:['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)']
    ,transform:{
        "^.+\\.(js|jsx)$":"babel-jest"
        ,"^.+\\.(ts|tsx)$":"ts-jest"
    }
    ,setupFilesAfterEnv:["<rootDir>test/setupTests.js"]
};
