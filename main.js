const Discord = require('discord.js')
const fs = require('fs')

//create new client
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

//import prefix and token from config file
const { prefix } = require('./config.json')
const { token } = require('./config.json')

//print a message when ready
client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//command handler
//get commands from ./commands
client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//runs everytime new message is created
client.on('messageCreate', message =>{
    //checks if message starts with a prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    //remove prefix and add parts of the message into an array
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //check if message is a command
    if(command === 'hentai'){
        client.commands.get('hentai').execute(message, Discord);
    }else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command === 'help'){
        client.commands.get('help').execute(message, Discord);
    }else if (command === 'hehe'){
        client.commands.get('hehe').execute(message, Discord)
    }else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command === 'play'){
        client.commands.get('play').execute(message, args)
    }else if (command === 'dc'){
        client.commands.get('dc').execute(message, args)
}}
)

//login
client.login(token);