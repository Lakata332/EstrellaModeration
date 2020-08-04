const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message) => {
  
   if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send(`:x: Bu mesajı kullanmak için: \`YÖNETİCİ\` yetkisine sahip olmalısınız.`)
  
  let kanal = message.mentions.channels.first();
  if (!kanal) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('GREEN').setAuthor("Lütfen ayarlanacak kanalı etiketleyin.", message.author.avatarURL))
  
  var uyarılog = db.set(`uyarlog_${message.guild.id}`, kanal.id)
  
  message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLUE').setAuthor("Başarıyla uyarı log kanalı ayarlandı!", message.author.avatarURL))
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılog-ayarla"
}