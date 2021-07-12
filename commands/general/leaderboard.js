module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Top Dinero",
    usage: "",
    category: "economy",
    code: `$title[Top dinero]
    $color[D1BBBB]
    $description[$globalUserLeaderBoard[money;asc; {top}. {username} - {value}💴]]
    $cooldown[5s;{description:Espera %time% para volver a usar este comando!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})