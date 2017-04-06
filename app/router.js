'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  require('./router/admin')(app);
};
