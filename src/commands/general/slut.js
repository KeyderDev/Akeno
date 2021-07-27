module.exports = ({
    name: "slut",
    code: `
    $title[TRABAJO SUCIO]
    $description[$randomText[Chupaste algo chiquito y rico y la chica te pago $random[30;115] dolares;Chupaste algo grande y tu padre te pago $random[30;115] dolares;Hiciste un trio y te pagaron $random[30;115]dolares;Te veniste en la boca de una chica y ella de pago $random[30;115] dolares]
    $footer[$username]
    $setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[30;115]];$authorID]
    $color[D1BBBB]
    $cooldown[10m;Hey! espera %time% para seguir con tus trabajos sucios]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})