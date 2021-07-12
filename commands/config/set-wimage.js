module.exports = ({
name: "set-wimage",
code: `

$title[imagen seleccionada, Imagen:]
$image[$message]
$onlyIf[$checkContains[$message;https://;http]==true;:x:| La imagen de bienvenida debe ser un link]
$setServerVar[wimage;$message]
$footer[Solicitado por $username |$month | $day | $hour:$minute]
$onlyPerms[admin;:x:| Necesitas el permiso de ADMINISTRADOR para usar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})