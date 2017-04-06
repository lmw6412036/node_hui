'use strict';
var path=require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1491452091374_9991';
  //模板引擎配置
  config.view={
    root:[path.join(appInfo.baseDir,'app/views')].join(','),
    defaultExtension: '.html',
    defaultViewEngine: 'nunjucks',
    cache:false
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'mzd',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
