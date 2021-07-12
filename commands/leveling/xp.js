module.exports = ({
    name: "exp",
    aliases: ['xp'],
    code: `$color[ffff]
    $description[Tu xp actual es de **$getUserVar[xp]**!
Necesitas **$replaceText[$sub[$sum[$getUserVar[req;$findMember[$message]];0];$getUserVar[xp;$authorID]];-; ;1]** xp para llegar a nivel **$sum[$getUserVar[level];1]**!]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username;
;+;-1]&avatar=$userAvatar[$findUser[$message]]&level=$getUserVar[level;$findUser[$message]]&rank=$getLeaderboardInfo[level;$findUser[$message];user;top]&currentxp=$getUserVar[xp;$findUser[$message]]&nextlevelxp=$getUserVar[req;$findUser[$message]]&previouslevelxp=1&custombg=$get[url]&xpcolor=$get[color]&isboosting=false] 

$let[url;https://cdn.discordapp.com/attachments/842962585036521472/846936599987879966/rankcard.png]
$let[color;5865F2] 
$onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description::x:| El sistema de leveling no esta habilitado en este servidor! para habilitarlo use \`$getServerVar[prefix]leveling enable\`}{color:ffff}]
$onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})