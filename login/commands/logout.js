module.exports = {
    name: "logout",
    code: `$sendDM[$getGlobalUserVar[accountowner];{title:Sesion Cerrada}{description:
    Se ha detectado un cierre de sesion
    Usuario: $username
    Codigo: $randomString[16]
    }{color:GREEN}]
    $title[Sesion Cerrada]
    $description[
    Has cerrado la sesion de tu cuenta con Exito]
    $color[GREEN]
    $setGlobalUserVar[loggedin;falso]
    $setGlobalUserVar[signoffcode;$randomString[16]]
    $onlyIf[falso!=$getGlobalUserVar[loggedin];:x:| Necesitas estar logeado para usar este comando]
    $onlyIf[falso!=$getGlobalUserVar[account];:x:| Necesitas tener una cuenta para usar este comando]`
}