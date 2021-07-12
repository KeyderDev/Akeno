/*
faltan: handhold, nom, glomp, slap, kill, happy, wink, poke, dance, cringe

API link: https://api.waifu.pics/endpoints
*/

module.exports = [
{
name:"pat",
aliases:["patting"],
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname acaricia a $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me acaricia!!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[ep;pat]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"hug",
aliases:["hugging", "cuddle"],
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname abrazo a $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me abraza OwO]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[ep;hug]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"bully",
aliases:["bullie"],
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname molesta a $nickname[$get[user]] ùnú]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me molesta... <:literalmentepaveztodoslosdomingo:819762826394468353>]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[ep;bully]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea sano...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"cry",
aliases: null,
code:`
$title[$nickname empezo a llorar]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$footer[$get[r];$authorAvatar]
$color[f0f0f0]
$let[ep;cry]
$let[r;$randomText[Sera por que su waifu no es real?;Nadie lo quiere?;Que le han hecho?!?;Pidele a $userTag[788869971073040454] que te consuele]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"kiss",
aliases:["kisses"],
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname beso a $nickname[$get[user]] owo]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
ew...
$endif

$let[ep;kiss]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"lick",
aliases: null,
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname lamio $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
ew...
$endif

$let[ep;lick]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"smug",
aliases: null,
code:`
$title[$nickname presume$randomText[... ash;;;]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$let[ep;smug]
$let[user;$findMember[$message;no]]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"punch",
aliases:["bonk","hit"],
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname golpeo a $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me golpeo!!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[#FF0000]
$endif

$let[ep;bonk]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;Acaso eres masoquista!?]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"bite",
aliases: null,
code:`
$if[$findMember[$message;no]!=$clientID]
$title[$nickname mordio a $nickname[$get[user]]!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me mordio!! ùnú]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[ep;bite]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;Acaso eres masoquista!?]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"blush",
aliases:["blushed"],
code:`
$title[$nickname se sonroja]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$let[ep;blush]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
},{
name:"smile",
aliases: null,
code:`
$if[$message!=]
$if[$findMember[$message;no]!=$clientID]
$title[$nickname le sonrie a $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[$nickname me sonrie?!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[ep;smile]
$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]

$else
$title[$nickname sonrie]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$let[ep;smile]
$endif
`
},{
name:"wave",
aliases:["greet"],
code:`
$if[$toLowercase[$message]!=everyone]
$if[$findMember[$message;no]!=$clientID]
$title[$nickname saluda a $nickname[$get[user]]]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]

$else
$title[Hola $nickname!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[f0f0f0]
$endif

$let[user;$findMember[$message;no]]

$onlyIf[$findMember[$message;no]!=$authorID;{title:ERROR}{description:No creo que eso sea posible...}{color:f0f0f0}]
$onlyIf[$findMember[$message;no]!=undefined;{title:ERROR}{description:No se encontro al usuario}{color:f0f0f0}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]

$else
$title[$nickname saluda a todo el mundo!]
$image[$jsonRequest[https://api.waifu.pics/sfw/$get[ep];url]]
$color[#f0f0f0]
$endif

$let[ep;wave]
`
},];