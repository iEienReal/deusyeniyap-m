const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Deus Güncel Haliyle Sizlerle .")
.setTitle("Deus Kullanıcı Menüsüne Hoşgldiniz !")
 .setTimestamp()
.setDescription(" **+avatar** = Avatarınıza bakarsınız.  \n  **+yetkilerim** = Yetkilerini görürsün.  \n  **+profil** = Profilini görürsün.  \n **+sunucuresmi** = Sunucu resmini gösterir.  \n  **+ping** = Botun Pingine Bakarsın.  \n  **+id** = Birisinin id'sine Bakarsın.  \n  **+davet** = Beni Sunucuna Ekle.  \n  **+istatistik** = Bot istatistiklerini görürsünüz.  \n  **+bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}