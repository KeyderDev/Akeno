module.exports = {
 name: "tempban",
 code: `
 $sendDM[$findMember[$message[1]]; $title[Temp ban acabado]$description[
 Tu temp-ban en **$serverName** a acabado, [Invite del servidor]($getServerInvite)
 $unban[$mentioned[1]]
 $wait[$message[2]]
 $ban[$mentioned[1]]
 $channelSendMessage[$channelID;$title[Temp-Ban]$description[<@$mentioned[1]> fue tempbaneado 
 Razon: $message[2]
 Administrador: <@$authorID>
 Le enviare un mensaje a su md cuando le pase el temp ban]
 $color[D1BBBB]
 $argsCheck[>2;:x:| Uso: $getServerVar[prefix]tempban @Usuario <Tiempo> <Razon>]
 $onlyPerms[ban;:x:| Necesitas el permiso de \`Banear Miembros\` para usar este comando]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];:x:| Mi rol tiene que estar encima de los demas]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];:x:| El usuario es mayor que tu en la posicion de roles.]
 $onlyIf[$findmember[$message[1]]!=$authorID;:x:| No te puedes tempbanear a ti mismo]
 $onlyIf[$findMemebr[$message[1]]!=;:x:| Necesitas mencionar a alguien.]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
 `
}