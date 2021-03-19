const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen yazı yazınız** :neutral_face:")//Eien Code
let link = "https://bcassetcdn.com/asset/logo/545fa973-da1e-428a-bf78-f9f8b0717cdb/logo?v=4&text="+isim
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
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};//Eien Code

exports.help = {
  name: 'müzik',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
