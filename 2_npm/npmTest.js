const figlet = require('figlet')


figlet('Hello Das', function(err, data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err)
    }
    console.log(data)
})