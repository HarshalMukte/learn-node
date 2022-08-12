//writing the function
const add = (a, b) => {
  return a + b
}

const sub = (a, b) => {
  return a - b
}

const mul = (a, b) => {
  return a * b
}

//exporting the single function or variable
// module.exports = add

//for exporting the multiple functions or variable
// module.exports.add = add
// module.exports.sub = sub
// module.exports.mul = mul

// there is the shortcut for the above one
module.exports = { add, sub, mul }