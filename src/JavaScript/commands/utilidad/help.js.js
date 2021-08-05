module.exports = [{
name: "help",
aliases: ['ayuda'],
code: `
$reactionCollector[$splitText[1];$authorID;3m;🎶,🛠,🎮,⚙,💼,🔎,🧩,<:check:845428956491939850>,🎲,🔗,🔵,↩️;music,mod,diver,config,rpg,search,util,security,lvl,react,bothelp,menu;yes]

$textSplit[$sendMessage[{title:Comandos del bot Akeno e informacion}{description:Hola! Soy Akeno! Mucho gusto! A continuacion te muestro mis categorias
Musica#COLON# 🎶
Moderacion#COLON# 🛠
Diversion#COLON# 🎮
Configuracion#COLON# ⚙
RPG#COLON# 💼
Busqueda#COLON# 🔎 
Utilidad#COLON# 🧩
Seguridad#COLON# <:check:845428956491939850>
Leveling#COLON# 🎲
Reacciones#COLON# 🔗
Extras#COLON# 🔵
Para volver al menu#COLON# ↩️
    
**Links**
[Documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/) | [Soporte](https://discord.gg/tsrfmSgapV) | [Invite](https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot) | [Paypal](https://paypal.me/akenobot1)}{footer:Reaccione a un emoji para acceder a una categoria | Msg#COLON# 3 min de uso | Prx#COLON# $getServerVar[prefix]}{color:5865F2};yes]; ]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{//categoría de configuración
name: "config",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de configuracion}{description:
\`\`\`
setsug
reset-inv
set-verifiedrole
set-notverifiedrole
set-newrole
desactivate-captcha
desactivate-newrole
set-muterole
set-confess\`\`\`
}]`,
type:'awaitedCommand'
},{//categoria de interacción
name: "diver",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de Diversion}{description:
\`\`\`
achievement (Palabra separada con -)
meme
confess
ph (texto) - NSFW\`\`\`}]`,
type:'awaitedCommand'
},{
name: "lvl",
code: `$editMessage[$message[1];{title:Comandos de leveling}{description:
\`\`\`
leveling enable/disable
xpcooldown
l-leaderboard
xp\`\`\`
}{color:D1BBBB}`,
type:'awaitedCommand'
},{//categoria de musica
name: "music",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de musica}{description:
\`\`\`
play
skip
stop
queue
resume
skipto\`\`\`
- :star: **Premium**
\`\`\`
lyrics\`\`\`
}{color:D1BBBB}]`,
type:'awaitedCommand'
},{//categoría de moderacion
name: "mod",
code: `$editMessage[$message[1];{title:Comandos de Moderacion}{description:
\`\`\`
warn
checkwarns
unwarn
ban
kick
mute/unmute - Bugeado
infractions
lock/unlock\`\`\`}{color:D1BBBB}]`,
type:'awaitedCommand'
},{//categoria de utilidad
name: "util",
code: `$editMessage[$message[1];{color:ffff}{title:Comandos de utilidad}{description:
\`\`\`
botinfo       suggest
ping          report
profile       snipe
prefix        jumbo/jumbo.id
whois         docs
serverinfo    clean - Bugeado
role-info     function - Aoijs
channel-info  weather - Bugeado
avatar        report-bug
os\`\`\`}]`,
type:'awaitedCommand'
},{//categoria de roleplay
name: "rpg",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de RPG}{description:
\`\`\`
work         shop            buy-incubadora.p
stream       mine            code              
daily        use-cookie      crafteos          
dep          buy-lppan       descargas      
pay          buy-legg        craft-pc
inv          incubate-wolf   pc
fish         wolf-search     buy-diamondbox
buycookie    wolf-info       open-diamondbox
buy-pico     buy-lechuga     buy-bmiel
buy-caña     animal-list     use-moneyspell
bank         buy-cascominero buy-elixiroscuro\`\`\`
**Comandos de Perfil**
\`\`\`
profile/prof
set-pstatus
set-profilepic\`\`\`
}]`,
type:'awaitedCommand'
},{//categoria de busqueda
name: "search",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de busqueda}{description:
Aqui tienes diferentes comandos para buscar cosas en la web!
\`\`\`
anime\`\`\`
}]`,
type:'awaitedCommand'
},{//categoria de racciones
name: "react",
code: `$editMessage[$message[1];{title:Comandos de reaccion}{description:
\`\`\`
pat     cry
hug     angry
bully   wave
lick    kill
smug
punch
slap
bite
smile\`\`\`
}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "security",
code: `$editMessage[$message[1];{title:Comandos de Seguridad}{description:
\`\`\` 
antiusers-on/off               captcha/verify
antibots-on/off                desactivate-logs
antilinks-on/off
antichannels-on/off
blockword1/2/3/etc [Hasta 10]
set-antialt
systems
setlogs
enable-report\`\`\`
**Cuenta**
\`\`\`
register
login
logout
change-password
manage-premium
cancel-premium
delete-account\`\`\`
}{color:GREEN}]
`,
type:'awaitedCommand'
},{
name:"bothelp", 
code: `$editMessage[$message[1];{title:Comandos y cosas extra}{description:
**- Comandos Premium (classic o pro)**
              
\`\`\`
lyrics            set-p.embedcolor
dm                 Premium pro:
weekly             support
anime
remind
buy-premiumbox
set-profilecolor
define
color\`\`\`
**Developers**
\`\`\`
eval
djseval
exec
set-c.premiumuser
remove-c.premiumuser
set-p.premiumuser
remove-p.premiumuser
set-s.premiumuser
remove-s.premiumuser\`\`\`
}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "menu",
code: `$editMessage[$message[1];{title:Comandos del bot Akeno e informacion}{description:Hola! Soy Akeno! Mucho gusto! A continuacion te muestro mis categorias
Musica#COLON# 🎶
Moderacion#COLON# 🛠
Diversion#COLON# 🎮
Configuracion#COLON# ⚙
Roleo#COLON# 💼
Busqueda#COLON# 🔎 
Utilidad#COLON# 🧩
Seguridad#COLON# <:check:845428956491939850>
Leveling#COLON# 🎲
Reacciones#COLON# 🔗
Extras#COLON# 🔵
Para volver al menu#COLON# ↩️
    
**Links**
[Documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/) | [Soporte](https://discord.gg/tsrfmSgapV) | [Invite](https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot) | [Paypal](https://paypal.me/akenobot1)}{color:5865F2}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
type:'awaitedCommand'
}]