const Discord = require('discord.js');
const client = new Discord.Client();
client.login(Process.env.token);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//Commandes
//Divers
client.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.find(channel => channel.name === 'bienvenue')
  if (!channel) return
  channel.send(`Bienvenue dans mon serveur , Capitaine ${member}`)
  });
client.on('message', msg => {
  if (msg.content === '!createur') {
    msg.channel.send('ZIG#3358');
  }
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.channel.send('https://cdn.discordapp.com/attachments/690908440822022204/690909406581489664/unknown.png');
  }
});
client.on('message', msg => {
    if (msg.content === 'zig est con') {
      msg.react('😐');
    }
  });
client.on('message', msg => {
    var roll = Math.floor(Math.random() * 100) + 1;
    if (msg.content === '!roulette') {
      msg.reply('tu est tombé sur un ' + roll);
    }
  });
//Modération
  client.on('message', message => {
    if (message.content.startsWith('!kick')) {
      const member = message.mentions.members.first()
      if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.reply('Vous ne pouvez pas faire ceci');
        return;
    };
      if (!member) {
        return message.reply(
          `Tu dois mentionné une personne`
        )
      }
  
      if (!member.bannable) {
        return message.reply(`Je ne peut pas kick cette personne , desolé!`)
      }
  
      return member
        .kick()
        .then(() => message.reply(`${member.user.tag} a parfaitement été kick`))
        .catch(error => message.reply(`Erreur`))
    }
  })
  client.on('message', message => {
    if (message.content.startsWith('!ban')) {
      const member = message.mentions.members.first()
      if(!message.member.hasPermission('BAN_MEMBERS')) {
        message.reply('Vous ne pouvez pas faire ceci');
        return;
    };
      if (!member) {
        return message.reply(
          `Tu dois mentionné une personne`
        )
      }
  
      if (!member.bannable) {
        return message.reply(`Je ne peut pas ban cette personne , desolé!`)
      }
  
      return member
        .ban()
        .then(() => message.reply(`${member.user.tag} a parfaitement été ban`))
        .catch(error => message.reply(`Erreur`))
    }
  })
