const Discord = require('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  
  .setColor('#6600FF')
  .setAuthor(`Venosa`)
  .setTitle("Destek Sunucumuz")
  .setURL(`https://discord.gg/NwNDkxB`)
  .addField("**• av!jail-kanal ayarla #kanal 》**", `Jail log kanalını ayarlarsınız.`)
  .addField("**• av!jail-rol ayarla @rol》**", `Jail atıldıktan sonra verilicek rol ayarlarsınız.`)
  .addField("**• av!jail-yetkilisi ayarla @rol》**", `Jail atabilecek rolü ayarlarsınız.`)
  .addField("**• av!jail @üye <10s,10m,10h,10d> sebep》**", `Jail atma komutu.`)
  .addField("**• av!jail-kanal sıfırla 》**", `Jail log kanalını sıfırlarsınız.`)
  .addField("**• av!jail-rol sıfırla 》**", `Jail sonra verilicek rolü sıfırlarsınız.`)
  .addField("**• av!jail-yetkilisi sıfırla 》**", `Mute atabilecek rolü sıfırlarsınız.`)
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
  name: 'jail-sistemi'
};