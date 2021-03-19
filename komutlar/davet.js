const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle  <a:kalp:817439143965098047>  ")
  .setDescription("[__**Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=777864132178608139&permissions=8&scope=bot) \n [__**Site Yakında **__]()")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};