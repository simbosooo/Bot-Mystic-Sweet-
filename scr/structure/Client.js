const { Client } = require('discord.js')
const { readdirSync } = require('fs')
const { join } = require('path')

const { connect } = require('mongoose')
const Models = require('../database/models/Models')

module.exports = class extends Client {
    constructor (options) {
        super (options)

        this.commands =  []
        this.loadCommands()
        this.loadEvents()
    }

    registryCommand() {
        this.guilds.cache.get('937291631151972423').commands.set(this.commands)
    }

    loadCommands(path = 'scr/comandos') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const commands = readdirSync(`${path}/${category}`)

            for ( const command of commands ) {
                const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
                const cmd = new (commandClass)(this)

                this.commands.push(cmd)
            
            }
        }
    }

    loadEvents(path = 'scr/eventos')

    {
        const categories = readdirSync(path)

        for (const category of categories) {
            const events = readdirSync(`${path}/${category}`)

            for ( const event of events ) {
                const eventClass = require(join(process.cwd(), `${path}/${category}/${event}`))
                const evt = new (eventClass)(this)

                this.on(evt.name, evt.run)
                
            }
        } 
    }

   

            async connectToDatabase() {
                const connection = await connect('mongodb+srv://edu:edu@mysevers.9jj0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
        
                console.log('Database conectada com sucesso!')
        
                this.db = { connection, ...Models }


        }

}
