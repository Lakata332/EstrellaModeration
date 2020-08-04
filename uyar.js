const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
  
  if(!message.member.hasPermissions('MANAGE_MESSAGE')) return message.channel.send(`:x: Bu mesajı kullanmak için: \`MESAJLARI YÖNET\` yetkisine sahip olmalısınız.`)
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author; //kimin yaptığını loga düşeceği için yetkili gerekli
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("lütfen talimatları uygulayın. Örnek Kullanım : **av!uyar @kullanıcı sebep**")
  
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) return message.channel.send("Sebep belirtilmedi!")
  
  let uyarı = db.add(`uyarı_${user.id}`, 1)
  
  message.channel.send(`Baraşıyla <@${user.id}> adlı üye özelden uyarıldı! ayarlanan log kanalına loglandı!`)
  
  const embed = new Discord.RichEmbed()

  .addField("Uyaran Yetkili:", `${yetkili}`)
  .addField("Sebep:", `${reason}`)
  .addField("Uyarı Adeti:", `${uyarı}`)
  .addField('3. uyarıda kickleniceksin')
  message.client.channels.get(uyarılog).send(embed) 
  user.send(embed) //üyeye dm yoluyla mesaj atar.
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyar"
}