import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds , 
        GatewayIntentBits.GuildMessages ,
        GatewayIntentBits.MessageContent
    ] 
});

client.on("messageCreate" , (message) => {
    if(message.author.bot) return
    message.reply({
        content : "Hello I am your bot "
    })
})

client.on("interactionCreate" , interaction => {
    interaction.reply('Pong!!!')
})

client.login('ADD YOUR OWN DISCORD KEY') 
