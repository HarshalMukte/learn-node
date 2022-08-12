const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  //for getting the useApi data from the other files
  const data = fs.readFileSync("./userApi/userapi.json", "utf8")
  //for printing data into the webpage
  const objData = JSON.parse(data)
  console.log(objData)

  //we are creating routing using req.url
  if (req.url === "/") {
    //this is just for printing in the web page
    res.end(
      "<h1>Our server is created and running successfully, and this is Home Page.</h1>"
    )
  } else if (req.url === "/about") {
    res.end(
      "Our server is created and running successfully, and this is About Page."
    )
  } else if (req.url === "/userapi") {
    res.writeHead(200, {"content-type": "application/json"})
    // res.end("Hello   user ")
    res.end(JSON.stringify(objData))
  } else {
    res.writeHead(404, { "content-type": "text/html" }) // for giving the 404 error message.
    res.end("404 Not Found, Please try again.")
  }
  // console.log(req.url)
  //this is print on the webpage
  // res.end("Our server is created and running successfully")
})

server.listen(8000, "127.0.0.1", () => {-
  //this will print on the console
  console.log("LIstening to port no 8000")
})