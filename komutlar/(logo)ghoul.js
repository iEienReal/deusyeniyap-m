const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/236a12ee-2b79-4b58-b9e4-5536f5e93db7?v=4&text=${yazi}`
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
    aliases: ['ghoul'],
    permLevel: 0
}

exports.help = {
    name: 'grssdesqdassssssdaxxxxxxxxxxxxddddsssssssen',
    description: 'Yasssdsdssdqxxxxxxxxxxxdddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdesssssssaxdqdddxddddsssssssssn ds<syasazı>'
}