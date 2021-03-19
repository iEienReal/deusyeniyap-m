const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/5e378807-e999-4f18-b025-69efa70d51d4?v=4&text=${yazi}`
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
    aliases: ['pegasus'],
    permLevel: 0
}

exports.help = {
    name: 'grssdesdassssxxxxxxxxxxxxddddsssssssen',
    description: 'Yasdsdxxxxxxxxxxxdddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdesssssxddddxddddsssssssssn ds<syasazı>'
}