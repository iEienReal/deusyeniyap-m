const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const prefix = ayarlar;

    exports.run = async(client, message, args) => {

    let p = args[0];
     let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let onlycode = args.slice(0).join(' ');


exports.run = (client, message, args) => {
  


  let pages = [
              `**Logo Commands** \n **${prefix}anchor** = Çapa logosu oluşturur \n **${prefix}blocks** = Küçük , bloklu bir logo oluşturur \n **${prefix}cube** = Kübik bir logo oluşturur  \n **${prefix}flyshoes** = Hiç kanatlı bir ayakkabı hayal ettiniz mi?  \n **${prefix}fox** = Klasik ve parlak tilkili  \n **${prefix}funky** = Eski ama Klasik`,
             `**Logo Commands** \n **${prefix}globe** = Küre logosu oluşturur  \n **${prefix}honeycomb** = Küçük , bloklu bir bal peteği oluşturur  \n **${prefix}horse** = Parlak siyah beyaz at logosu  \n **${prefix}green** = Yem yeşil logo \n **${prefix}stars** = Yıldızların arasında dans edicedz\n **${prefix}tech** = Yeni bir yıl, yeni bir teknoloji..`,
             `**Logo Commands** \n **${prefix}cloud** = Bir bulutla karışık bir adam \n **${prefix}burger** = Küçük, havalı bir burger üretir \n **${prefix}human** = sadece insan \n **${prefix}mountain** = Bu bir dağ ! \n **${prefix}panther** = Panter Başka Bişey Değil. \n **${prefix}pegasus** = Sadece Pegasus \n **${prefix}python** = Lanet bi piton. \n **${prefix}dragon** = Bu bi Ejderha ! \n **${prefix}ghoul** = Lanet bir hortlak. \n **${prefix}purple-dragon** = Pembe Ejderha . `,
              ];
  let page = 1;
 
  const embed = new Discord.MessageEmbed()
    .setColor('#27167A')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
  .setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
    .setFooter(`Page ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('#27167A')
        embed.setFooter(`Page ${page} / ${pages.length}`)
        .setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('#27167A')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} / ${pages.length}`)
        .setImage("https://cdn.discordapp.com/attachments/785845564570861588/791250601538224138/standard_1.gif")
        msg.edit(embed)
      })
     })
    })
  }
};
 
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["logo","logos"],
permLevel: 0
};
 
exports.help = {
name: 'logo',
description: 'Yardffffffffffım Listesini Gösterir',
usage: 'yardffffffffffffım'
};
