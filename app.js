/**
 * Created by MBENBEN on 2017/4/6.
 */
module.exports=app=>{
    app.beforeStart(function* () {
        app.locals={
            hui:'/public/hui'
        };
    });
}
