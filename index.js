const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const ms = require("ms")


client.on('ready', () => {
  console.log(`Bejelentkezve..`);
  client.user.setPresence({ game: { name: `Készítette: Xendexe`, type: 'WATCHING' }, status: 'dnd' });
});


client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./parancsok/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
   }
  });

  
client.login('process.env.BOT_TOKEN');  


  
