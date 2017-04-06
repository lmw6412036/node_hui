/**
 * Created by MBENBEN on 2017/4/6.
 */
module.exports=app=>{
    class AdminController extends app.Controller{
        //首页
        * index() {
            const {ctx}=this;
            ctx.body="hello";
        }
        //登录
        * login() {
            const {ctx}=this;
            yield ctx.render('admin/login');

        }
        //post
        * doLogin() {
            const {ctx}=this;
            let p=ctx.request.body;
            p.md5=require('../require/function').md5('111111');
            let rule={
                name:'string',
                pass:'string'
            };

            try {
                ctx.validate(rule,p);
            }catch (errors){
                p=errors;
            }

            ctx.body=p;
        }

    }
    return AdminController;
}