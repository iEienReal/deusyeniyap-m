const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen yazı yazınız** :neutral_face:")
let link = "https://bcassetcdn.com/asset/logo/4362501d-64af-4538-8b4e-051670b7dc5f/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(link)
  .setFooter('Deus Logo System')
  
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kalp", "kalp-logo"],
  kategori: 'logolar',
  permLevel: 0
};

exports.help = {
  name: 'kalp',
  description: 'Logo Yaparsınız',
  usage: 'kalp-logo <yazı>'
};