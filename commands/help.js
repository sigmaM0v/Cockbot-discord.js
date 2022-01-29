module.exports = {
    name: 'help',
    description: 'info about the bot',
    execute(message, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Info about the bot')
        .addFields(
            {name:'.hentai', value:'sends hentai from reddit'},
            {name:'.hehe', value: "sends mundane images from reddit"},
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/758374510863974450/933776501155975258/FJj_IiIXwAg58qx.png')
        message.channel.send({ embeds: [newEmbed]})
    }
}