module.exports = {
    name: 'clear',
    description: 'clears messages',
    execute(message, args){
    //convert input into a number
    const num = parseInt(args[0])
        //check if there was any input
        if(!num){
            return message.reply('You need to enter a number.')
        //check if input is a number
        }else if(isNaN(num)){
            return message.reply('You must enter a real number')
        //check if input is less then 100
        }else if(num >= 99){
            return message.reply('Cannot delete more than 100 messages')
        //check if input is at least 1
        }else if(num < 1){
            return message.reply('Delete amount must be at least 1')
        }else{
            //add +1 to the delete amount since its deleting the message with the command
            message.channel.bulkDelete(num + 1)
        }





}
}