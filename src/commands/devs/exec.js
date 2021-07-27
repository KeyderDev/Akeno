module.exports = ({
    name: "execute",
    aliases: ['exec'],
    description: "Ejecuta un código en la consola",
    usage: "$getServerVar[prefix]execute <texto>",
    category: "Utilidad Desarrollador",
    code: `
  $title[Código ejecutado en la consola]
  $addField[:outbox_tray: **Output:**;\`\`\`$exec[$message]\`\`\`;no]
  $addField[:inbox_tray: **Input:**;\`\`\`$message\`\`\`;no]
  $color[BLUE] $addTimestamp
  $argsCheck[>1;<@$authorID> Uso del comando: \`$getServerVar[prefix]execute <texto>\`]
  $onlyForIds[798250899041681428;788869971073040454;:x:| Solo los desarrolladores del bot puede usar este comando]
  `
  })