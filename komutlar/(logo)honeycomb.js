const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/34023f54-8ee3-4167-baa1-048b8c9f0b2a?v=4&text=${yazi}`
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
    aliases: ['honeycomb','honey-comb'],
    permLevel: 0
}

exports.help = {
    name: 'grsdsdssdfdfdfsadsendfsdfszzxzsadsad',
    description: 'Yasddsfsdfsdfssdsaddzxzxzxsfsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresssdensdsdsfsdfsdfzxxxxxxxxxxxfsdssadsfaasddassyazı>'
}