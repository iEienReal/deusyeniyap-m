const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.SendEmbed()
    .setColor('RED')
    .setAuthor(`Text Generators | Text Commands (7)`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('** Smurf Text**', 'Creates smurf image usage:  `smurf`')
      .addField('** Potter Text**', 'Creates harry potter background usage: `potter`')
      .addField('** Fluffy Text**', 'Creates fluffy effect bacground usage: `fluffy`')
      .addField('** Sugar Text**', 'Creates sweety sugar text usage: `sugar` ')
      .addField('** Crafts Text**', 'Creates crafts text usage: `crafts` ')
      .addField('** Starwars Text**', 'Creates starwars effect text usage: `star-wars` ')
      .addField('** Sunshine Text**', 'Creates sunshine effect text usage: `sunshine` ')
      .addField('** Amped Text**', 'Creates amped effect text usage: `amped` ')
	  .addField('** Inferno Text**', 'Creates inferno effect text usage: `inferno` ')
	  .addField('** Slime Text**', 'Creates slime effect text usage: `slime` ') 
	  .addField('** Matrix Text**', 'Creates matrix effect text usage: `matrix` ')
	  .addField('** Everest Text**', 'Creates everest effect text usage: `everest` ')
	  
    .setFooter(``, client.user.avatarURL)
    .setColor("RED")
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['texts'],
    permLevel: 0
};

exports.help = {
    name: 'dsfdsfg',
      category: 'dgdfgdfg',
      description: 'dfgdfgfg',
};