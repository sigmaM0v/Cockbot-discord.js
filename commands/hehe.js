const fetch = require('node-fetch')

module.exports = {
    name: 'hehe',
    description: 'sends funi',
    //needs to be async execute since we're using await
    async execute(message, Discord){
        //create a random number function
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min; 
        //add subs which images are pulled from
        const subs = ['shitposting', 'okbuddyretard', 'gayspiderbrothel', 'norules']
        //define function which gets a random sub
        function getSub(){
            return subs[random(0,subs.length)]}
            //fetch the data from a reddit api integration
        let data = await fetch
        (`https://meme-api.herokuapp.com/gimme/${getSub()}`).then(res => res.json())
        //create embed with the data
        const newEmbed = new Discord.MessageEmbed()
            .setTitle(data.title)
            .setDescription(data.subreddit)
            .setColor('#0099ff')
            .setURL(data.postLink)
            .setImage(data.url)
            .setTimestamp()
        //send
        message.channel.send({ embeds: [newEmbed] })
    }
}