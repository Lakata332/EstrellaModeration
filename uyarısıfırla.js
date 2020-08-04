const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message) => {
  
   if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send(`:x: Bu mesajı kullanmak için: \`YÖNETİCİ\` yetkisine sahip olmalısınız.`)
  
  db.delete(`uyarlog_${message.guild.id}`)
  
  message.channel.sendEmbed(new Discord.RichEmbed().setColor('RED').setAuthor("Başarıyla uyarı log kanalı sıfırlandı!", message.author.avatarURL))
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılog-sıfırla"
}