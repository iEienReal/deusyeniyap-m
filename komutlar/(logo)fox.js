const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/15a82f06-9222-49e2-9afa-a738ddca8f5c/logo?v=4&text=${yazi}`
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
    aliases: ['fox'],
    permLevel: 0
}

exports.help = {
    name: 'grsdssadsensadsad',
    description: 'Yasdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresdendssaaasddassyazı>'
}