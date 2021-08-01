module.exports = {
    name: "set-newsimage",
    code: `<a:checkanimado:831161301282979911> Hecho!
    $setVar[newsimage;$message[1]]
    $onlyForIDs[798250899041681428;788869971073040454;:x:| Solo mis desarrolladores pueden usar este comando]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}