module.exports = ({
    name: "upload-video",
    code: `
    $title[$username]
    $description[Subiste un video a YouTube y ganaste <:akenocoin:842884874729816114>$random[200;300]]
    $setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[200;300]];$authorID]
    $color[D1BBBB]
    $cooldown[4m;Espera \`%time%\` para volver a subir un video.]
    $onlyIf[1<=$getUserVar[pc];:x: | Necesitas (PC x1)]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    })