const { override,
        fixBabelImports,
        addLessLoader // less配置函数
       } = require('customize-cra');


module.exports = override(
    fixBabelImports('import',
        {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),

    addLessLoader(
        {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#52c41a',
                          '@success-color': '#52c41a'}
        }),



    );