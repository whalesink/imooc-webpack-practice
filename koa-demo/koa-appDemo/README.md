## 这是一个koa工程目录的demo

一般工程目录按照如下管理：
```
·
├── node_modules       // 依赖安装目录
├── public             // 公共资源目录
|   └── static         // 静态公共资源
├── src                // 源码
|   ├── api            // 接口业务
|   |    └── ... 
|   ├── routes         // 路由
|   |    ├── ...
|   |    └── routes.js // 路由汇总
|   └── index.js       // 应用入口文件
├── .gitignore
└── package.json
```