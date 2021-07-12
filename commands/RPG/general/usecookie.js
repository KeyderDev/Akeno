module.exports = ({
name: "usecookie",
code: `
$title[$username se esta comiendo una galletita uwu]
$description[]
$footer[]
$color[D1BBBB]
$image[$randomText[https://tenor.com/view/anime-chew-chewing-cookie-sweet-gif-12390215;https://tenor.com/view/cookie-mashiro-anime-gif-5446986;https://tenor.com/view/cartoon-gif-8537685;https://tenor.com/view/anime-kon-cute-eat-eating-gif-12396067;https://tenor.com/view/anime-eating-cookie-gif-14083082;]]] 
$setUserVar[cookies;$sub[$getUserVar[cookies];1]]
$onlyIf[$getUserVar[cookies;$authorID]>0;:x:| No tienes ninguna :cookie:galleta para usar este comando u.u!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`


})