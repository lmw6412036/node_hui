/**
 * Created by MBENBEN on 2017/4/6.
 */
exports.md5=function (string) {
    const crypto=require('crypto');
    let md5=crypto.createHash('md5');
    md5.update(string);
    return md5.digest('hex');
}