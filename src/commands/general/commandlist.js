module.exports = ({
 name: "commandlist",
 code: `$author[$jsonRequest[https://aoi.leref.ga/functions/$noMentionMessage;description;{author:A ocurrido un error mientras se renderizaba.}]$jsonRequest[https://aoi.leref.ga/functions/$noMentionMessage;message]]
$title[$jsonRequest[https://dbdjs.leref.ga/functions/$noMentionMessage;usage;{title:Error 404.}]]
$color[RANDOM]
$addTimestamp
$argsCheck[>1;Functions?]
$onlyIf[$checkContains[$botOwnerID;$authorID]!=false;]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
});