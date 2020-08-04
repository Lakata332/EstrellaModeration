const Discord = require('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  
  .setColor('#6600FF')
  .setAuthor(`Venosa`)
  .setTitle("Destek Sunucumuz")
  .setURL(`https://discord.gg/NwNDkxB`)
  .addField("**• av!ban-kanal ayarla 》**", `Ban atıldıktan sonra bildirim gidicek kanalı ayarlarsınız.`)
  .addField("**• av!ban-yetkilisi ayarla @rol 》**", `Ban atabilecek rölü ayarlarsınız.`)
  .addField("**• av!ban @kullanıcı sebep 》**", `Ban atma komutu.`)
  .addField("**• av!ban-kanal sıfırla 》**", `Ban kanalını sıfırlarsınız.`)
  .addField("**• av!ban-yetkilisi sıfırla 》**", `Ban yettkilisini sıfırlarsınız.`)
  .setTimestamp()
  
  message.channel.send(embed)
  
} 

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'ban-sistemi'
};