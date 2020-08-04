const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**Koruma Menüsü**\n:white_small_square: **.uyarı-sistemi** Uyarı Sistemi.\n:white_small_square: **.ban-sistemi** Ban Sistemi.\n:white_small_square: **.jail-sistemi** Jail Sistemi.\n:white_small_square: **.mute-sistemi** Mute Sistemi\n:white_small_square: **.taşı** Taşırsınız.\n:white_small_square: **.vmute** Seste mute.')
.addField(`➥ Linkler`, `\n✅ [Destek Sunucusu](https://discord.gg/R6r2aUf)`)
.setFooter(`${message.author.tag}` , client.user.avatarURL)
message.channel.send(embedyardim);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Sunucu Koruma Komutlarını Gösterir',
  usage: 'koruma [komut]'
  
};