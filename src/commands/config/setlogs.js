module.exports = {
name: "setlogs",
  description: "Establecer un canal para registros.",
  usage: "{prefix}setlogs (#canal)", /// () = Obligatorio | <> = Opcional 
  perms: "Admin",
  nonPrefixed: false,
code: `
$setServerVar[Logs;true]
$setServerVar[LogsChannel;$findChannel[$message[1]]]
Logs establecidos a <#$findChannel[$message[1]]>
$argsCheck[>1;{description:<:Error:844685985468121148> Selecciona un canal para los logs}{color:RED}]
$onlyPerms[manageserver;{description:<:Error:844685985468121148> Permisos insuficientes, permisos requeridos: **manageserver**}{color:RED}]
$onlyIf[$channelExists[$findChannel[$message[1]]]==true;{description: <:Error:844685985468121148> Este canal de texto no existe!}{color:RED}]
$onlyIf[$channel[$findChannel[$message[1]];type]==text;{description:<:Error:844685985468121148> El canal <#$findChannel[$message[1]]> debe ser de texto} {color:RED}]
$onlyBotPerms[mutemembers;embedlinks;manageroles;kick;No tengo alguno de los siguientes permisos: \`embedlinks\` , \`manageroles\` , \`mutemembers\` , \`kick\` ]
$suppressErrors[Ha ocurrido un error no definido, enviando reporte a la consola... $log[$error]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
}