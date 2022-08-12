const fs = require('fs')

//creating a new folder
fs.mkdirSync("thapa")

//creating a new file
fs.writeFileSync("thapa/bio.txt", "My name is Harshal")

//write in the new file
fs.appendFileSync("thapa/bio.txt", " And my surname is Mukte")

//*Synchronously file system
//read the file and print it
const sa = fs.readFileSync("thapa/bio.txt", "utf-8")
console.log(sa)

//renaming file using node js
fs.renameSync("thapa/bio.txt", "thapa/myBio.txt")

//deleting file and folder
fs.unlinkSync("thapa/myBio.txt")
fs.rmdirSync("thapa")

//*Asynchronously file system 
fs.writeFile("bio.txt", "Today is Awesome day", (err) => console.log(err)) 
fs.appendFile("bio.txt", " and my surname is Mukte", (err) => console.log(err))
fs.readFile("bio.txt", "utf-8", (err, data) => { //utf-8 is to convert buffer data to string.
    console.log(err)
    console.log(data)
}) 
fs.mkdir("harshal", (err) => console.log(err))
fs.writeFile("harshal/text.txt", "Today is Awesome day", (error) => console.log(error))
fs.unlink("harshal/text.txt", (err) => console.log(err))
fs.rmdir("harshal", (err) => console.log(err))
 
