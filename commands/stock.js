const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Para™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`m+spotify`: 100k+ \n`m+hulu`: 100k+ \n`m+minecraft`: 400k+ \n`m+nitro`: 300k+ \n`m+nordvpn`: 200k+ \n`m+origin`: 2000 \n`m+proxy`: 300k+ \n`m+disney`: 65k+ \n`m+netflix`: 6k+ \n`m+ipvanish`: 10k \n\n **✩** Dont expect every single account to work. Just because its Premium does not mean all accounts work.');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
