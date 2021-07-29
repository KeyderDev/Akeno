module.exports = [{
    name: "security-panel",
    code: `
    $reactionCollector[$splitText[1];$authorID;3m;:one:,:two:,:three:,:four:,:five:;antiusers,antichannels,antilinks,antialts,blockwords;yes]
    
    $textSplit[$sendMessage[{title:Panel de Seguridad}{description:
    Este es un panel de seguridad, desde aqui, usted podra manejar todos los sistemas de seguridad,
    y desactivarlos tambien
    Aclaracion: Si usted toca para desactivar un sistema, el sistema se desactivara automaticamente sin dar un aviso PreviO
    Y si se desactiva el sistema, la configuracion del sistema no se perdera
    Desactivar AntiUsers: :one:
    Desactivar AntiChannels: :two:
    Desactivar Antilinks: :three:
    Desactivar AntiAlts: :four:
    Desactivar BlockWords: :five:
    
    
    
    }{color:GREEN};yes]; ]
        $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado en tu cuenta para usar este comando]
        $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    },{//categoría de configuración
    name: "antiusers",
    code: `$editMessage[$message[1];{color:GREEN}{title:AntiUsers desactivado}{description:
    Sistema desactivado correctamente}]
    $setServerVar[antiusers;false]
    $onlyIf[$getServerVar[antiusers]!=false;:x:| El sistema **AntiUsers** no esta activado]
    $onlyPerms[admin;:x| Necesitas ser un **ADMINISTRADOR** para usar este comando]
    `,
    type:'awaitedCommand'
    },{
    name: "antichannels",
    code: `$editMessage[$message[1];{color:GREEN}{title:Antichannels Desactivado}{description:
    Sistema desactivado correctamente}]
    $setServerVar[antichannels;false]
    $onlyIf[$getServerVar[antichannels]!=false;:x:| El sistema **AntiChannels** no esta activado]
    $onlyPerms[admin;:x:| Necesitas ser un **ADMINISTRADOR** para usar este comando]`,
    type:'awaitedCommand'
},{
    name: "antilinks",
    code: `$editMessage[$message[1];{color:GREEN}{title:Antilinks Desactivado}{description:
    Sistema desactivado correctamente}]
    $setServerVar[antilink;false]
    $onlyIf[$getServerVar[antilink]!=false;:x:| El sistema **AntiLinks** no esta activado]
    $onlyPerms[admin;:x:| Necesitas ser un **ADMINISTRADOR** para usar este comando]`,
    type: 'awaitedCommand'
    },{
    name: "antialts",
    code: `$editMessage[$message[1];{color:GREEN}{title:AntiAlts Desactivado}{description:
    Sistema desactivado correctamente}]
    $setServerVar[antialts;false]
    $onlyIf[$getServerVar[antialts]!=false;:x:| El sistema **AntiAlts** no esta activado]
    $onlyPerms[admin;:x:| Necesitas ser un **ADMINISTRADOR** para usar este comando]`,
    type: 'awaitedCommand'
},{
    name: "blockwords",
    code: `$editMessage[$message[1];{color:GREEN}{title:BlockWords desactivado}{description:
    Sistema desactivado correctamente}]
    $setServerVar[sysbw;false]
    $onlyIf[$getServerVar[sysbw]!=false;:x:| El sistema **BlockWords** no esta activado]
    $onlyPerms[admin;:x:| Necesitas ser un **ADMINISTRADOR** para usar este comando]`
}]