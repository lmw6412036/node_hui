'use strict';
/**
 * Created by MBENBEN on 2017/4/6.
 */
module.exports=app=>{
    app.get('/admin','admin.index');
    app.get('/admin/login','admin.login');
    app.post('/admin/login','admin.doLogin');
}