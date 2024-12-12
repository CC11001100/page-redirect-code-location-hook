const fs = require('fs');

function generateConfusedCode(lines) {
    let code = '';
    const variablePrefix = '_0x';
    const functionNamePrefix = '_0x';
    const maxNumber = 0xFFFF;

    for (let i = 0; i < lines; i++) {
        // 生成变量名
        const variableName = variablePrefix + Math.floor(Math.random() * maxNumber).toString(16);
        // 生成函数名
        const functionName = functionNamePrefix + Math.floor(Math.random() * maxNumber).toString(16);
        // 生成随机数作为函数体
        const randomNumber = Math.floor(Math.random() * maxNumber).toString(16);

        // 添加混淆代码行
        code += `var ${variableName} = function ${functionName}() { return 0x${randomNumber}; }; \n\n`;
    }

    return code;
}

fs.writeFile('./obfuscation-useless-code.js', generateConfusedCode(5000), err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});


