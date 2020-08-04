const Discord = require('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  
  .setColor('#6600FF')
  .setAuthor(`Venosa`)
  .setTitle("Destek Sunucumuz")
  .setURL(`https://discord.gg/NwNDkxB`)
  .addField("**• av!uyar @üye {sebep} 》**", `Etiketlenen kişiyi uyarırsınız.`)
  .addField("**• av!uyarı-sil @üye 》**", `Etiketlenen kişiden uyarısını silersiniz.`)
  .addField("**• av!tüm-uyarılar 》**", `Sunucuda var olan bütün uyarı gösterir.`)
  .addField("**• av!uyarılar @üye 》**", `Etiketlenen üyenin uyarısını gösterir.`)
  .addField("**• av!uyarılog-ayarla #kanal》**", `Uyarı Log kanalı ayarlarsınız`)
  .addField("**• av!uyarılog-sıfırla》**", `Uyarı Log kanalı sıfırlarsınız`)
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
  name: 'uyarı-sistemi'
};