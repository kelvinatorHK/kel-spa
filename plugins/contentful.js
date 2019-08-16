require('dotenv').config()
const contentful = require('contentful')
console.log("In contentfu.js");
console.log("SPACE:", process.env.CTF_SPACE_ID);
module.exports = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CD_ACCESS_TOKEN
})