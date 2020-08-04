const Discord = require('discord.js');
const moment = require('moment')
const talkedRecently = new Set();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

exports.run = async (bot, message, args, client) => {
  
const db = require('quick.db');
let data2 = await db.fetch(`banyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(` Ban yetkilisi rolünü bulamadım.\nBilgi almak için: av!ban-rol ayarla`)
let data3 = await db.fetch(`bankanal_${message.guild.id}`)
if(!data3)  return message.channel.send(` Ban kanalını bulamadım.\nBilgi almak için: av!ban-kanal`)
let yetkili = message.guild.roles.get(data2)
if(!yetkili) return message.channel.send(` Ban yetkilisi ayarlı değil?!\nBilgi almak için: av!ban-sistemi`)
let kanal = message.guild.channels.get(data3)
if(!kanal) return message.channel.send(` Ban kanalı ayarlı değil?!\nBilgi almak için: av!ban-sistemi`)
  

   if (!message.member.roles.has(`${yetkili.id}`)) return message.channel.send(`**${ayarlar.prefix}ban** isimli komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
    let reason = args.slice(1).join(' ')
    
    if (!args[0]) return message.channel.send(`:warning: Kimi Yasaklamak İstediğini Yazmalısın!`)
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(` Etiketlediğin kişiyi sunucuda bulamadım. Bir daha dene.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(` Etiketlediğin kişiyi sunucuda bulamadım. Bir daha dene.`)
    if (member.hasPermission("BAN_MEMBERS")) return message.channel.send(` Bu kişiyi yasaklayamam.`)
   member.send(`**Venosa Ban** sistemi ile ${message.guild.name} (${message.guild.id}) sunucusunda ${message.author} (${message.author.id}) tarafından ${reason} sebebiyle yasaklandın.`)
        member.ban(`${message.author.tag} tarafından ${reason}`)
                message.channel.send(` ${user.tag}, isimli kişi başarıyla yasaklandı.`)
        const yasaklandı = new Discord.RichEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setDescription(`Bir kişi sunucudan yasaklandı!`)
  .addField(`**Yasaklanan kişi:**`, user, true)
.setColor(`#f3c7e1`)
  .addField(`**Yasaklayan kişi:**`, `<@${message.author.id}>`, true)
  .addField(`**Yasaklanma sebebi:**`, reason ? reason : 'Sebep belirtilmemiş.', true)
    .setThumbnail(user.avatarURL)
.setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
kanal.send(yasaklandı)
   }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla', 'uçur'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Etiketlediğiniz kişiyi sebebi ile sunucudan banlar.',
	usage: 'bans kişi sebep',
  kategori: '**MODERASYON**',
  permLvl: '**Bulunmuyor.** (.ban-yetkilisi ayarla)'
};