const knex = require("knex")
const knexfile = require("../knexfile")

//if you havent done this before, you can lookup a value
// in an object using a variable as the key name if its
//wrapped in square brackets
module.exports = knex(knexfile[process.env.NODE_ENV])
