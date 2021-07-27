module.exports = [{
name: "help",
aliases: ['ayuda'],
code: `
$reactionCollector[$splitText[1];$authorID;3m;🎶,🛠,🎮,⚙,💼,🔎,🧩,<:check:845428956491939850>,🎲,🔗,🔵,↩️;music,mod,diver,config,rpg,search,util,security,lvl,react,bothelp,menu;yes]

$textSplit[$sendMessage[{title:Comandos del bot Akeno e informacion}{description:Hola! Soy Akeno! Me gusta ayudar a los demas uwu
Para Musica#COLON# 🎶
Para Moderacion#COLON# 🛠
Para Diversion#COLON# 🎮
Para Configuracion#COLON# ⚙
Para RPG#COLON# 💼
Para Busqueda#COLON# 🔎 *BETA*
Para Utilidad#COLON# 🧩
Para Seguridad#COLON# <:check:845428956491939850>
Para Leveling#COLON# 🎲
Para Reacciones#COLON# 🔗
Extras#COLON# 🔵
Para volver al menu aqui#COLON# ↩️
    
**Links**
[Documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/) | [Soporte](https://discord.gg/tsrfmSgapV) | [Invite](https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot) | [Paypal](https://paypal.me/akenobot1)}{footer:Este mensaje tiene 3 minutos de uso}{color:D1BBBB};yes]; ]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{//categoría de configuración
name: "config",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de configuracion}{description:
- $getServerVar[prefix]setsug
- $getServerVar[prefix]leveling enable/disable
- $getServerVar[prefix]set-mute
- $getServerVar[prefix]reset-inv
- $getServerVar[prefix]set-verifiedrole
- $getServerVar[prefix]set-notverifiedrole
- $getServerVar[prefix]set-newrole
- $getServerVar[prefix]desactivate-captcha
- $getServerVar[prefix]desactivate-newrole
- $getServerVar[prefix]set-autorole
- $getServerVar[prefix]desactivate-autorole
- $getServerVar[prefix]set-muterole
- $getServerVar[prefix]set-confess
}]`,
type:'awaitedCommand'
},{//categoria de interacción
name: "diver",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de Diversion}{description:Aqui tienes comandos para que te diviertas un rato
- $getServerVar[prefix]achievement
- $getServerVar[prefix]meme
- $getServerVar[prefix]confess
- $getServerVar[prefix]ph (texto) *NSFW*

}]`,
type:'awaitedCommand'
},{//caregoria de ranking
name: "lvl",
code: `$editMessage[$message[1];{title:Comandos de leveling}{description:
- $getServerVar[prefix]leveling enable/disable
- $getServerVar[prefix]xpcooldown
- $getServerVar[prefix]l-leaderboard
- $getServerVar[prefix]xp - Para ver el nivel}{color:D1BBBB}`,
type:'awaitedCommand'
},{//categoria de musica
name: "music",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de musica}{description:- $getServerVar[prefix]play
- $getServerVar[prefix]pause
- $getServerVar[prefix]skip
- $getServerVar[prefix]stop
- $getServerVar[prefix]lyrics
- $getServerVar[prefix]queue
- $getServerVar[prefix]skipTo
- $getServerVar[prefix]resume}]`,
type:'awaitedCommand'
},{//categoría de moderacion
name: "mod",
code: `$editMessage[$message[1];{title:Comandos de Moderacion}{description:Aqui tienes los comandos de Moderacion
- $getServerVar[prefix]warn
- $getServerVar[prefix]checkwarns
- $getServerVar[prefix]addrole
- $getServerVar[prefix]serverinfo
- $getServerVar[prefix]unwarn
- $getServerVar[prefix]mute 
- $getServerVar[prefix]unmute 
- $getServerVar[prefix]unwarn
- $getServerVar[prefix]infractions
}{color:D1BBBB}]`,
type:'awaitedCommand'
},{//categoria de utilidad
name: "util",
code: `$editMessage[$message[1];{color:ffff}{title:Comandos de utilidad}{description:
- $getServerVar[prefix]botinfo
- $getServerVar[prefix]ping
- $getServerVar[prefix]profile
- $getServerVar[prefix]inv
- $getServerVar[prefix]setprefix
- $getServerVar[prefix]user-info/serverinfo/channel-info/role-info
- $getServerVar[prefix]avatar
- $getServerVar[prefix]suggest
- $getServerVar[prefix]report
- $getServerVar[prefix]snipe
- $getServerVar[prefix]jumbo/jumbo.id
- $getServerVar[prefix]docs
- $getServerVar[prefix]clean
- $getServerVar[prefix]lock/unlock
- $getServerVar[prefix]function *Aoi.js*
- $getServerVar[prefix]weather (ciudad) *Bugeado*
}]`,
type:'awaitedCommand'
},{//categoria de roleplay
name: "rpg",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de RPG}{description:
- $getServerVar[prefix]work
- $getServerVar[prefix]stream
- $getServerVar[prefix]daily
- $getServerVar[prefix]dep
- $getServerVar[prefix]pay
- $getServerVar[prefix]inv
- $getServerVar[prefix]fish
- $getServerVar[prefix]buycookie
- $getServerVar[prefix]buypico
- $getServerVar[prefix]buycaña
- $getServerVar[prefix]shop
- $getServerVar[prefix]mine
- $getServerVar[prefix]dep
- $getServerVar[prefix]usecookie
- $getServerVar[prefix]buylppan
- $getServerVar[prefix]buylegg
- $getServerVar[prefix]incubate-wolf
- $getServerVar[prefix]wolf-search
- $getServerVar[prefix]wolf-info
- $getServerVar[prefix]buy-lechuga
- $getServerVar[prefix]animal-list
- $getServerVar[prefix]buy-incubadora-potenciada
- $getServerVar[prefix]code
- $getServerVar[prefix]crafteos
- $getServerVar[prefix]descargas
- $getServerVar[prefix]craft-pc
- $getServerVar[prefix]pc
- $getServerVar[prefix]buy-premiumbox
- $getServerVar[prefix]open-premiumbox
- $getServerVar[prefix]buy-diamondbox
- $getServerVar[prefix]open-diamondbox
- $getServerVar[prefix]buy-bmiel
- $getServerVar[prefix]use-moneyspell
-----Comandos de perfil-----
- $getServerVar[prefix]profile
- $getServerVar[prefix]set-pstatus
- $getServerVar[prefix]set-profilepic
- $getServerVar[prefix]buy-elixiroscuro
- $getServerVar[prefix]buy-cascominero
^ Puede que este desactualizado}]`,
type:'awaitedCommand'
},{//categoria de busqueda
name: "search",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de busqueda}{description:
Aqui tienes diferentes comandos para buscar cosas en la web!
- $getServerVar[prefix]anime (*Tarda un poco*)
- $getServerVar[prefix]color}]`,
type:'awaitedCommand'
},{//categoria de racciones
name: "react",
code: `$editMessage[$message[1];{title:Comandos de reaccion}{description:
- $getServerVar[prefix]pat
- $getServerVar[prefix]hug
- $getServerVar[prefix]bully
- $getServerVar[prefix]lick
- $getServerVar[prefix]smug
- $getServerVar[prefix]punch
- $getServerVar[prefix]slap
- $getServerVar[prefix]bite
- $getServerVar[prefix]smile
- $getServerVar[prefix]cry
- $getServerVar[prefix]angry
- $getServerVar[prefix]wave
- $getServerVar[prefix]kill
}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "security",
code: `$editMessage[$message[1];{title:Comandos de Seguridad}{description:
En desarrollo, v1.7.0
- $getServerVar[prefix]antiusers-on/off
- $getServerVar[prefix]antibots-on/off
- $getServerVar[prefix]antilinks-on/off
- $getServerVar[prefix]antichannels-on/off
- $getServerVar[prefix]blockwords1/2/3/4/5 
- $getServerVar[prefix]set-antialt
- $getServerVar[prefix]antimalicious-on/off - No permite usuarios de la blacklist de Akeno entrar a tu servidor
- $getServerVar[prefix]systems
- $getServerVar[prefix]setlogs
- $getServerVar[prefix]enable-report/set-reportchannel
- $getServerVar[prefix]captcha/verify
- $getServerVar[prefix]desactivate-logs
Cuenta:
- $getServerVar[prefix]register
- $getServerVar[prefix]login
- $getServerVar[prefix]change-password
- $getServerVar[prefix]password-forgot
- $getServerVar[prefix]logout
- $getServerVar[prefix]manage-premium
- $getServerVar[prefix]cancel-premium}{color:GREEN}]
`,
type:'awaitedCommand'
},{
name:"bothelp", 
code: `$editMessage[$message[1];{title:Comandos y cosas extra}{description:
- Comandos Premium
$getServerVar[prefix]lyrics
$getServerVar[prefix]dm
$getServerVar[prefix]weekly
$getServerVar[prefix]anime
$getServerVar[prefix]remind 
$getServerVar[prefix]buy-premiumbox
$getServerVar[prefix]open-premiumbox
$getServerVar[prefix]set-profilecolor
$getServerVar[prefix]define (solo ingles)}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "menu",
code: `$editMessage[$message[1];{title:Comandos del bot Akeno e informacion}{description:Hola! Soy Akeno! Me gusta ayudar a los demas uwu
Para Musica#COLON# 🎶
Para Moderacion#COLON# 🛠
Para Diversion#COLON# 🎮
Para Configuracion#COLON# ⚙
Para Roleo#COLON# 💼
Para Busqueda#COLON# 🔎 *BETA*
Para Utilidad#COLON# 🧩
Para Seguridad#COLON# <:check:845428956491939850>
Para Leveling#COLON# 🎲
Para Reacciones#COLON# 🔗
Extras#COLON# 🔵
Para volver al menu aqui#COLON# ↩️
    
**Links**
[Documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/) | [Soporte](https://discord.gg/tsrfmSgapV) | [Invite](https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot) | [Paypal](https://paypal.me/akenobot1)}{footer:Este mensaje tiene 3 minutos de uso}{color:D1BBBB}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
type:'awaitedCommand'
}]

