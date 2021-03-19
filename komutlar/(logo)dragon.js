const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/09699c93-f687-4c58-b6dc-cb8010de7df9?v=4&text=${yazi}`
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
    aliases: ['dragon'],
    permLevel: 0
}

exports.help = {
    name: 'grssdesdassssssdaxxxxxxxxxxxxddddsssssssen',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner adı <yazı>'
}