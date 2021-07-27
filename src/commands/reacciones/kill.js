module.exports = ({
name: "kill",
code: `

$onlyIf[$message!=;]


$setUserVar[kill;$sum[$getUserVar[kill;$authorID];1];$authorID]
$argsCheck[>1; <@$authorID> Necesitas mencionar a alguien!]
$color[D1BBBB]
$description[<@$authorID> Asesinó a $username[$mentioned[<]]]
$image[$randomText[https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoLfUTz3xp161SGANvlrZueYdMSsZRCd0i2OY28mi6FKsbOtSY;https://pa1.narvii.com/6180/da069c7b4af4ee272b95a0579c05d0c7dbe2082e_hq.gif;https://static.tumblr.com/5a82c0924c91fbf439429aef75cf46a0/yxh9pwd/PCqmpf8a9/tumblr_static_tumblr_mkostlzdnu1qj365jo1_500.gif;https://k45.kn3.net/taringa/3/2/0/1/1/7/9/19952000/0C4.gif]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})