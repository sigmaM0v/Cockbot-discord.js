const Discord = require('discord.js')
const fs = require('fs')

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

const { prefix } = require('./config.json')

const { token } = require('./config.json')

client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
    
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
    
            if(command === 'hentai'){
                client.commands.get('hentai1').execute(message, Discord);
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

client.login(token);