module.exports = ({
name: "deposit",
aliases: ['dep'],
code: `
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[Money;$sub[$getUserVar[Money;$authorID];$message];$authorID]
$description[Haz depositado $message$ en tu banco correctamente!]
$author[$username;$authorAvatar]

$onlyIf[$message<=$getUserVar[Money;$authorID];:x:| La cantidad introducida es mayor de la que tienes!]
$onlyIf[$message>0;:x:| No puedes depositar un valor menos de \`0\`. Si quieres depositar todo el dinero, usa  \`*dep-all\`]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})