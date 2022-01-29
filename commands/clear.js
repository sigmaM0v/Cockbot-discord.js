module.exports = {
    name: 'clear',
    description: 'clears messages',
    execute(message, args){
        const num = parseInt(args[0])
if(!num){
    return message.reply('You need to enter a number.')
}else if(isNaN(num)){
    return message.reply('You must enter a real number')
}else if(num >= 99){
    return message.reply('Cannot delete more than 100 messages')
}else if(num < 1){
    return message.reply('Delete amount must be at least 1')
}else{
    console.log(num + 1)
    message.channel.bulkDelete(num + 1)
}





}
}