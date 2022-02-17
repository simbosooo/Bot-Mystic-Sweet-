const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
 userID: {type: String, require: true},
 serverID: {type: String, require: true},
 totalbans: {type: Number, require: true},
 totalwarns: {type: Number, require: true},
 totalmutes: {type: Number, require: true},
 mutou: {type: Number, require: true},
 advertiu: {type: Number, require: true},
 baniu: {type: Number, require: true},
})

module.exports = model('Punição', guildSchema)
