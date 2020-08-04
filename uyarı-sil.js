const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
  
  if(!message.member.hasPermissions('MANAGE_MESSAGE')) return message.channel.send(`:x: Bu mesajı kullanmak için: \`MESAJLARI YÖNET\` yetkisine sahip olmalısınız.`)
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author; //kimin yaptığını loga düşeceği için yetkili gerekli
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Hata, bir üye etiketlemedin!")
  
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) return message.channel.send("Sebep girmedin!")
  
  let uyarı = db.subtract(`uyarı_${user.id}`, 1)
  
  message.channel.send(`Baraşıyla <@${user.id}> adlı üyenin uyarısı başarıyla silindi! Gerkli işlemleri loga sundum.`)
  
  const embed = new Discord.RichEmbed()
  
  .setTitle("İşlem: Uyarı Silme")
  .addField("Uyarısı Silinen Üye:", `<@${user.id}>`)
  .addField("Yetkili:", `${yetkili}`)
  .addField("Sebep:", `${reason}`)
  .addField("Uyarı Adeti:", `${uyarı}`)
  message.client.channels.get(uyarılog).send(embed) //bir sonraki videoda
  user.send(embed) //üyeye dm yoluyla mesaj atar.
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarı-sil"
}