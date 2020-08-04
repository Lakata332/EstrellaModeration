const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require("ms");
const db = require('quick.db');;
var prefix = ayarlar.prefix;
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (client, message, args) => {
//alt satıra mute hammer yani mute atabilen rolün idsi
  if(!message.member.roles.get("725324025840140328") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));

  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!user) return message.reply("Lütfen Sessize Alınacak Bir Kullanıcıyı Etiketleyin").then(m => m.delete(5000));
   if(user.hasPermission("ADMINISTRATOR")) return message.reply("Yöneticileri Susturamazsın!!").then(m => m.delete(5000));
    
    var muterole = message.guild.roles.get("725741642320969778") // buraya muteli rolü idsi
    
    
     var ceza = message.guild.roles.get("")
        

    if(!muterole) return message.channel.send ("Mute Rolü Yok").then(m => m.delete(5000));
    var muteTime = args[1];
    
    if(!muteTime) return message.channel.send("Süreyi Girmelisin!").then(m => m.delete(5000));
    let reason = args.slice(2).join(" ")
    
    if(!reason) return message.channel.send("Lütfen Bir Sebep Belirtin.").then(m => m.delete(5000));
      if (!yazı[message.author.id]) yazı[message.author.id] = {
        kisi:message.author.id,
     banlar:{
       sayı:0,
       bantarihi:0
     },
     kayıtlar:{
        erkek: 0,
        kız: 0,
        sahte:0,
     },
      muteler:{
        sesmutesi:0,
        chatmute:0,
        karantina:0,
      },
      yetenekler:{
        beatboxer:0,
        vip:0,
        vokal:0,
        yazar:0,
        yazılım:0,
        youteber:0,
        ins:0,
        ressam:0,
        voceactor:0,
        dj:0,
        sevgilimvar:0,
        meltal:0,
      },
     cezalar:{
        sesmute:0,
        chatmute:0,
        karantina:0,
      },
        isim:0,
      };

       if(user.voiceChannel){
  user.setVoiceChannel(null).catch(e => console.log("Bağlantıyı Kesmeye Yetkim Yok"))
  }
  
  await (user.addRole(muterole.id));
await yazı[message.author.id].yetenekler.sesmute++;
    db.set(`muteses_${user.id}`, Date.now());

 db.set(`mutesessüre_${user.id}`, ms(muteTime));
  message.react('✅')
  
  db.add(`egeceza_${user.user.id}`,1)        
   
    setTimeout(function(){
      
             if(user.voiceChannel){
  user.setVoiceChannel(null).catch(e => console.log("Bağlantıyı Kesmeye Yetkim Yok"))
  }
      
      if(!user.roles.get(muterole.id)) return
       user.removeRoles([muterole.id]);
      
          db.delete(`muteses_${user.id}`);
  setTimeout(function(){
    db.delete(`mutesessüre_${user.id}`);
    let embed = new Discord.RichEmbed()
    .setColor(muterole.color)
    .setDescription(`${user} adlı Kullanıcının **Ses Mute** süresi doldu`)
   .setFooter(`${client.user.tag}` , `${client.user.displayAvatarURL}`)
  .setTimestamp()  

    let sChannel = message.guild.channels.get("734197579117494422") //Log atacak yer
    if(!sChannel) return
    sChannel.send(embed)
  },1000)
    },  ms(muteTime));
let süre =muteTime
.replace(/y/g, " Yıl")
.replace(/d/g, " Gün")
.replace(/h/g, " Saat")
.replace(/m/g, " Dakika")
.replace(/s/g, " Saniye")
    let embed = new Discord.RichEmbed()
    .setColor("#f12427")
    .setDescription(`
${user} adlı kişi Ses Mutesi Atıldı 
Ceza Süresi : **${süre}**
Ceza Sebebi : **${reason}**
`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    let sChannel = message.guild.channels.get("734197579117494422") //Log atacak yer
    if(!sChannel) return
    sChannel.send(embed)


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vmute"],
  permLevel: 0
};

exports.help = {
  name: 'vmute',
  description: 'Ege Abi Siqer Yat Aşşa Vmute.',
  usage: 'vmute etiket süre sebep '
};
 
