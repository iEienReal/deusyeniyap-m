const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/22ad22fb-381b-4936-ab66-24ace0f6ddcf?v=4&text=${yazi}`
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
    aliases: ['burger'],
    permLevel: 0
}

exports.help = {
    name: 'grsaaaaaaaaaaaaaaaaaaasaaaaaaadsdssdfdfsadsensadsad',
    description: 'Yasddsffssdsadssğasdasdsdaaaaaaaaaaaaaaaaaaaaaaaaaaasınız yazıyı bannera çevirir.',
    usage: 'gresssdensdsfaaaaaaaasaaaaasdssaaasddassyazı>'
}