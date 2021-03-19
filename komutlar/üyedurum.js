const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
   .addField(" <a:eien_sol:812966881089552404>  **Toplam Kullanıcı**",message.guild.memberCount )
    .addField(" <a:eien_sol:812966881089552404>  **Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField(" <a:eien_sol:812966881089552404>  **Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField(" <a:eien_sol:812966881089552404>  **Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField(" <a:eien_sol:812966881089552404>  **Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
