
const Discord = require("discord.js");
var channels = ["channel-id"]
// This channels array is the array of channels that will be locked and unlocked. To add a channel get the channel id of that channel (You can google how to do this) and put this is the array.

const client = new Discord.Client();
client.login("here goes your bot-id")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var args = msg.content.split(' ').slice(1);
  if (msg.content.startsWith('-')) {
    var member = msg.mentions.members.first();
    console.log(member)
    var ms = msg.content;
    var command = ms.substring(1);
    var guild = msg.guild;
    
    if (command.startsWith('unlock')){
      for (var i = 0; i < channels.length; i++) {
        let channel = msg.guild.channels.cache.get(channels[i])
        channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
      }
    }

    if (command.startsWith('lock')){
      for (var i = 0; i < channels.length; i++) {
        let channel = msg.guild.channels.cache.get(channels[i])
        channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: true });
      }
    }
}});