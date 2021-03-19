const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/4a2b3559-b4bc-44f2-bf0b-3bc424105b69?v=4&text=${yazi}`
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
    aliases: ['funky'],
    permLevel: 0
}

exports.help = {
    name: 'grsdsdssdfdfdfsadsensadsad',
    description: 'Yasddsfsdfsdfssdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresssdensdsdsfsdfsdffsdssaaasddassyazı>'
}