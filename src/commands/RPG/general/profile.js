module.exports = ({
name: "profile",
aliases: "perfil",
code: `$color[5865F2]$title[Perfil]$description[
Creacion de la cuenta: $creationDate[$findUser[$message[1]];date]
Insignias del soporte de Akeno: $getGlobalUserVar[DCM;$findUser[$message[1]]] $getGlobalUserVar[bughunter;$findUser[$message[1]]] $getGlobalUserVar[bugfixer;$findUser[$message[1]]] $getGlobalUserVar[usuario;$findUser[$message[1]]] $getGlobalUserVar[premiumbadge;$findUser[$message[1]]] $getGlobalUserVar[devbadge;$findUser[$message[1]]] $getGlobalUserVar[workerbadge;$findUser[$message[1]]] $getGlobalUserVar[betabadge;$findUser[$message[1]]] $getGlobalUserVar[pibadge;$findUser[$message[1]]]
Status personalizado: $getGlobalUserVar[pstatus;$findUser[$message[1]]]]
$thumbnail[$getGlobalUserVar[profilepic;$findUser[$message[1]]]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})