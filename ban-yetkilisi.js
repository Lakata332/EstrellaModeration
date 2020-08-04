const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-yetkilisi** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, av!fban-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: av!yardım ban-yetkilisi`)
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol)     return message.channel.send(` Bir rol etiketle.`)
  else newRole = message.mentions.roles.first().id
  let id = message.mentions.roles.first().id  
    db.set(`banyetkilisi_${message.guild.id}`, id)
  let banrol = await db.set(`banyetkilisi_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(` Etiketlediğin rolü bulamadım. Silinmiş olabilir, bi' kontrol et.`)
    message.channel.send(` Ban yetkilisi <@&${newRole}> olarak ayarlandı.`)
  } 

  if (args[0] == 'sıfırla') {
    
    
    db.delete(`banyetkilisi_${message.guild.id}`)

    message.channel.send(` Ban yetkilisi başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['banyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'ban-yetkilisi',
 description: '+ban komutunu hangi role sahip olanların kullanacağını ayarlarsınız.',
 usage: 'ban-yetkilisi ayarla @rol',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};