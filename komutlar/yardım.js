const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Deus Güncel Haliyle Sizlerle .")
.setTitle("Deus Yardım Menüsüne Hoşgeldiniz !")
 .setTimestamp()
.setDescription(" **+eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n  **+moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n  **+kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n  **+logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}