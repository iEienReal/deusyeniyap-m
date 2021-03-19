const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Deus Güncel Haliyle Sizlerle .")
.setTitle("Deus Eğlence Menüsüne Hoşgeldiniz !")
 .setTimestamp()
.setDescription(" **+tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **+mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **+fbi** = Bot FBi Gif Atar.  \n  **+token** = Tokenimi Öğrenmek İstermiisn knk :D?  \n  **+düello** = Düello Atarsın...  \n  **+wasted** = Polis tarafından yakalanırsın.  \n  **+nahçek** = Etiketlediğiniz kişiye nah çeker. ")
.setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}