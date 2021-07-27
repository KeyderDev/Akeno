module.exports = [{
    name: "blockword1",
    code: `<a:checkanimado:831161301282979911> Palabra Bloqueada
    $setServerVar[blockword1;$message[1]]
    $setServerVar[sysbw;true]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,

},{
    name: "blockword2",
    code: `<a:checkanimado:831161301282979911> Palabra Bloqueada
    $setServerVar[blockword2;$message[1]]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]

    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    name: "blockword3",
    code: `<a:checkanimado:831161301282979911> Palabra Bloqueada
    $setServerVar[blockword3;$message[1]]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]

    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    name: "blockword4",
    code: `<a:checkanimado:831161301282979911> Palabra Bloqueada
    $setServerVar[blockword4;$message[1]]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]

    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    name: "blockword5",
    code: `<a:checkanimado:831161301282979911> Palabra Bloqueada
    $setServerVar[blockword5;$message[1]]
    $onlyPerms[manageserver;:x:| Necesitas el permiso de **Manejar Servidor** para usar este comando]

    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`,
},{
    
        name: "$alwaysExecute",
        code:`
        <a:wrong:869274854157848687> No malas palabras $username!
        $deletecommand 
        $onlyIf[$message!=$get[r]]
        $let[r;$filterMessageWords[$message;no;$getServerVar[blockword1];$getServerVar[blockword2];$getServerVar[blockword3];$getServerVar[blockword4];$getServerVar[blockword5]]]
        `,
        type:"command"
        
}]