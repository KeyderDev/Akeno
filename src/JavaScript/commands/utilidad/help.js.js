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
    \`setsug\`, \`leveling enable/disable\`, \`reset-inv\`, \`set-verifiedrole/notverifiedrole/newrole\`, \`desactivate-captcha\`,
    \`desactivate-newrole\`, \`set-autorole/desactivate-autorole\`, \`set-muterole\`, \`set-confess\`
}]`,
type:'awaitedCommand'
},{//categoria de interacción
name: "diver",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de Diversion}{description:Aqui tienes comandos para que te diviertas un rato
\`achievement\`, \`meme\`, \`confess\`, \`ph(texto)\` - *nsfw*}]`,
type:'awaitedCommand'
},{
name: "lvl",
code: `$editMessage[$message[1];{title:Comandos de leveling}{description:
\`leveling enable/disable\`, \`xpcooldown\`, \`l-leaderboard\`, \`xp\`}{color:D1BBBB}`,
type:'awaitedCommand'
},{//categoria de musica
name: "music",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de musica}{description: 
\`pause\`, \`skip\`, \`stop\`, \`lyrics\`, \`queue\`, \`skipto\`, \`resume\`, \`play\`}{color:D1BBBB}]`,
type:'awaitedCommand'
},{//categoría de moderacion
name: "mod",
code: `$editMessage[$message[1];{title:Comandos de Moderacion}{description:Aqui tienes los comandos de Moderacion
\`warn\`, \`checkwarns\`, \`addrole\`, \`serverinfo\`, \`unwarn\`, \`mute/unmute\`, \`unwarn\`, \`infractions\`,
\`lock-unlock\`
}{color:D1BBBB}]`,
type:'awaitedCommand'
},{//categoria de utilidad
name: "util",
code: `$editMessage[$message[1];{color:ffff}{title:Comandos de utilidad}{description:
\`botinfo\`, \`ping\`, \`profile\`, \`prefix\`, \`whois/serverinfo/channel-info/role-info\`, \`avatar\`, \`suggest\`,
\`report\`, \`snipe\`, \`jumbo/jumbo.id\`, \`docs\`, \`clean - Bugeado\`, \`function - Aoi.js\`, \`weather (ciudad) - bugeado\`,
\`report-bug\`}]`,
type:'awaitedCommand'
},{//categoria de roleplay
name: "rpg",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de RPG}{description:
\`work\`, \`stream\`, \`daily\`, \`dep\`, \`pay\`, \`inv\`, \`fish\`, \`buycookie\`, \`buy-pico\`, \`buy-caña\`,
\`shop\`, \`mine\`, \`use-cookie\`, \`buy-lppan\`, \`buy-legg\`, \`incubate-wolf\`, \`wolf-search\`, \`wolf-info\`,
\`buy-lechuga\`, \`animal-list\`, \`buy-incubadora-potenciada\`, \`code\`, \`crafteos\`, \`descargas\`, \`craft-pc\`,
\`pc\`, \`buy-premiumbox/diamondbox\`, \`open-premiumbox/diamondbox\`, \`buy-bmiel\`, \`use-moneyspell\`, \`bank\`,
\`buy-elixiroscuro\`, \`buy-cascominero\`
Comandos de perfil#COLON#
\`profile/prof\`, \`set-pstatus\`, \`set-profilepic\`}]`,
type:'awaitedCommand'
},{//categoria de busqueda
name: "search",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Comandos de busqueda}{description:
Aqui tienes diferentes comandos para buscar cosas en la web!
\`anime\`}]`,
type:'awaitedCommand'
},{//categoria de racciones
name: "react",
code: `$editMessage[$message[1];{title:Comandos de reaccion}{description:
\`pat\`, \`hug\`, \`bully\`, \`lick\`, \`smug\`, \`punch\`, \`slap\`, \`bite\`, \`smile\`, \`cry\`, \`angry\`, \`wave\`,
\`kill\`}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "security",
code: `$editMessage[$message[1];{title:Comandos de Seguridad}{description:
\`antiusers-on/off\`, \`antibots-on/off\`, \`antilinks-on/off\`, \`antichannels-on-off\`,  \`blockword/1/2/3/etc\`,
\`set-antialt\`, \`systems\`, \`setlogs\`, \`enable-report\`, \`captcha/verify\`, \`desactivate-logs\`,
Cuenta#COLON# 
\`register\`, \`login\`, \`change-password\`, \`password-forgot\`, \`logout\`, \`manage-premium\`, \`cancel-premium\`,
\`delete-account\`}{color:GREEN}]
`,
type:'awaitedCommand'
},{
name:"bothelp", 
code: `$editMessage[$message[1];{title:Comandos y cosas extra}{description:
- Comandos Premium (classic o pro)
\`lyrics\`, \`dm\`, \`weekly\`, \`anime\`, \`remind\`, \`buy-premiumbox/diamondbox\`, \`open-diamondbox/premiumbox\`,
\`set-profilecolor\`, \`define (solo ingles)\`, \`color\`, \`set-p.embedcolor\`
- Comandos Premium (premium pro)
\`support\`
Developers:
\`eval\`, \`djseval\`, \`exec\`, \`set-c.premiumuser/set-p.premiumuser\`, \`remove-c.premiumuser/remove-p.premiumuser\`,
\`set-s.premiumuser\`, \`remove-s.premiumuser\`
}{color:D1BBBB}]
`,
type:'awaitedCommand'
},{
name: "menu",
code: `$editMessage[$message[1];{title:Comandos del bot Akeno e informacion}{description::Hola! Soy Akeno! Mucho gusto! A continuacion te muestro mis categorias
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
[Documentacion](https://app.gitbook.com/@keyder/s/akeno-s-docs/) | [Soporte](https://discord.gg/tsrfmSgapV) | [Invite](https://discord.com/api/oauth2/authorize?client_id=831280478190436423&permissions=8&scope=bot) | [Paypal](https://paypal.me/akenobot1)}{footer:Este mensaje tiene 3 minutos de uso}{color:5865F2}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
type:'awaitedCommand'
}]