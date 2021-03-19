const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :neutral_face:`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/21b9c5e5-e9d7-4a6f-a4e7-7e261fbb04d4?v=4&text=${yazi}`
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
    aliases: ['mountain'],
    permLevel: 0
}

exports.help = {
    name: 'grsdesdassssssssssen',
    description: 'Yasdzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdesssssssssssssn ds<syasazı>'
}