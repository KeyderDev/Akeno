module.exports = ({
    name: "l-leaderboard",
    aliases: ['lvls', 'levelleaderboard', 'lvlleaderboard', 'levellb', 'lvllb'],
    description: "Check the server level leaderboard",
    usage: "",
    category: "leveling",
    code: `$title[Top Niveles]
    $description[$userLeaderboard[level;asc;{top}. {username} - Level {value}]]
    $color[ffff]
    $cooldown[5s;{description:Hey! espera %time% para volver a usar este comando} {delete:5s}]
    $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description:❌| El sistema de leveling no esta activado en este servidor! Para habilitarlo, ponga esto \$getServerVar[prefix]leveling enable}{color:ffff}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})
