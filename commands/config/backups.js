
    const Discord = require('discord.js');
    const client = new.Discord.CLient();
    const { Client, MessageEmbed } = require('discord.js');
    const backup = require('discord-backup');
    backup.setStorageFolder(__dirname+"/backups/")
    
    module.exports = {
    name: "create-backup",
    alias: [],

    execute (client, message, args){

    var perms = message.member.hasPermission(ADMINISTRATOR)
    if(message.author.id !== message.owner.guild.id) return message.channel.send(':x:| Solo el propietario del servidor puede usar este comando')

    const accion = args[0]
    if(!accion) return message.channel.send(":x:| Debes de decir que quieres hacer")

    if(accion === 'create'){

    backup.create(message.guild, {
    jsonBeautify: true
   }).then(backupData => {
   const embed = new Discord.MessageEmbed()

  .setTitle('Backup Creado')
  .setDescription('Para usar el backup ponga $eval[$getServerVar[prefix]]backup-load ${backupData.id}') 
  .setColor('D1BBBB')
  .setFooter(':x:| No compartas el id con nadie, ya que pueden utilizarlo para raid')
 
  message.author.send(embed)

  const embed2 = new Discord.MessageEmbed()

  .setTitle('Backup Creado')
  .setDescription(':white_check_mark:| El ID del backup a sido mandado a tu md')
  .setColor(D1BBBB)

  message.channel.send(embed2)

   })
   }
      if(accion = 'load'){

      let backupID = args[1]
      if(!backupID) return message.channel.send(":x:| Debes poner el ID del backup")
      const embed = new Discord.MessageEmbed 
  
      .setTitle('Cargar Backup')
      .setDescription(':warning:| Estas seguro de que quieres cargar el backup? Esto eliminara los canales, roles, y emojis actuales, y los sustituira por los del           backup, para confirmar, reacciona a :white_check_mark')
      .setColor('D1BBBB')

      backup.fetch(backupID).then(async () => {
      message.channel.send(embedfinal).then(msg => {
      msg.react(':white_check_mark:')

      msg.awaitReactions((reaction, user) => {
     
      if(message.author.id !== user.id) return;

      if(reaction.emoji.id === ':white_check_mark:'){
      backup.load(backupID, message.guild).then (() => {
      clearGuidBeforeRestore: true, 
      backup.remove(backupID)
      }).catch((err) => {
      return message.channel.send(":x:| Ha ocurrido un error mientras se cargaba el backup, intentelo de nuevo")
      })
      }
      })
      })
      })
}
}

}