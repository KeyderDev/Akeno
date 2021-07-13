module.exports = ({
name: "invites",
code: `
$if[$findMember[$message;no]!=$authorID]
$title[Invitaciones]
$description[
Invitaciones de <@$findMember[$message;no]>
Reales: $getUserVar[reales;$findMember[$message[1]]]
Falsas: $getUserVar[falsas;$findMember[$message[1]]]]
$color[D1BBBB]

$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se ha encontrado al usuario}{color:f0f0f0}]
$else
$title[Invitaciones]
$description[
Reales: $getUserVar[reales;$authorID]
Falsas: $getUserVar[falsas;$authorID]]
$color[D1BBBB]
$endif
   $onlyIf[$getServerVar[invitetracker]==on;:x:| El sistema de invite tracker no esta habilitado en este servidor]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})