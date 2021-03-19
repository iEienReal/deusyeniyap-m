const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Deus Bot İstatistik", client.user.avatarURL())
    .addField(" <a:eien_sol:812966881089552404> **Botun Sahibi**", "<@768193611795529788>")
    .addField(" <a:eien_sol:812966881089552404> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField(" <a:eien_sol:812966881089552404> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField(" <a:eien_sol:812966881089552404> **Çalışma süresi**", seksizaman, true)
    .addField(" <a:eien_sol:812966881089552404> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(" <a:eien_sol:812966881089552404> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField(" <a:eien_sol:812966881089552404> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField(" <a:eien_sol:812966881089552404> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField(" <a:eien_sol:812966881089552404> **Node.JS sürüm**", `${process.version}`, true)
    .addField(" <a:eien_sol:812966881089552404> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField(" <a:eien_sol:812966881089552404> **Bit**", `\`${os.arch()}\``, true)
    .addField(" <a:eien_sol:812966881089552404> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true);
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
