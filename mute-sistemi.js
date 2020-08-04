const Discord = require('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  
  .setColor('#6600FF')
  .setAuthor(`Venosa`)
  .setTitle("Destek Sunucumuz")
  .setURL(`https://discord.gg/NwNDkxB`)
  .addField("**• av!mute-kanal ayarla #kanal 》**", `Mute log kanalını ayarlarsınız.`)
  .addField("**• av!mute-rol ayarla @rol》**", `Mutelendikten sonra verilicek rol ayarlarsınız.`)
  .addField("**• av!mute-yetkilisi ayarla @rol》**", `Mute atabilecek rolü ayarlarsınız.`)
  .addField("**• av!mute @üye <10s,10m,10h,10d> sebep》**", `Mute atma komutu.`)
  .addField("**• av!mute-kanal sıfırla 》**", `Mute log kanalını sıfırlarsınız.`)
  .addField("**• av!mute-rol sıfırla 》**", `Mutelendikten sonra verilicek rolü sıfırlarsınız.`)
  .addField("**• av!mute-yetkilisi sıfırla 》**", `Mute atabilecek rolü sıfırlarsınız.`)
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
  name: 'mute-sistemi'
};