const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
    
  const kullanıcı = message.author; //kimin yaptığını loga düşeceği için yetkili gerekli
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Hata, bir üye etiketlemedin!")
  
  let uyarı = db.fetch(`uyarı_${user.id}`)
  
  const embed = new Discord.RichEmbed()
  
  .setTitle("Uyarı Sistemi")
  .addField("Kontrol edilen üye:", `<@${user.id}>`)
  .addField("Uyarı Sayısı:", `${uyarı}`)
  .addField("Komutu Kullanan:", `${kullanıcı}`)
  
  message.channel.send(embed)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılar"
}