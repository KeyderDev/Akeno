module.exports = ({
    name: "systems",
    code: `
    Anti Users: $getServerVar[antiusers]
    Anti Channels: $getServerVar[antichannels]
    Anti Malicious: $getServerVar[antimalicious]
    Antilinks: $getServerVar[antilink]
    AntiAlts: $getServerVar[antialts]
    BlockWords: $getServerVar[sysbw]
    $onlyPerms[admin;:x:| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})