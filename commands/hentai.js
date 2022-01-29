const fetch = require('node-fetch')

module.exports = {
    name: 'hentai',
    description: 'sends hentai',
    async execute(message, Discord){
        //same as hehe.js
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min; 

        const subs = ['hentai', 'ecchi','artistic_ecchi', 'thighdeology', 'hentai_gif', 'genshinimpacthentai', 'waifusgonewild', 'yuri']

        function getSub(){
            return subs[random(0,subs.length)]}
            
        let data = await fetch
        (`https://meme-api.herokuapp.com/gimme/${getSub()}`).then(res => res.json())

        const newEmbed = new Discord.MessageEmbed()
            .setTitle(data.title)
            .setDescription(data.subreddit)
            .setColor('#0099ff')
            .setImage(data.url)
            .setTimestamp()
            .setURL(data.postLink)
            //checks if channel which message was sent to has nsfw tag
            if(!message.channel.nsfw){
                return message.channel.send("This aint a NSFW channel, baka.")
            }else message.channel.send({ embeds: [newEmbed] })
    }
}