function myMilldle1(req , res, next){
    console.log("myMilldle1");
    next()
}


module.exports = myMilldle1