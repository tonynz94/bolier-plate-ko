if(process.env.NODE_ENV === "production")   //배포 후에
{
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}