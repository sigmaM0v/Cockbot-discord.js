const fetch = require('node-fetch')

module.exports = {
    name: 'hehe',
    description: 'sends funi',
    async execute(message, Discord){
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min; 

        const subs = ['shitposting', 'okbuddyretard', 'gayspiderbrothel', 'norules']

        function getSub(){
            return subs[random(0,subs.length)]}
            
        let data = await fetch
        (`https://meme-api.herokuapp.com/gimme/${getSub()}`).then(res => res.json())

        const newEmbed = new Discord.MessageEmbed()
            .setTitle(data.title)
            .setDescription(data.subreddit)
            .setColor('#0099ff')
            .setURL(data.postLink)
            .setImage(data.url)
            .setTimestamp()

        message.channel.send({ embeds: [newEmbed] })
    }
}