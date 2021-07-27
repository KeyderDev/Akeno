module.exports = ({
name: "profile",
aliases: ["perfil", "prof"],
code: `$color[$getGlobalUserVar[profilecolor]]$title[Perfil]$description[
<:akenocoin:842884874729816114>Dinero: $getUserVar[Money;$findUser[$message[1]]]
**Creacion de la cuenta:** 
$creationDate[$findUser[$message[1]];date]
**Insignias**: 
$getGlobalUserVar[premiumbadge;$findUser[$message[1]]] $getGlobalUserVar[devbadge;$findUser[$message[1]]] $getGlobalUserVar[betabadge;$findUser[$message[1]]]
$getGlobalUserVar[DCM;$findUser[$message[1]]] $getGlobalUserVar[bughunter;$findUser[$message[1]]] $getGlobalUserVar[bugfixer;$findUser[$message[1]]] $getGlobalUserVar[workerbadge;$findUser[$message[1]]] $getGlobalUserVar[pibadge;$findUser[$message[1]]]
**Status personalizado**: 
$getGlobalUserVar[pstatus;$findUser[$message[1]]] 
**Info**
<:warn:832339362498215962>Advertencias: $getUserVar[warn;$findUser[$message[1]]]
<:check2:830853577718497313>Blacklist: $getGlobalUserVar[sbl;$findUser[$message[1]]]]









$thumbnail[$get[i]]
$if[$findUser[$message[1];no]!=undefined]
$let[i;$userAvatar[$findUser[$message[1]]]]
$else
$let[i;$authorAvatar]
$endif

$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})