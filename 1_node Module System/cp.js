// child process is a node module used to create sub perocess with in the script
// you can perfrom diffrent tasks with your scripts by using some methods



const cp = require('child_process')


cp.execSync('start chrome https://nodejs.org/dist/latest-v18.x/docs/api/')


console.log('output '+ cp.execSync('node demo.js'))