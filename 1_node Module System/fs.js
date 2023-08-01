// files

const fl = require('fs')


// // reading a file

// let fileContent = fl.readFileSync('f1.txt')

// console.log('data of file 1 --> ' + fileContent)



// // Writing in a file

// fl.writeFileSync('f2.txt','inserting data')
// console.log('File has been written in file 2')



// //append a file 

// fl.appendFileSync('f3.txt', ' Update the data in f3')
// console.log('file has been updated')


// // deleting a file

// fl.unlinkSync('f2.txt')
// console.log('file has been deleted')



// directory using fs module


// create a dirrectory


// fl.mkdirSync('MyOwnDirrr')


// //check the content inside the directory
// let foldeePath = 'D:\\nodeJs\\1_node Module System\\MyOwnDir'

// let folderContent = fl.readdirSync(foldeePath)

// console.log('Folder contain '+ folderContent)


// // directory is exit or not: check whether a directory is exit or not

// let doexExist = fl.existsSync('myOwnDirr')
// console.log(doexExist)


// delete directory
fl.rmdirSync('MyOwnDirrr')//?????
