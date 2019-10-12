const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("631283719189168142")
setInterval(function() {
channel.send(`سبحان الله و بحمدة سبحان الله العظيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);