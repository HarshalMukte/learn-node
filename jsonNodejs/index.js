const fs = require('fs')

//this is just a normal object 
const bioData = {
    name: 'harshal',
    age: 21,
    website: "harshalmukte.com"
}

//chaching from obj to json data
const jsonData = JSON.stringify(bioData)

// //again json to object
// const objectData = JSON.parse(jsonData)
// console.log(objectData)

//creating a new file with json data
fs.writeFile("json1.json", jsonData, (error) => {
    console.log(error)
})

fs.readFile("json1.json", "utf8", (error, data) => {
    // console.log(data)
    const convertingData = JSON.parse(data)
    console.log(convertingData)
})
  