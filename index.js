require('dotenv').config
const Client = require('./scr/estrutura/Client')

const client = new  Client({intents: [32767]})

client.login(`TOKEN`)

