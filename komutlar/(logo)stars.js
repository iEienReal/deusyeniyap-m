const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/08474dfd-d774-489a-aadf-23d0642671fe/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Deus Logo System')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['stars'],
    permLevel: 0
}

exports.help = {
    name: 'grsdesdsen',
    description: 'Yasdzdığsdsınız yazıyı bannera çevirir.',
    usage: 'gresden ds<syazı>'
}