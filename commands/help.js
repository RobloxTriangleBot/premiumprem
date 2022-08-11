const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://cdn.discordapp.com/attachments/1006373984020988071/1006962952781443114/C.jpg')
.addField('__Premium Helping__','\n`m+spotify` To Get A Spotify Account \n`m+hulu` To Get A Hulu Account \n`m+minecraft` To Get A Minecraft Account \n`m+nitro` To Get A Nitro Code \n`m+nordvpn` To Get A NordVPN Account \n`m+origin` To Get A Origin Account \n`m+proxy` To Get A Proxy \n`m+disney` To Get A Disney+ Account \n`m+netflix` To Get A Netflix Account \n`m+ipvanish` To Get an IPVanish Account \n\n **✩** There is a possibility you get a working account but its not guaranteed');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
